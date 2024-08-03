import { nanoid } from 'nanoid';
import prisma from '../models/prismaClient.js';

export const createCart = async (req, res) => {
  const { name } = req.body;
  const userId = req.user.id;

  // Check if a cart with the given name and user already exists
  const existingCart = await prisma.cart.findFirst({
    where: {
      name,
      users: {
        some: {
          userId,
        },
      },
    },
  });
  if (existingCart) {
    return res.status(200).json(existingCart);
  }
  const cart = await prisma.cart.create({
    data: {
      name,
      invitationLink: nanoid(),
      users: {
        create: { userId },
      },
    },
  });

  res.status(201).json(cart);
};

export const joinCart = async (req, res) => {
  const { invitationLink } = req.body;
  const userId = req.user.id;

  const cart = await prisma.cart.findUnique({ where: { invitationLink } });
  if (!cart) {
    return res.status(404).send('Cart not found');
  }

  await prisma.userCart.create({
    data: {
      userId,
      cartId: cart.id,
    },
  });

  res.status(200).json(cart);
};

export const addProductToCart = async (req, res) => {
  const { cartId, productId } = req.body;

  const cartProduct = await prisma.cartProduct.create({
    data: {
      cartId,
      productId,
    },
  });

  res.status(201).json(cartProduct);
};

export const getCart = async (req, res) => {
  const { cartId } = req.params;

  const cart = await prisma.cart.findUnique({
    where: { id: cartId },
    include: {
      products: {
        include: { product: true },
      },
      votes: {
        include: { product: true },
      },
    },
  });

  res.status(200).json(cart);
};

export const voteProduct = async (req, res) => {
  const { cartId, productId } = req.body;
  const userId = req.user.id;
  console.log(req.user.name);
  try {
    // Check if the user has already voted for this product in the cart
    const existingVote = await prisma.vote.findFirst({
      where: {
        userId,
        productId,
        cartId,
      },
    });

    if (existingVote) {
      return res.status(400).json({ error: "You have already voted for this product." });
    }

    // Create a new vote
    const vote = await prisma.vote.create({
      data: {
        cartId,
        productId,
        userId,
      },
    });

    // Increment the vote count for the product
    const voter=await prisma.product.update({
      where: { id: productId },
      data: {
        voteCount: {
          increment: 1,
        },
      },
    });

    res.status(201).json(voter);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while voting." });
  }
};
