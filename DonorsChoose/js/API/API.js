var API = function ($http) {
    this.search = function (searchParameters) {
        var request = $http.jsonp("http://api.donorschoose.org/common/json_feed.html?subject1="+searchParameters.subjectId+"&APIKey=DONORSCHOOSE&callback=JSON_CALLBACK");
        
        return request;
    }
    
    this.search = function (searchParameters) {
        var request = $http.jsonp("http://api.donorschoose.org/common/json_feed.html?subject1="+searchParameters.subjectId+"&index="+searchParameters.nextProposal+"&APIKey=DONORSCHOOSE&callback=JSON_CALLBACK");
        
        return request;
    }
}