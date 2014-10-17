var donorsApp = angular.module("donorsApp", []);

var controllers = {};

donorsApp.factory('subjectFactory', function () {
    var factory = {};
    var subjects = [ "Music and the Arts", "Performing Arts", "Sports", "Literature and Writing"  ];
    
    factory.getSubjects = function () {
        return subjects;
    }
    
    return factory;
})


controllers.homeController = function ($scope, subjectFactory) {
    $scope.subjects = subjectFactory.getSubjects();
}

donorsApp.controller(controllers);