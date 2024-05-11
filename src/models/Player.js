const { Schema, model } = require("mongoose")

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    wins: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model("Player", PlayerSchema, "players_table")