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

  // If the cart exists, return it
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

  try{
   const cart = await prisma.cart.findUnique({
    where: { invitationLink },
    include: {
      users: {
        include: {
          user: true
        }
      }
    }
  });
  if (!cart) {
    return res.status(404).send('Cart not found');
  }

  await prisma.userCart.create({
    data: {
      userId,
      cartId: cart.id,
    },
  });
  const ownerName = cart.users[0]?.user?.name || 'Unknown';
  res.json({
    message: 'Joined cart successfully',
    cartId: cart.id,
    ownerName: ownerName
  })
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to join cart' });
  }
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


export const joinedCarts = async (req, res) => {
  try {
    const userId = req.user.id; // Get the user ID from the authenticated user

    const userCarts = await prisma.userCart.findMany({
      where: { userId },
      include: {
        cart: {
          include: {
            users: {
              include: {
                user: true
              }
            }
          }
        }
      }
    });

    const carts = userCarts.map((userCart) => {
      const ownerName = userCart.cart.users.length > 0 && userCart.cart.users[0].user
        ? userCart.cart.users[0].user.name
        : 'Unknown';

      return {
        cartId: userCart.cartId,
        ownerName,
        invitationLink: userCart.cart.invitationLink,
      };
    });

    res.json(carts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch joined carts' });
  }
};


// Fetch products in the shared cart by cartId
export const getSharedCartProducts = async (req, res) => {
  const { cartId } = req.params;

      if (!cartId) {
        return res.status(400).json({ error: "Cart ID is required." });
      }
  
  try {
    const cartProducts = await prisma.cartProduct.findMany({
      where: { cartId },
      include: { product: true },
    });
    res.json(cartProducts.map(cp => cp.product));
  } catch (error) {
    console.error('Error fetching shared cart products:', error);
    res.status(500).json({ error: 'Error fetching shared cart products' });
  }
};


export const allProducts =  async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
    
  } catch (error) {
    console.error('Error fetching products:', error);
    console.log(error);
    res.status(500).json({ error: 'Error fetching products' });
  }
};

// Endpoint: Add a product to a shared cart
export const addProductToSharedCart = async (req, res) => {
  const { productId } = req.body;
  const { cartId } = req.params; // Get cartId from the request parameters

  try {
    // Check if the shared cart exists and the user is part of it
    const sharedCart = await prisma.cart.findFirst({
      where: { id: cartId },
      include: {
        users: {
          where: { userId: req.user.id }, // Assuming user is authenticated and user ID is available
        },
      },
    });

    if (!sharedCart) {
      return res.status(404).json({ error: 'Shared cart not found or you do not have access to it' });
    }

    // Add the product to the shared cart
    await prisma.cartProduct.create({
      data: {
        cartId: sharedCart.id,
        productId,
      },
    });

    res.json({ message: 'Product added to shared cart' });
  } catch (error) {
    console.error('Error adding product to shared cart:', error);
    res.status(500).json({ error: 'Error adding product to shared cart' });
  }
};



// Endpoint 2: Add a product to the user's cart
export const addtomain =  async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id; // Assuming user is authenticated and user ID is available

  try {
    let userCart = await prisma.userCart.findFirst({
      where: { userId },
      include: { cart: true },
    });

    if (!userCart) {
      const newCart = await prisma.cart.create({
        data: { name: `${req.user.name}'s Cart`, users: { create: { userId } } },
      });
      userCart = { cartId: newCart.id };
    }

    await prisma.cartProduct.create({
      data: {
        cartId: userCart.cartId,
        productId,
      },
    });

    res.json({ message: 'Product added to cart' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Error adding product to cart' });
  }
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
    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        voteCount: {
          increment: 1,
        },
      },
    });

    res.status(201).json(updatedProduct);
  } catch (error) {
    console.error("Error voting for product:", error);  // Log the exact error
    res.status(500).json({ error: "An error occurred while voting." });
  }
};


// export const getCart = async (req, res) => {
//   const { cartId } = req.params;

//   if (!cartId) {
//     return res.status(400).json({ error: "Cart ID is required." });
//   }

//   try {
//     const cartProducts = await prisma.cartProduct.findMany({
//       where: { cartId },
//     });

//     if (cartProducts.length === 0) {
//       return res.status(404).json({ error: "No products found in this cart." });
//     }

//     const productIds = cartProducts.map(cp => cp.productId);

//     res.status(200).json(productIds);
//   } catch (error) {
//     console.error("Error fetching products from cart:", error);
//     res.status(500).json({ error: "An error occurred while fetching products from the cart." });
//   }
// };
