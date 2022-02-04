const db = require('./connection');
const faker = require('@faker-js/faker');
const { User, Raffle, Ticket } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});

    // create user data
    const userData = [];
  
    for (let i = 0; i < 10; i += 1) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();
        const raffleTickets = [];
        const rafflesWon = [];
    
        userData.push({ firstName, lastName, username, email, password, raffleTickets, rafflesWon });
    }
  
    const createdUsers = await User.collection.insertMany(userData);

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

    await Ticket.deleteMany();

    let createdTickets = [];
    for (let i = 0; i < 100; i += 1) {
      const ticketId = faker.number;
  
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      const { username, _id: userId } = createdUsers.ops[randomUserIndex];
  
      const createdTicket = await Ticket.create({ ticketId, username });
  
      const updatedUser = await User.updateOne(
        { _id: userId },
        { $push: { raffleTickets: createdTicket._id } }
      );
  
      createdTickets.push(createdTicket);
    }

//     console.log('Raffle items seeded');

//     await User.deleteMany();

//     await User.create({
//         firstName: 'Pamela',
//         lastName: 'Halpert',
//         email: 'pbeasley@gmail.com',
//         username: 'vballgirl',
//         password: 'password123',
//         raffleTickets: [
//             {
//                 tickets: [ticketArray[0]._id, ticketArray[1]._id]
//             }
//         ],
//         rafflesWon: []
//     });

//     await User.create({
//         firstName: 'Dwight',
//         lastName: 'Schrute',
//         email: 'shrutefarm@gmail.com',
//         username: 'beetfarmer',
//         password: 'password123',
//         raffleTickets: [],
//         rafflesWon: []
//     });

//     console.log('Users seeded');

//    await Ticket.deleteMany();

//     let ticketArray = [];
//     for (let i = 0; i < 200; i += 1) {
        
//     }
    process.exit();
});