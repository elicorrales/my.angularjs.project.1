'use strict';

angular.module('app').component('appMain', {
    templateUrl:'app/app-main/app-main.html',
    controller: function($scope) {
        console.log('Inside appMain controller');

        $scope.items = [
            {id:1,name:"item"},
            {id:2,name:"item"},
            {id:3,name:"item"},
            {id:4,name:"item"},
            {id:5,name:"item"},
        ]
    }
})