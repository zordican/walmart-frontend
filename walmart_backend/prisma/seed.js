// prisma/seed.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const products = [
    { name: 'Product 1', price: 10.0, rating: 4.5, numRatings: 100 },
    { name: 'Product 2', price: 20.0, rating: 3.5, numRatings: 200 },
    { name: 'Product 3', price: 30.0, rating: 4.0, numRatings: 300 },
    { name: 'Product 4', price: 15.0, rating: 4.8, numRatings: 150 },
    { name: 'Product 5', price: 25.0, rating: 4.2, numRatings: 250 },
    { name: 'Product 6', price: 35.0, rating: 3.9, numRatings: 350 },
    { name: 'Product 7', price: 40.0, rating: 4.7, numRatings: 400 },
    { name: 'Product 8', price: 50.0, rating: 4.1, numRatings: 450 },
    { name: 'Product 9', price: 60.0, rating: 4.4, numRatings: 500 },
    { name: 'Product 10', price: 70.0, rating: 4.3, numRatings: 600 },
    { name: 'Product 11', price: 80.0, rating: 3.8, numRatings: 700 },
    { name: 'Product 12', price: 90.0, rating: 4.6, numRatings: 800 },
    { name: 'Product 13', price: 100.0, rating: 4.0, numRatings: 900 },
    { name: 'Product 14', price: 110.0, rating: 4.5, numRatings: 1000 },
    { name: 'Product 15', price: 120.0, rating: 4.9, numRatings: 1100 },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log('Products have been seeded');
};

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
