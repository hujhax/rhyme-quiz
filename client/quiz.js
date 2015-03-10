Template.quiz.initialize = function() {
    var rhymeData = Rhymes.find().fetch();

    var curRhyme = _.sample(rhymeData);
    var rhymeSetString = curRhyme && curRhyme.words;
    var rhymeSet = rhymeSetString.split(/\s*,\s*/); // split on commas and trim whitespace
}

Template.quiz.created = function() {
    Template.quiz.initialize();
}