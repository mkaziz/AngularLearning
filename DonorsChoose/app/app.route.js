var donorsApp = angular.module("donorsApp");

donorsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "searchController",
            templateUrl: 'app/search/searchView.html'
        })
        .when('/results', {
            controller: "searchResultsController",
            templateUrl: 'app/search-results/searchResultsView.html'
        })
        .otherwise({ redirectTo: '/' })
});
