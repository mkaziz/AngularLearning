var donorsApp = angular.module("donorsApp");

donorsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "SearchController",
            templateUrl: 'app/search/searchView.html'
        })
        .when('/results', {
            controller: "SearchResultsController",
            templateUrl: 'app/search-results/searchResultsView.html'
        })
        .when('/project/:id', {
            controller: "ProjectController",
            templateUrl: 'app/project/projectView.html'
        })
        .otherwise({ redirectTo: '/' })
});
