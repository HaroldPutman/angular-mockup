'use strict';

/* Directives */
angular.module('myDirectives', []).directive('columnHeader', function () {
return {
    restrict: 'E',
    scope: {
    	name: "@name"
    },
    templateUrl: '/app/partials/column-header.html'
};
});