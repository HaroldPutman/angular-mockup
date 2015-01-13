'use strict';

/* Directives */
var myc = angular.module('myControllers', []);

myc.controller('pageController', ['$scope', '$document', '$window',
	function ($scope, $document, $window) {
		// make an element stick to the right side of browser if its
		// parent element is outside the viewport.
		$scope.stickToRight = function(sel) {
			var cx = (window.innerWidth || document.documentElement.clientWidth);
			var e = document.querySelectorAll(sel);
			for (var i = 0; i < e.length; ++i) {
				var rect = e[i].parentNode.getBoundingClientRect();
				if (rect.right > cx) {
					e[i].classList.add('stick-right');
				} else {
					e[i].classList.remove('stick-right');
				}
			}
			return $scope;
		};
		$scope.scrollTopWithParent = function(sel) {
			var e = document.querySelectorAll(sel);
			for (var  i = 0; i < e.length; ++i) {
				var r = e[i].parentNode.getBoundingClientRect();
				var pad = parseInt(window.getComputedStyle(e[i].parentNode, null).getPropertyValue('padding-top'));
				e[i].style.top = r.top + pad + 'px';
			}
			return $scope;
		}
		$document.ready(function() {
			angular.element($window).bind('resize', function(e){
				$scope.stickToRight('.right-sticky');
				$scope.scrollTopWithParent('.right-sticky');
			});
			angular.element($window).bind('scroll', function(e){
				$scope.scrollTopWithParent('.right-sticky');
			});
			$scope.stickToRight('.right-sticky');
			$scope.scrollTopWithParent('.right-sticky');
			$('table.sticky-th').stickyTableHeaders({fixedOffset: $('ul.nav-tabs')});
			$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
				$scope.stickToRight('.right-sticky');
				$scope.scrollTopWithParent('.right-sticky');
			});
		});
}]);

myc.controller('rowController', ['$scope', function($scope){
	$scope.row = $scope.$parent;
	$scope.beginEdit = function() {
		console.log('edit row');
	};
}]);

myc.controller('bigTableController', ['$scope', '$http', function($scope, $http){
	$http.get('data/words.json').success(function(data) {
    	$scope.words = data;
  	});
}]);

myc.controller('userTableController', ['$scope', '$http', function($scope, $http){
	$http.get('http://api.randomuser.me/?results=100').success(function(data) {
		$scope.users = data.results;
	});
}]);