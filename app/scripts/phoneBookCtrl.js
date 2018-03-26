'use strict';

app.controller('phoneBookCtrl',function($scope,$window,phoneBookService) {
    if(sessionStorage.getItem('savedData') != null){ 
		$scope.jsonData = JSON.parse(sessionStorage.getItem('savedData'));
    }
	else{	
		phoneBookService.getTestData().then(function(data){
			$scope.jsonData = data;
			sessionStorage.setItem("savedData", JSON.stringify(data));		
		});	
	}
});
  
app.controller('viewContactCtrl',function($scope,$filter,$routeParams,$location,phoneBookService) {    
	$scope.index = $routeParams.contact_id;

	if(sessionStorage.getItem('savedData') != null){
			$scope.jsonData = JSON.parse(sessionStorage.getItem('savedData'));
	}
	if( $scope.jsonData)
	{		
		$scope.currentContact=$filter('filter')($scope.jsonData.contacts,{id:$scope.index})[0];
	}
	$scope.removeContact = function()
	{
		console.log("removing contact");
		var index = $scope.jsonData.contacts.indexOf($scope.currentContact);
		$scope.jsonData.contacts.splice(index,1);
		sessionStorage.setItem("savedData", JSON.stringify($scope.jsonData));
		$location.path("/phone-book");
	}
});
  
app.controller('addContactCtrl',function($scope,$filter,$routeParams,phoneBookService) {
    $scope.currentContact = null;
	$scope.index = $routeParams.contact_id;	
	
	if(sessionStorage.getItem('savedData') != null){
		$scope.jsonData = JSON.parse(sessionStorage.getItem('savedData'));
	}	
	if( $scope.jsonData)
	{		
		$scope.currentContact=$filter('filter')($scope.jsonData.contacts,{id:$scope.index})[0];
	}
	$scope.addContact=function(newContact){
		//Updating the data in the session storage
		var index = $scope.jsonData.contacts.indexOf($scope.currentContact);
		if(index < 0 && newContact)
		{
			var length = $scope.jsonData.contacts.length;
			newContact.id=length+1;
			$scope.jsonData.contacts.push(newContact);
		}
		else{
			$scope.jsonData.contacts[index]=$scope.currentContact;
		}
		sessionStorage.setItem("savedData", JSON.stringify($scope.jsonData));
	}
});