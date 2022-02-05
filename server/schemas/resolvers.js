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
            return Ticket.find(username).sort({ createdAt: -1 });
        },
        raffleTicket: async (parent, { _id }) => {
            return Ticket.findOne({ _id });
        },
        rafflesWon: async (parent, { username }) => {
            return Ticket.find(username).sort({ createdAt: -1 });
        },
        raffles: async (parent, { _id }) => {
            return Ticket.findOne({ _id });
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addTicket: async (parent, args, context) => {
            if (context.user) {
                const ticket = await Ticket.create({ username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { raffleTickets: ticket._id } },
                    { new: true }
                );

                return ticket;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
    }
}

module.exports = resolvers;



