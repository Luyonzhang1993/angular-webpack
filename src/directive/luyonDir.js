"use strict";

import luyon from './../luyon' ;

luyon.directive('luyon',()=>{
    return {
        restrict : 'E',
        replace : true ,
        templateUrl : 'src/views/main.html',
        controller : 'rootCtrl',
    }
});