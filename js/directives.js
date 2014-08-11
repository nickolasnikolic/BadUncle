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
} )

.directive( 'getBirthday', function(){
    return {
        restrict: 'E',
        scope:{
            dob: '='
        },
        controller: function( $scope ){
            var stringBirthdate = String( $scope.dob );
            $scope.birthday = stringBirthdate.slice( 0, 5 );
        },
        template: '<span>{{ birthday }}</span>'
    };
} );