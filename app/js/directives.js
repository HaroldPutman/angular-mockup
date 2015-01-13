'use strict';

/* Directives */
var myd = angular.module('myDirectives', []);

myd.directive('columnHeader', function () {
return {
    restrict: 'E',
    scope: {
    	name: "@name"
    },
    templateUrl: '/app/partials/column-header.html'
};
});

myd.directive('rowActions', function () {
return {
    restrict: 'E',
    scope: {},
    templateUrl: '/app/partials/row-actions.html'
};
});