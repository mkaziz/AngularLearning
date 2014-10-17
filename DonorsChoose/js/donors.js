var donorsApp = angular.module("donorsApp", ['ngRoute','ngSanitize']);

donorsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "homeController",
            templateUrl: 'partials/home.html'
        })
        .when('/view2', {
            controller: "homeController",
            templateUrl: 'partials/view2.html'
        })
        .otherwise({ redirectTo: '/' })

});

var controllers = {};

donorsApp.factory('subjectFactory', function () {
    var factory = {};
    var subjects = [ "Music and the Arts", "Performing Arts", "Sports", "Literature and Writing"  ];
    
    factory.getSubjects = function () {
        return subjects;
    }
    
    return factory;
})


controllers.homeController = function ($scope, $http, subjectFactory) {
    $scope.subjects = subjectFactory.getSubjects();
    $scope.proposals = [];
    $scope.searchSubject = function(index) {
        var request = $http.jsonp("http://api.donorschoose.org/common/json_feed.html?subject1="+index+"&APIKey=DONORSCHOOSE&callback=JSON_CALLBACK");
        request.success(function (data, status, headers, config) {
            $scope.proposals = data.proposals;
            console.log(data.proposals[0]);
        });
    }
}

donorsApp.controller(controllers);