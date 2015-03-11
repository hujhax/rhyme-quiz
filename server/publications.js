// on the server
Meteor.publish('rhymes', function() {
  return Rhymes.find();
});