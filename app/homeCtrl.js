'use strict';

app.controller('homeCtrl',['$scope','$crypto',function($scope,$crypto) {
    console.log("Inside controller");
	
	$scope.title = "This is a title";
	this.$crypto = $crypto;
	$scope.data = 'Jharana';
	/*$scope.data = 'Jharana';
	$scope.encrypted = this.$crypto.encrypt($scope.data);
	$scope.decrypted = this.$crypto.decrypt($scope.encrypted); */
	$scope.submit =function(){
		this.$crypto = $crypto;
		$scope.encrypted = this.$crypto.encrypt($scope.data);
		$scope.decrypted = this.$crypto.decrypt($scope.encrypted);
	};	
	
  }]);
  
 