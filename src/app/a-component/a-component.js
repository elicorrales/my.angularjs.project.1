'use strict';

angular.module('app').component('aComponent', {
    transclude:true,
    templateUrl:'app/a-component/a-component.html',
    controller: function($scope) {

        console.log('Inside a-component controller');
    }
})