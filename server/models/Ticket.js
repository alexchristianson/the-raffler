const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;