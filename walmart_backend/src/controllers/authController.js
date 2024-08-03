import jwt from 'jsonwebtoken';
import prisma from '../models/prismaClient.js';
import { generateSalt, hashPassword } from '../utils/cryptoUtils.js';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.redirect('/login');
    }
    const salt = generateSalt();
    const hashedPassword = hashPassword(password, salt);

    const newUser = await prisma.user.create({
      data: {
        name: username,
        email,
        password: hashedPassword,
        salt,
      },
    });

    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 });

    return res.json({ message: 'User signed up successfully', user: newUser, token });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

export const login = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ name: username }, { email: email }],
      },
    });

    if (!existingUser) {
      return res.status(401).json({ message: 'Incorrect username or password' });
    }

    const hashedPassword = hashPassword(password, existingUser.salt);

    if (hashedPassword !== existingUser.password) {
      return res.status(401).json({ message: 'Incorrect username or password' });
    }

    const token = jwt.sign({ userId: existingUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 });

    return res.json({ message: 'Login successful', user: existingUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const logout = (req, res) => {
  res.clearCookie('jwt');
  return res.json({ message: 'Logout successful' });
};
