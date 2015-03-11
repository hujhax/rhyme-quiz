Router.configure({
    layout: 'layout'
});

Router.map(function() {
    this.route('quiz', {path: '/'});
    this.route('editor');
})