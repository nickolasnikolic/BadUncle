angular.module('relatives.services', [])
  .factory( 'Children', function(){
  
    // Might use a resource here that returns a JSON array

      // Some fake testing data
      var children = [
        { id: 0, name: 'Scruff McGruff Jr', dob: '07/14/2004', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 1, name: 'G.I. Junior', dob: '12/25/2002', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 2, name: 'Miss Gurgle', dob: '07/07/2007', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 3, name: 'Scruff McGruff', dob: '11/09/2009', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 4, name: 'McCAssidy Jane', dob: '07/10/2010', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 5, name: 'Billy Jean', dob: '07/12/2012', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 6, name: 'Milly Philly', dob: '07/13/1999', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 7, name: 'Oragano Pie', dob: '09/13/1981', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 8, name: 'Olivia Nikolic', dob: '12/13/2000', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 9, name: 'Ashley Ketchup', dob: '03/13/1978', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] }
      ];

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
        }
      }
  
} );
