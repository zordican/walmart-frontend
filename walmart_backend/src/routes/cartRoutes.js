import express from 'express';
import { createCart, joinCart, addProductToCart, getCart, voteProduct } from '../controllers/shareCartController.js';
import { authenticateToken } from '../middleware/authenticateToken.js';

const router = express.Router();

router.post('/create', authenticateToken, createCart);
router.post('/join', authenticateToken, joinCart);
router.post('/addProduct', authenticateToken, addProductToCart);
router.get('/:cartId', authenticateToken, getCart);
router.post('/vote', authenticateToken, voteProduct);

export default router;
