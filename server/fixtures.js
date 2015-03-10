addFixtures = function() {
    if (!Rhymes.findOne()) {
        Rhymes.insert({words: "cat, hat, bat"});
        Rhymes.insert({words: "dog, fog, log"});
    }
}