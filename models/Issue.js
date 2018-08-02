import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Issue = new Schema({
    title: {
        type: String
    },

    responsible:{
        type: String
    },

    description:{
        type: String
    },

    status:{
        type: String
    },

    severity: {
        type: String
    }

});

export default mongoose.model('Issue', Issue);