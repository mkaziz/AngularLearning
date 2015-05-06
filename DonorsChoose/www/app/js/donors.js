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

donorsApp.service("API", API);

var controllers = {};

donorsApp.factory('subjectFactory', function () {
    var factory = {};
    var subjects = [
                    {
                        id: "",
                        title: ""
                    },
                    {
                        id: -1,
                        title: "Music and the Arts"
                    },
                    {
                        id: 2,
                        title: "Performing Arts"
                    },
                    {
                        id: 3,
                        title: "Sports"
                    },
                    {
                        id: 4,
                        title: "Literature and Writing"
                    }
                   ];
    
    factory.getSubjects = function () {
        return subjects;
    }
    
    return factory;
})


controllers.homeController = function ($scope, $http, subjectFactory, API, UtilitiesService) {
    $scope.subjects = subjectFactory.getSubjects();
    $scope.proposals = [];
    $scope.totalProposals = 0;
    $scope.index = 0;    
    $scope.max = 10;    
    $scope.search = function(searchText, selectedSubject) {
        var searchParameters = {
            subjectId : selectedSubject.id
        }
        
        API.search(searchParameters).success(function (data, status, headers, config) {
            $scope.proposals = data.proposals;
            $scope.totalProposals = data.totalProposals;
            $scope.index = data.index;            
            $scope.max = data.max;            
            console.log(data);
        });
    }
    $scope.getArray = function() {
        console.log($scope.totalProposals);
        return UtilitiesService.getArray($scope.proposals.length > 0 ? Math.ceil($scope.totalProposals/$scope.proposals.length) : 0);
    }
    
    $scope.searchPage = function(searchText, selectedSubject, selectedPage) {
        var searchParameters = {
            subjectId : selectedSubject.id,
            nextProposal : selectedPage * $scope.max
        }
        
        API.searchPage(searchParameters).success(function (data, status, headers, config) {
            $scope.proposals = data.proposals;
            $scope.totalProposals = data.totalProposals;
            $scope.index = data.index;            
            console.log(data);
        });
    }
        
    
}

donorsApp.controller(controllers);