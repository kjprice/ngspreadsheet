
angular.module('spreadsheet.directives',[])
    .directive( 'keyup', [ '$window', function(  $window ) {
        return {
            link: function( $scope, elem, attrs ){
                var win = angular.element($window);
                win.bind("keydown",function(e){
                	moveTableCell(e, $scope.data);
                    $scope.$apply();
                })
            }
        }    
    } ] )

