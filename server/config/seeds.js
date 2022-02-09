const db = require('./connection');
const { faker } = require('@faker-js/faker');
const { User, Raffle, Ticket } = require('../models');
const bcrypt = require('bcrypt');


db.once('open', async () => {
    await User.deleteMany({});

    // create user data
    const userData = [];
  
  
    for (let i = 0; i < 10; i += 1) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const username = faker.internet.userName();
        const email = faker.internet.email();
        const password = 'password123';
        const raffleTickets = [];
        const rafflesWon = [];
        
        const saltRounds = 10;
        hashedPassword = await bcrypt.hash(password, saltRounds);

        userData.push({ firstName, lastName, username, email, password: hashedPassword, raffleTickets, rafflesWon });
    }
   
    const createdUser = await User.collection.insertMany(userData);

    console.log('Users seeded!')

    await Raffle.deleteMany();

    const raffles = await Raffle.insertMany([
        {
            name: 'Gift Certificate',
            description: '$50 gift certificate to Taco Bell.',
            image: "../../client/src/assets/img/taco-bell.png",
            ticketArray: [],
            timer: 300000
        },
        {
            name: 'Dodge Caravan',
            description: '2008 Dodge Caravan in fair condition',
            image: "../src/assets/img/caravan.jpg",
            ticketArray: [],
            timer: 400000
        },
        {
            name: 'Golf Balls',
            description: 'A bucket of 100 golf balls.',
            image: "../src/assets/img/balls.jpg",
            ticketArray: [],
            timer: 500000
        },
        {
            name: 'Autographed Sword',
            description: 'Katana signed by Randy Jackson',
            image: "../src/assets/img/katana.jpg",
            ticketArray: [],
            timer: 600000
        },
        {
            name: 'Velvet Painting',
            description: 'A velvet painting of Spock from Star Trek.',
            image: "../src/assets/img/spock.jpg",
            ticketArray: [],
            timer: 700000
        },
        {
            name: 'Gift Certificate',
            description: '$50 gift certificate to Taco Bell.',
            image: "../src/assets/img/taco-bell.png",
            ticketArray: [],
            timer: 800000
        },
        {
            name: 'Vacation Getaway',
            description: 'All expense paid trip for 2 to Oshkosh, WI.',
            image: "../src/assets/img/oshkosh.jpg",
            ticketArray: [],
            timer: 900000
        },

    ]);

    console.log('Raffle items seeded!')

    await Ticket.deleteMany();

    let createdTickets = [];
    for (let i = 0; i < 50; i += 1) {
        const ticketId = faker.datatype.number();

        console.log('user data 2 ' + JSON.stringify(userData[1]));

        const randomUserIndex = Math.floor(Math.random() * userData.length);
        const { username } = userData[randomUserIndex];

        const createdTicket = await Ticket.create({ username, ticketId });

        const updatedUser = await User.updateOne(
            { username: username },
            { $push: { raffleTickets: createdTicket._id } }
        );

        createdTickets.push(createdTicket); 
        
    }
    
    console.log('Tickets seeded!')

    process.exit();
});