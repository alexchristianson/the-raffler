const { AuthenticationError } = require('apollo-server-express');
const { User, Ticket, Raffle } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
              .select('-__v -password')
              .populate('raffleTickets')
              .populate('rafflesWon');
    
            return userData;
          }
    
          throw new AuthenticationError('Not logged in');
        },
        users: async () => {
          return User.find()
            .select('-__v -password')
            .populate('raffleTickets')
            .populate('rafflesWon');
        },
        user: async (parent, { username }) => {
          return User.findOne({ username })
            .select('-__v -password')
            .populate('raffleTickets')
            .populate('rafflesWon');
        },
        raffleTickets: async (parent, { username }) => {
          const params = username ? { username } : {};
          return Ticket.find(params).sort({ createdAt: -1 });
        },
        raffleTicket: async (parent, { _id }) => {
          return Ticket.findOne({ _id });
        }
      },
}

module.exports = resolvers;



