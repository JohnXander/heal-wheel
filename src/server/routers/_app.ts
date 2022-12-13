import { z } from 'zod';
import { procedure, router } from '../trpc';
import { prisma } from '../utils/prisma';

export const appRouter = router({
  createUser: procedure
    .input(z.object({
      name: z.string(),
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
});

export type AppRouter = typeof appRouter;