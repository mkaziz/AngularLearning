angular.module("donorsApp").controller("SearchController", ['$location', 'API', 'SearchFactory', function ($location, API, SearchFactory) {
    "use strict";
    
    var self = this;
    
    self.showMoreOptions = false;
    
    self.subjects = SearchFactory.subjects;
    self.costToCompletes = SearchFactory.costToCompletes;
    self.gradeLevels = SearchFactory.gradeLevels;
    self.sortBys = SearchFactory.sortBys;
    
    self.search = function() {
        var searchParameters = {
            subjectId : self.selectedSubject.id,
            keywords : self.searchText,
            zipCode : self.zipCode,
            gradeLevelId : self.gradeLevel.id,
            sortById : self.sortBy.id,
            costToCompleteId: self.costToComplete.id
        }
        
        API.search(searchParameters).success(function (data, status, headers, config) {
            $location.url('/results');
        });
    };
    
    self.setShowMoreOptions = function (bool) {
        self.showMoreOptions = bool;
    }
    
}]);