angular.module("donorsApp").controller("searchController", ['$scope', 'API', function ($scope, API) {
    
    $scope.showMoreOptions = false;
    
    $scope.subjects =[
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
    };
    
}]);