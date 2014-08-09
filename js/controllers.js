angular.module('relatives.controllers', ['ionic'])

.controller('RelativesCtrl', function($scope, Relatives, Spouses, Children) {
    $scope.relatives = Relatives.all();
    $scope.spouses = Spouses.all();
})

.controller('RelativeCtrl', function($scope, $stateParams, Relatives, Spouses, Children) {
    $scope.relative = Relatives.get( $stateParams.relativeId );
    $scope.spouse = Spouses.get( $scope.relative.spouse );
    $scope.children = [];
    //get all children
    var kids = Children.all();
    //link the kid with the parent by id
    for( kid in $scope.relative.children ){
        $scope.children.push( kids[ kid ] );
    } 
})

.controller('ChildrenCtrl', function($scope, Children ) {
  $scope.children = Children.all();
})

.controller('ChildCtrl', function($scope, $stateParams, Children ) {
  $scope.child = Children.get( $stateParams.childId );
})

.controller( 'AddRowRelativeCtrl', function( $scope, $ionicModal ){
    //display a form modal with the attributes from the model
    //once filled validate
    
    //then insert a row and populate it with the form data
    $ionicModal.fromTemplateUrl('templates/add-row-relative.html', {
        scope: $scope,
        animation: 'slide-in-up'
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

.controller( 'AddRelativeCtrl', function( $scope, Relatives ){
    $scope.addRelative = function(){
        Relatives.add( {
            name: $scope.relativeName,
            relationship: $scope.relativeRelationship
        } );
    };
} )

.controller( 'AddRowChildCtrl', function( $scope, $ionicModal ){
    //display a form modal with the attributes from the model
    //once filled validate
    
    //then insert a row and populate it with the form data
    $ionicModal.fromTemplateUrl('templates/add-row-child.html', {
        scope: $scope,
        animation: 'slide-in-up'
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
            dob: $scope.childDob, 
            interests: [ { name: $scope.interestName, date: $scope.interestDate, level: $scope.interstLevel } ]
            
        } );
    };
} )
