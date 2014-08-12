angular.module('relatives.services', [ 'ngStorage' ])
  .factory( 'Children', function( $localStorage ){
  
    // Might use a resource here that returns a JSON array

      // Some fake testing data
      var children = [/*
        { firstName: 'Scruff Jr', lastName:'McGruff', dob: '01/14/2004', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { firstName: 'G.I. Junior', lastName:'McGruff', dob: '12/25/2002', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { firstName: 'Missy', lastName:'Gurgle', dob: '02/07/2007', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { firstName: 'Scotty', lastName:'Gurgle', dob: '11/09/2009', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { firstName: 'McCAssidy', lastName:'Jane', dob: '04/10/2010', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { firstName: 'Billy', lastName:'Jean', dob: '06/12/2012', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { firstName: 'Milly', lastName:'Philly', dob: '07/13/1999', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { firstName: 'Oragano', lastName:'Pie', dob: '09/13/1981', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { firstName: 'Olivia', lastName:'Nikolic', dob: '12/13/2000', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { firstName: 'Ashley', lastName:'Ketchup', dob: '03/13/1978', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] }
      */];
      
      

      return {
        all: function() {
          return children;
        },
        get: function( childId ) {
            // Simple index lookup
            return children[ childId ];
        },
        add: function( data ){ children.push( data ); },
        remove: function( index ){ children.splice( index, 1 ); },
        sortByBirthday: function(){
            return _.sortBy( children, function( element ){ return element.dob } );
        },
        nextBirthday: function(){
            //reorder array of objects by date
            var sortedByBirthday = this.sortByBirthday();
            return sortedByBirthday[ 0 ].dob;
        },
          
        addInterest: function( childIndex, interestObject ){
            children[ childIndex ].interests.push( interestObject );
        },
        removeInterest: function( childIndex, interestIndex ){
            children[ childIndex ].interests.splice( interestIndex, 1 );
        },
        save: function(){
            $localStorage.children = JSON.stringify( children );
        },
        load: function(){
            var unparsed = $localStorage.children;
            if( !!unparsed ) children = JSON.parse( unparsed );
        }
      }
  
} );
