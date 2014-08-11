angular.module('relatives.controllers', ['ionic'])

.controller('ChildrenCtrl', function($scope, Children ) {
    $scope.children = Children.all();
    $scope.removeFlag = false;
    $scope.orderPredicate = '-dob';
})

.controller('ChildCtrl', function($scope, $stateParams, Children ) {
  $scope.child = Children.get( $stateParams.childId );
})

.controller( 'AddRowChildCtrl', function( $scope, $ionicModal ){
    //display a form modal with the attributes from the model
    //once filled validate
    
    //then insert a row and populate it with the form data
    $ionicModal.fromTemplateUrl('templates/add-row-child.html', {
        scope: $scope,
        animation: 'fade-in'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    //drop the modal
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });    
} )

.controller( 'AddChildCtrl', function( $scope, Children ){
    $scope.addChild = function(){
        Children.add( {
            name: $scope.childName,
            dob: moment( $scope.childDob ).format( "MM/DD/YYYY" ),
            interests: []
            
        } );
        $scope.closeModal();
    };
} )

.controller( 'RemoveChildCtrl', function( $scope, Children ){
    $scope.removeChild = function( index ){
        Children.remove( index );
    };
} )

.controller( 'BirthdayCtrl', function( $scope, Children ){
    var birthdays = Children.all();
    _.sortBy( birthdays, function( element ){ return element.dob } )
    $scope.nextBirthday = moment( moment( birthdays[ 0 ].dob ).format( "MMDD" ), "MMDD" ).add( 1, 'year' ).fromNow();
    $scope.nextBirthdayKid = birthdays[ 0 ].name;
} );
