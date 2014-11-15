angular.module("donorsApp").factory("API", ["$http", function ($http) {
    
    var constructSearchUrl = function (searchParameters) {
        
        var baseUrl = "http://api.donorschoose.org/common/json_feed.html?";
        
    }
    
    
    return {
                
        search : function (searchParameters) {
            var request = $http.jsonp("http://api.donorschoose.org/common/json_feed.html?subject1="+searchParameters.subjectId+"&APIKey=DONORSCHOOSE&callback=JSON_CALLBACK");
            
            return request;
        },
    
        searchPage : function (searchParameters) {
            var request = $http.jsonp("http://api.donorschoose.org/common/json_feed.html?subject1="+searchParameters.subjectId+"&index="+searchParameters.nextProposal+"&APIKey=DONORSCHOOSE&callback=JSON_CALLBACK");
            
            return request;
        }
        
    }
    
}]);