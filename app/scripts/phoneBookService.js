'use strict'

app.service('phoneBookService',function($http) {
    console.log("Inside Phone Book service");
	
	/*this.getTestData = function(){
		$http.get('test-data/seed.json').then(function (response) {        
		return response.data.toString();
    });	
		
	}  */

    this.getTestData = function(){
		return $http({
            method: 'GET',
            url: 'test-data/seed.json'            
            
			})
            .then(function(data) {
				return data.data;
           });
	}		
	
}); 	