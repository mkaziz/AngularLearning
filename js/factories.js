var demoApp = angular.module("demoApp", []);

var controllers = {};

demoApp.factory('someFactory', function () {
    var factory = {};
    var people = [
        { name: "Sharpie", city: "Green Bay" },
        { name: "Austine", city: "Miami" },
        { name: "Jeff", city: "Houston" },
        { name: "Chris", city: "San Francisco" }
    ];
    
    factory.getPeople = function () {
        return people;
    }
    
    return factory;
})


controllers.someController = function ($scope, someFactory) {
    $scope.people = someFactory.getPeople();
}

demoApp.controller(controllers);