const mongoose = require('mongoose')

var RoomsSchema = new mongoose.Schema({
  number: Number,
  maxNumberOfGuests: Number
})

module.exports = mongoose.model("Room", RoomsSchema, "Room")
