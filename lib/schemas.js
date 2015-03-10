var Schemas = {};

Schemas.Rhymes = new SimpleSchema({
    words: {
        type: String,
        label: "Rhyming Words",
        max: 30
    }
});

Rhymes.attachSchema(Schemas.Rhymes);