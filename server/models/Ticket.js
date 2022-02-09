const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  ticketId: {
    type: Number,
  },
  username: {
    type: String,
    required: true
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;