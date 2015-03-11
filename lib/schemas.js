var Schemas = {};

Schemas.Rhymes = new SimpleSchema({
    words: {
        type: String,
        label: "Rhyming Words"
    }
});

Rhymes.attachSchema(Schemas.Rhymes);