require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);


const item = require('../models/items');



const seed = async () => {
  await item.create({
    name: "Audio-Technica headphones",
    description: "-- Audio-Technica headphones...Better than beats by that Dre guy.",
    category: "electronics",
    price: 200,
    inventory: 200,
    image: 'https://i.imgur.com/nhmzJiu.jpg',
  });
  await item.create({
    name: "XBOX Controller",
    description: "-- Needed in every home",
    category: "games",
    price: 75,
    inventory: 100,
    image: 'https://i.imgur.com/tYRpBsz.jpg',
  });
  await item.create({
    name: "Beanie",
    description: "-- one-size fits all and keeps your noggin warm and snug.",
    category: "apperal",
    price: 15,
    inventory: 100,
    image: 'https://i.imgur.com/CJ9mKJT.jpg'
  });
  await item.create({
    name: "Record Player",
    description: "-- Simple. Nice. Oldschool.",
    category: "electronics",
    price: 175,
    inventory: 100,
    image: 'https://i.imgur.com/ffflRGY.jpg',
  });
  await item.create({
    name: "Little Nightmares II",
    description: "-- A Spooky Platformer Dripping With Tension And Dread",
    category: "games",
    price: 60,
    inventory: 50,
    image: 'https://i.imgur.com/py7FKPP.jpg',
  });
  await item.create({
    name: "Hunting knife",
    description: "-- Small but deadly",
    category: "weapons",
    price: 6000,
    inventory: 3,
    image: 'https://i.imgur.com/Fr0M72O.jpg',
  });
  await item.create({
    name: "Bow & Arrow",
    description: "--You are Katnis",
    category: "weapons",
    price: 200,
    inventory: 5,
    image: 'https://i.imgur.com/81Hv5UF.jpg',
  });
  await item.create({
    name: "Hat",
    description: "--You wear it...You like it",
    category: "apperal",
    price: 30,
    inventory: 2,
    image: 'https://i.imgur.com/CrJuJbD.jpg',
  });

  console.log('Seeded database!');

  mongoose.disconnect();
};
seed();
