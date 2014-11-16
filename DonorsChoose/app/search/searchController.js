angular.module("donorsApp").controller("searchController", ['$scope', 'API', 'SearchFactory', function ($scope, API, SearchFactory) {
    
    $scope.showMoreOptions = false;
    
    $scope.subjects = SearchFactory.subjects;
    $scope.costToCompletes = SearchFactory.costToCompletes;
    $scope.gradeLevels = SearchFactory.gradeLevels;
    $scope.sortBys = SearchFactory.sortBys;
    
    $scope.search = function() {
        var searchParameters = {
            subjectId : $scope.selectedSubject.id,
            keywords : $scope.searchText,
            zipCode : $scope.zipCode,
            gradeLevelId : $scope.gradeLevel.id,
            sortById : $scope.sortBy.id,
            costToCompleteId: $scope.costToComplete.id
        }
        
        API.search(searchParameters).success(function (data, status, headers, config) {
            $scope.proposals = data.proposals;
            $scope.totalProposals = data.totalProposals;
            $scope.index = data.index;            
            $scope.max = data.max;            
            console.log(data);
        });
    };
    
}]);