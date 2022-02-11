const db = require("./connection");
const { faker } = require('@faker-js/faker');
const { User, Raffle, Ticket } = require("../models");
const bcrypt = require("bcrypt");

db.once("open", async () => {
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 10; i += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const password = "password123";
    const raffleTickets = [];
    const rafflesWon = [];

    const saltRounds = 10;
    hashedPassword = await bcrypt.hash(password, saltRounds);

    userData.push({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      raffleTickets,
      rafflesWon,
    });
  }

  const createdUser = await User.collection.insertMany(userData);

  console.log("Users seeded!");

  await Raffle.deleteMany();

  const raffles = [
    {
      name: "Cat",
      description: "A 3-year old cat with a bit of a temper.",
      image: "/assets/images/angrycat.jpg",
      ticketArray: [],
    },
    {
      name: "Spork",
      description: "A single spork, perfect for eating any meal.",
      image: "/assets/images/spork.jpg",
      ticketArray: [],
    },
    {
      name: "Autographed Sword",
      description: "A katana signed by American Idol's Randy Jackson.",
      image: "/assets/images/katana.jpg",
      ticketArray: [],
    },
    {
      name: "Bully Maguire Ornament",
      description: "A Bully Maguire Christmas ornament.",
      image: "/assets/images/bullymaguire.jpg",
      ticketArray: [],
    },
    {
      name: "Swan Yacht",
      description: "A yacht that looks like a swan.",
      image: "/assets/images/yacht.jpg",
      ticketArray: [],
    },
    {
      name: "Gift Certificate",
      description: "$50 gift certificate to Taco Bell.",
      image: "/assets/images/taco-bell.png",
      ticketArray: [],
    },
    {
      name: "Dodge Caravan",
      description: "2008 Dodge Caravan in fair condition",
      image: "/assets/images/caravan.jpg",
      ticketArray: [],
    },
    {
      name: "Golf Balls",
      description: "A bucket of 100 golf balls.",
      image: "/assets/images/balls.jpg",
      ticketArray: [],
    },
    {
      name: "Autographed Sword",
      description: "Katana signed by Randy Jackson",
      image: "/assets/images/katana.jpg",
      ticketArray: [],
    },
    {
      name: "Velvet Painting",
      description: "A velvet painting of Spock from Star Trek.",
      image: "/assets/images/spock.jpg",
      ticketArray: [],
    },
    {
      name: "Gift Certificate",
      description: "$50 gift certificate to Taco Bell.",
      image: "/assets/images/taco-bell.png",
      ticketArray: [],
    },
    {
      name: "Vacation Getaway",
      description: "All expense paid trip for 2 to Oshkosh, WI.",
      image: "/assets/images/oshkosh.jpg",
      ticketArray: [],
    },
  ];
  await Raffle.insertMany(raffles);

  console.log("Raffle items seeded!");

  await Ticket.deleteMany();

  let createdTickets = [];
  for (let i = 0; i < 50; i += 1) {

    const randomUserIndex = Math.floor(Math.random() * userData.length);
    const { username } = userData[randomUserIndex];
    const randomRaffleIndex = Math.floor(Math.random() * raffles.length);
    const { name } = raffles[randomRaffleIndex];

    const createdTicket = await Ticket.create({ username });

    const updatedUser = await User.updateOne(
      { username: username },
      { $push: { raffleTickets: createdTicket._id } }
    );

    const updatedRaffleItem = await Raffle.updateOne(
      { name: name },
      {
        $push: { ticketArray: createdTicket._id },
      }
    );

    createdTickets.push(createdTicket);
  }

  console.log("Tickets seeded!");

  process.exit();
});
