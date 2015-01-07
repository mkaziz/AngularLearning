var donorsApp = angular.module("donorsApp");

donorsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "SearchController",
            templateUrl: 'app/search/searchView.html'
        })
        .when('/results', {
            controller: "searchResultsController",
            templateUrl: 'app/search-results/searchResultsView.html'
        })
        .otherwise({ redirectTo: '/' })
});
