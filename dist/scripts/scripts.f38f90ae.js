"use strict";angular.module("angularShowcaseApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngAutocomplete","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/autocomplete",{templateUrl:"views/autocomplete.html",controller:"AutocompleteCtrl"}).when("/calendar",{templateUrl:"views/calendar.html",controller:"CalendarCtrl"}).otherwise({redirectTo:"/"})}]).directive("prism",[function(){return{restrict:"A",link:function(a,b){b.ready(function(){Prism.highlightElement(b[0])})}}}]),angular.module("angularShowcaseApp").controller("MainCtrl",function(){}),angular.module("angularShowcaseApp").controller("AutocompleteCtrl",["$scope",function(a){a.result1="",a.options1=null,a.details1="",a.result2="",a.options2={country:"ca",types:"(cities)"},a.details2="",a.result3="",a.options3={country:"gb",types:"establishment"},a.details3=""}]),angular.module("angularShowcaseApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]),angular.module("angularShowcaseApp").controller("CalendarCtrl",["$scope",function(a){a.today=function(){a.dt=new Date},a.today(),a.clear=function(){a.dt=null},a.disabled=function(a,b){return"day"===b&&(0===a.getDay()||6===a.getDay())},a.toggleMin=function(){a.minDate=a.minDate?null:new Date},a.toggleMin(),a.open=function(b){b.preventDefault(),b.stopPropagation(),a.opened=!0},a.dateOptions={formatYear:"yy",startingDay:1},a.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],a.format=a.formats[0]}]).directive("datepickerPopup",["dateFilter","datepickerPopupConfig",function(a,b){return{restrict:"A",priority:1,require:"ngModel",link:function(c,d,e,f){var g=e.datepickerPopup||b.datepickerPopup;f.$formatters.push(function(b){return a(b,g)})}}}]);