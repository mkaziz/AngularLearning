var demoApp = angular.module("demoApp", ['ngRoute']);

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "SomeController",
            templateUrl: 'partials/view1.html'
        })
        .when('/view2', {
            controller: "SomeController",
            templateUrl: 'partials/view2.html'
        })
        .otherwise({ redirectTo: '/' })
        
    
    
});

var controllers = {};

controllers.SomeController =  function ($scope) {
    $scope.people = [
        { name: "Sharpie", city: "Green Bay" },
        { name: "Austine", city: "Miami" },
        { name: "Jeff", city: "Houston" },
        { name: "Chris", city: "San Francisco" }
    ];
    
    $scope.addPerson = function () {
        $scope.people.push({
            name: $scope.newPerson,
            city: "Chicago"
        });
    };
};

demoApp.controller(controllers);