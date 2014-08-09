angular.module('relatives.services', [])

.factory('Relatives', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var relatives = [
    { id: 0, name: 'Scruff McGruff', spouse: 0, children: [0], relationship: 'brother' },
    { id: 1, name: 'G.I. Jane', spouse: 1, children: [1,4], relationship: 'aunt' },
    { id: 2, name: 'Miss Frizzle', spouse: 2, children: [2,5,6], relationship: 'sister' },
    { id: 3, name: 'Ash Ketchum', spouse: 3, children: [3,7,8,9], relationship: 'cousin' },
  ];

  return {
    all: function() {
      return relatives;
    },
    get: function( relativeId ) {
      // Simple index lookup
      return relatives[ relativeId ];
    },
    getSpouseId: function( relativeId ){ return relatives[ relativeId ].spouse; },
    getChildren: function( relativeId ){ return relatives[ relativeId ].children; }
  }
} )
  .factory('Spouses', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var spouses = [
    { id: 0, name: 'Buff McGruff', spouse: 0 },
    { id: 1, name: 'G.I. Georgio', spouse: 1  },
    { id: 2, name: 'Mr Frizzle', spouse: 2  },
    { id: 3, name: 'Ashlie Ketchum', spouse: 3  }
  ];

  return {
    all: function() {
      return spouses;
    },
    get: function( spouseId ) {
      // Simple index lookup
      return spouses[ spouseId ];
    }
  }
} )
  .factory( 'Children', function(){
  
    // Might use a resource here that returns a JSON array

      // Some fake testing data
      var children = [
        { id: 0, name: 'Scruff McGruff Jr', dob: '07/13/1978', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 1, name: 'G.I. Junior', dob: '07/13/1978', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 2, name: 'Miss Gurgle', dob: '07/13/1978', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 3, name: 'Scruff McGruff', dob: '07/13/1978', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 4, name: 'McCAssidy Jane', dob: '07/13/1978', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 5, name: 'Billy Jean', dob: '07/13/1978', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 6, name: 'Milly Philly', dob: '07/13/1978', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 7, name: 'Oragano Pie', dob: '07/13/1978', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 8, name: 'Olivia Nikolic', dob: '07/13/1978', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] },
        { id: 9, name: 'Ashley Ketchup', dob: '07/13/1978', interests: [ { name: 'Star Wars', date: '07/13/2010', level: 'high' }, { name: 'dinosaurs', date: '07/13/2000', level: 'high' } ] }
      ];

      return {
        all: function() {
          return children;
        },
        get: function( childId ) {
          // Simple index lookup
          return children[ childId ];
        }
      }
  
} );
