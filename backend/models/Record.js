const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    hobby: {
        type: String,
        required: false
    },
    importantDatesAndNotes: [
        {
            importantDate: {
                type: Date,
                required: false,
            },
            note: {
                type: String,
                required: false,
            },
            isOnlyMonth: {
                type: Boolean,
                required: true, 
                default: false,
            },
        },
    ],
    familySituation: {
        type: String,
        required: false
    },
    birthday: {
        type: String,
        required: false
    },
    reasonOfKnowing: {
        type: String,
        required: false
    },
    position: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    additionalNote: {
        type: String,
        required: false
    },
    draftStatus: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Record', recordSchema)