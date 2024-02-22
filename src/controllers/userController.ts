import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  const { nombre, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8); 
  try {
    const user = await prisma.usuario.create({
      data: {
        nombre,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Error al crear usuario: ", error);
    res.status(500).json({ error: "Error al crear el usuario." });
  }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    try {
      const user = await prisma.usuario.findUnique({ where: { email } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Email o contraseña incorrectos' });
      }
  
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
      
      res.json({ token });
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      res.status(500).json({ error: "Error al iniciar sesión." });
    }
  };
