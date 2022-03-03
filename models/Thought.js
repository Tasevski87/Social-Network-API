const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'Thought Text is Required',
        validate: [({ length }) => length <= 280, 'Must be between 1 and 280 characters.']
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: 'Username is Required',
    },
    reactions: [reactionSchema],
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = { Thought };