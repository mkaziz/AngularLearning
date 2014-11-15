var donorsApp = angular.module("donorsApp");

donorsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "searchController",
            templateUrl: 'app/search/searchView.html'
        })
        .when('/view2', {
            controller: "resultsController",
            templateUrl: 'app/search-results/resultsView.html'
        })
        .otherwise({ redirectTo: '/' })
});