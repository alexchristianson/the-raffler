const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;