const db = require('./connection');
const { User, Raffle, Ticket } = require('../models');

db.once('open', async () => {
    await Raffle.deleteMany();

    const raffles = await Raffle.insertMany([
        {
            name: 'Gift Certificate',
            description: '$50 gift certificate to Taco Bell.',
            image: '',
            ticketArray: [],
            timer: 15
        }
    ]);

    console.log('Raffle items seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Halpert',
        email: 'pbeasley@gmail.com',
        username: 'vballgirl',
        password: 'password123',
        raffleTickets: [],
        rafflesWon: []
    });

    await User.create({
        firstName: 'Dwight',
        lastName: 'Schrute',
        email: 'shrutefarm@gmail.com',
        username: 'beetfarmer',
        password: 'password123',
        raffleTickets: [],
        rafflesWon: []
    });

    console.log('users seeded');

    process.exit();
});