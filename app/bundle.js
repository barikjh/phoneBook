(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/app.js":[function(require,module,exports){

var app = angular.module('app', ['ngRoute','mdo-angular-cryptography']);

app.config(['$routeProvider' ,'$cryptoProvider', function($routeProvider,$cryptoProvider) {
	//$cryptoProvider.setAesKey('ABCD123');
	$cryptoProvider.setCryptographyKey('ABCD123');
    $routeProvider	
    .when('/', {templateUrl: "views/phoneBook.html", controller: 'phoneBookCtrl'}) 
    .when('/phone-book',{templateUrl:"views/phoneBook.html", controller:'phoneBookCtrl'})
	.when('/addContact/:contact_id',{templateUrl:"views/addContact.html", controller :'addContactCtrl'})
	.when('/viewContact/:contact_id',{templateUrl:"views/viewContact.html", controller :'viewContactCtrl'})
    .otherwise({redirectTo: 'views/phoneBook.html'});
  }]);
  
 
 
},{}]},{},["./app/app.js"]);
