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
            name: 'Cat',
            description: 'A 3-year old cat with a bit of a temper.',
            image: "/assets/images/angrycat.jpg",
            ticketArray: [],
            timer: 350000
        },
        {
            name: 'Spork',
            description: 'A single spork, perfect for eating any meal.',
            image: "/assets/images/spork.jpg",
            ticketArray: [],
            timer: 340000
        },
        {
            name: 'Autographed Sword',
            description: "A katana signed by American Idol's Randy Jackson.",
            image: "/assets/images/katana.jpg",
            ticketArray: [],
            timer: 330000
        },
        {
            name: 'Bully Maguire Ornament',
            description: 'A Bully Maguire Christmas ornament.',
            image: "/assets/images/bullymaguire.jpg",
            ticketArray: [],
            timer: 320000
        },
        {
            name: 'Swan Yacht',
            description: 'A yacht that looks like a swan.',
            image: "/assets/images/yacht.jpg",
            ticketArray: [],
            timer: 310000
        },
        {
            name: 'Gift Certificate',
            description: '$50 gift certificate to Taco Bell.',
            image: "/assets/images/taco-bell.png",
            ticketArray: [],
            timer: 300000
        },
        {
            name: 'Dodge Caravan',
            description: '2008 Dodge Caravan in fair condition',
            image: "/assets/images/caravan.jpg",
            ticketArray: [],
            timer: 400000
        },
        {
            name: 'Golf Balls',
            description: 'A bucket of 100 golf balls.',
            image: "/assets/images/balls.jpg",
            ticketArray: [],
            timer: 500000
        },
        {
            name: 'Autographed Sword',
            description: 'Katana signed by Randy Jackson',
            image: "/assets/images/katana.jpg",
            ticketArray: [],
            timer: 600000
        },
        {
            name: 'Velvet Painting',
            description: 'A velvet painting of Spock from Star Trek.',
            image: "/assets/images/spock.jpg",
            ticketArray: [],
            timer: 700000
        },
        {
            name: 'Gift Certificate',
            description: '$50 gift certificate to Taco Bell.',
            image: "/assets/images/taco-bell.png",
            ticketArray: [],
            timer: 800000
        },
        {
            name: 'Vacation Getaway',
            description: 'All expense paid trip for 2 to Oshkosh, WI.',
            image: "/assets/images/oshkosh.jpg",
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