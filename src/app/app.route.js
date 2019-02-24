'use strict';

angular.module('app').config(function($locationProvider,$stateProvider,$urlRouterProvider) {

    console.log('Inside app config');

    $locationProvider.html5Mode(true);

    $stateProvider.state('1',{
        url:'/1',
        template:'you hit 1'
    });
    $stateProvider.state('2',{
        url:'/2',
        template:'you hit 2'
    });
    $stateProvider.state('3',{
        url:'/3',
        template:'you hit 3'
    });
    $urlRouterProvider.otherwise('/');

});