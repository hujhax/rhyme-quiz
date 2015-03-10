Template.quiz.initialize = function() {
    var rhymeData = Rhymes.find().fetch();

    var curRhyme = _.sample(rhymeData);
    var rhymeSetString = curRhyme && curRhyme.words;

    if (!rhymeSetString) {
        return;
    }

    var rhymeSet = rhymeSetString.split(/\s*,\s*/); // split on commas and trim whitespace
    var rhymeWord = _.sample(rhymeSet);
    rhymeSet = _.without(rhymeSet, rhymeWord);

    Session.set("rightAnswers", []);
    Session.set("wrongAnswers", []);
    Session.set("otherAnswers", rhymeSet);
    Session.set("rhymeWord", rhymeWord);
};

Template.quiz.rendered = function() {
    Template.quiz.initialize();
};

Template.quiz.helpers({
    answers: function() {
        return {
            right: Session.get("rightAnswers"),
            wrong: Session.get("wrongAnswers"),
            other: Session.get("otherAnswers")
        }
    },
    rhymeWord: function() {
        return Session.get("rhymeWord");
    }
});

Template.quiz.events({
    'click .refresh': function() {
        Template.quiz.initialize();
    },
    'submit .rhyme-entry': function(event) {
        var attempt = event.target.attemptedRhyme.value;
        event.target.attemptedRhyme.value = "";

        if (_.contains(Session.get("otherAnswers"), attempt)) {
            Session.set("otherAnswers", _.without(Session.get("otherAnswers"), attempt));

            if (!(_.contains(Session.get("rightAnswers"), attempt))) {
                Session.set("rightAnswers", Session.get("rightAnswers").concat(attempt));
            }
        }
        else if (!(_.contains(Session.get("wrongAnswers"), attempt))) {
            Session.set("wrongAnswers", Session.get("wrongAnswers").concat(attempt));
        }
        return false;
    }
});