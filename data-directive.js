(function(angular) {
  'use strict';
angular.module('dragModule', []).controller('Controller', ['$scope', function($scope) {
    $scope.format = '10102010';
  }])
  .directive('myDraggable', ['$document', function( $document) {
    return {
      restrict: 'A',
  		require: 'ngModel',
      link: function(scope, element, attr) {
        var startX = 0, startY = 0, x = 0, y = 0;
        //alert(scope.format);
        element.on('mousedown', function(event) {
          //alert(scope.format);
        });
       scope.$watch('format', function(value) {
          var processed = value.replace(/^(\d{2})(\d{2})(\d{4}).*/,"$1/$2/$3");
          scope.format = processed;
      });
       
      }
    };
  }]);
})(window.angular);
