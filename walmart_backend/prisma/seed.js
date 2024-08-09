// prisma/seed.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const products = [
    { name: 'Product 1', price: 10.0, rating: 4.5, numRatings: 100 },
    { name: 'Product 2', price: 20.0, rating: 3.5, numRatings: 200 },
    { name: 'Product 3', price: 30.0, rating: 4.0, numRatings: 300 },
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
