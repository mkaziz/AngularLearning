angular.module("donorsApp").factory("API", ["$http", function ($http) {
    
    var constructSearchUrl = function (searchParameters) {
        
        var baseUrl = "http://api.donorschoose.org/common/json_feed.html?APIKey=DONORSCHOOSE&callback=JSON_CALLBACK";
        
        if (searchParameters.keywords || searchParameters.zipCode) {
            var searchTerm = (searchParameters.keywords || "") + " " + (searchParameters.zipCode || "");
            baseUrl += "&keywords=" + encodeURIComponent(searchTerm.trim());
        }
        
        if (searchParameters.nextProposal) {
            baseUrl += "&index=" + encodeURIComponent(searchParameters.nextProposal);
        }
        
        if (searchParameters.subjectId) {
            baseUrl += "&subject1=" + encodeURIComponent(searchParameters.subjectId);
        }
        
        if (searchParameters.costToCompleteId) {
            baseUrl += "&costToComplete=" + encodeURIComponent(searchParameters.costToCompleteId);
        }
        
        if (searchParameters.isHighNeed) {
            baseUrl += "&highLevelPoverty=true";
        }
        
        if (searchParameters.gradeLevelId) {
            baseUrl += "&gradeType=" + encodeURIComponent(searchParameters.gradeLevelId);
        }
        
        if (searchParameters.sortById) {
            baseUrl += "&sortBy=" + encodeURIComponent(searchParameters.sortById);
        }
        
        return baseUrl;
    }
    
    var results = null;
    
    return {
                
        search : function (searchParameters) {
            var request = $http.jsonp(constructSearchUrl(searchParameters));
            
            request.success(function (data, status, headers, config) {
                results = data;
            });
            
            return request;
        },
        
        getSearchResults: function() {
            return results;
        }
        
    }
    
}]);