angular.module('relatives.controllers', [])

.controller('RelativesCtrl', function($scope, Relatives, Spouses, Children) {
    $scope.relatives = Relatives.all();
    $scope.spouses = Spouses.all();
})

.controller('RelativeCtrl', function($scope, $stateParams, Relatives, Spouses, Children) {
    $scope.relative = Relatives.get( $stateParams.relativeId );
    $scope.spouse = Spouses.get( $scope.relative.spouse );
    $scope.children = _.filter( Children.all(), function( element ){
       var mapped = _.pluck( $scope.relative.children, 'children' );
        _.each( mapped, function( listItem ){ return listItem == element; } )
    } );
})

.controller('ChildrenCtrl', function($scope, Children ) {
  $scope.children = Children.all();
})

.controller('ChildCtrl', function($scope, $stateParams, Children ) {
  $scope.child = Children.get( $stateParams.childId );
})

