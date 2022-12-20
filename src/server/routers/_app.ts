import { Query } from '@tanstack/react-query';
import { z } from 'zod';
import { procedure, router } from '../trpc';
import { prisma } from '../utils/prisma';

export const appRouter = router({
  createUser: procedure
    .input(z.object({
      name: z.string(),
      password: z.string(),
      mind: z.number(), 
      body: z.number(), 
      social: z.number(), 
      work: z.number()
    }))
    .mutation(async ({ input }) => {
      const createdUser = await prisma.user.create({
        data: { ...input }
      });
      return { createdUser }
    }),
  
  getUser: procedure
    .input( z.string() )
    .query(async ({ input }) => {
      const foundUser = await prisma.user.findUnique({
        where: { name: input }
      });
      return { foundUser }
    }),
  
  updateUser: procedure
    .input(z.object({
      id: z.string(),
      name: z.string(),
      mind: z.number(), 
      body: z.number(), 
      social: z.number(), 
      work: z.number()
    }))
    .mutation(async ({ input }) => {
      const { id } = input;
      const updatedUser = await prisma.user.update({
        where: { id }, data: { ...input }
      });
      return { updatedUser }
    }),
  
  getAdvice: procedure
    .query(async () => {
      const foundAdvice = await prisma.advice.findMany();
      return { foundAdvice };
    })
});

export type AppRouter = typeof appRouter;