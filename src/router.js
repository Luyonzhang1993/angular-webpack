"use strict";

import luyon from './luyon' ; 

luyon.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('_index') ;
        $stateProvider
            .state('_index',{
                url : '/',
                views : {
                    "main" : {
                        templateUrl : 'src/views/_index.html',
                        controller : '_indexCtrl'
                    }
                }
            })
    }
]);