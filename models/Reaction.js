const { Schema, Types } = require('mongoose');


//reaction schema tied to thought
const reactionSchema = new Schema({
    
    //set costum id to avoid confusion with parrent 
    reactionId: { 
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: 'Reaction is Required',
        validate: [({ length }) => length <= 280, 'MXIMUM 280 characters.']
    },
    username: {
        type: String,
        required: 'Username is Required'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
},
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);



module.exports = reactionSchema;