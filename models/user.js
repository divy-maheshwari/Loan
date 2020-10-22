const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    status: {
        type: String,
    },
    number: {
        type: String,
    },
    street1: {
        type: String,
    },
    street2: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    postal: {
        type: String,
    },
    present: {
        type: String,
    },
    occupation: {
        type: String,
    },
    income: {
        type: String,
    },
    rent: {
        type: String,
    },
    comment: {
        type: String,
    }
})

module.exports = mongoose.model('User',UserSchema);