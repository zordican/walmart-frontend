import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '.../models/prismaClient.js';

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

  res.status(201).json({ token });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(400).send('Invalid email or password');
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).send('Invalid email or password');
  }

  const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

  res.status(200).json({ token });
};
