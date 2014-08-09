angular.module('relatives.directives', [])

.directive( 'getAge', function(){
    return {
        restrict: 'E',
        scope:{
            dob: '='
        },
        controller: function( $scope ){
            $scope.howOld = moment( $scope.dob ).fromNow( true );
        },
        template: '<span>{{ howOld }}</span>'
    };
} );