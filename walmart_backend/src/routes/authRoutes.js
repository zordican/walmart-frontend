import express from 'express';
import { signup, login, logout } from '../controllers/authController.js';
import { validateInput } from '../middleware/validate.js';

const router = express.Router();

router.post('/signup', validateInput, signup);
router.post('/login', validateInput, login);
router.get('/logout', logout);

export default router;
