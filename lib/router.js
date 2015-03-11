Router.configure({
    layout: 'layout'
});

Router.map(function() {
    this.route('quiz', {
        path: '/',
        waitOn: function() {
            return Meteor.subscribe('rhymes');
        }
    });
    this.route('editor');
})