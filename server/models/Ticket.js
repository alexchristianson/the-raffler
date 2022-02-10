const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  username: {
    type: String,
    required: true
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;