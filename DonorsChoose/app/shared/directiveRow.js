var donorsApp = angular.module("donorsApp");

donorsApp.directive('row', function () {

  return {
    restrict: 'A',
    templateUrl: '/app/shared/directiveRow.html',
    transclude: true,
    replace: true
  };

});