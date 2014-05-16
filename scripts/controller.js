angular.module('spreadsheet.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
    	$scope.numrows = 10;
    	$scope.numcolumns = 10;
    	$scope.count = function(){
    		$scope.total = 0;
 	    	for(var i = 0; i < $scope.numrows; i ++){
		    	for(var n = 0; n < $scope.numcolumns; n ++){
		    		$scope.total += parseInt($scope.data[i][n].value || 0);
		    	}
	    		
	    	}
   	}
    	$scope.setupData = function(){
	    	$scope.data = [];
	    	for(var i = 0; i < $scope.numrows; i ++){
	    		$scope.data[i]=[];
		    	for(var n = 0; n < $scope.numcolumns; n ++){
		    		$scope.data[i][n]={value: ""};
		    	}
	    		
	    	}
    	}
    }]);