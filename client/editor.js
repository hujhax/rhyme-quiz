Template.editor.helpers({
    rhymes: function() {
        return Rhymes.find();
    },
    uniqueUpdateID: function() {
        return "update-each-" + this._id;
    }
});