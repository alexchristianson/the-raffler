const db = require('./connection');
const { faker } = require('@faker-js/faker');
const { User, Raffle, Ticket } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});

    // create user data
    const userData = [];
  
  
    for (let i = 0; i < 10; i += 1) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const username = faker.internet.userName();
        const email = faker.internet.email();
        const password = faker.internet.password();
        const raffleTickets = [];
        const rafflesWon = [];
    
        userData.push({ firstName, lastName, username, email, password, raffleTickets, rafflesWon });
    }
  
    // const userData = User.collection.insertMany(userData);
    

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

    console.log('Raffle items seeded!')

    await Ticket.deleteMany();

    let createdTickets = [];
    for (let i = 0; i < 100; i += 1) {
      const ticketId = faker.number;
  
      const randomUserIndex = Math.floor(Math.random() * userData.length);
      const { username, _id: userId } = userData[randomUserIndex];
  
      const createdTicket = await Ticket.create({ username, ticketId });
  
      const updatedUser = await User.updateOne(
        { _id: userId },
        { $push: { raffleTickets: createdTicket._id } }
      );
  
      createdTickets.push(createdTicket);
    }

    process.exit();
});