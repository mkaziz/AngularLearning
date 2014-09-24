var demoApp = angular.module("demoApp", []);


var controllers = {};

controllers.SomeController =  function ($scope) {
    $scope.people = [
        { name: "Sharpie", city: "Green Bay" },
        { name: "Austine", city: "Miami" },
        { name: "Jeff", city: "Houston" },
        { name: "Chris", city: "San Francisco" }
    ];
};

demoApp.controller(controllers);