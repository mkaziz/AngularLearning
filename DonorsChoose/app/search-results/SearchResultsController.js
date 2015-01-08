angular.module("donorsApp").controller("SearchResultsController", ['$scope', '$location', 'API', function ($scope, $location, API) {
    "use strict";
    
    var self = this;
    
    var data = API.getSearchResults();
    
    if (!data || data.length == 0) {
        $location.url('/');
    }
    
    self.proposals = data.proposals;
    self.totalProposals = data.totalProposals;
    
    self.didClickProposal = function (proposalId) {
        
    }
    
}]);