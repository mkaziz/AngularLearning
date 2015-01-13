angular.module("donorsApp").controller("ProjectController", ['$location', 'API', '$routeParams', function ($location, API,  $routeParams) {
    "use strict";
    
    var self = this;
    var projects = API.getSearchResults();

    var currentProjectArray = projects.proposals.filter(function (proposal) {
        return proposal.id == $routeParams.id;
    });
    
    if (currentProjectArray.length > 0) {
        self.project = currentProjectArray[0];
        console.log(self.project);
    }
    else {
        throw 'project not loaded successfully';
    }
    
    
}]);