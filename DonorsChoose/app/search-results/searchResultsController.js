angular.module("donorsApp").controller("searchResultsController", ['$scope', '$location', 'API', function ($scope, $location, API) {
    
    var data = API.getSearchResults();
    
    if (!data || data.length == 0) {
        $location.url('/');
    }
    
    $scope.proposals = data.proposals;
    $scope.totalProposals = data.totalProposals;
    
}]);