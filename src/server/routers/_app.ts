import { z } from 'zod';
import { procedure, router } from '../trpc';
import { prisma } from '../utils/prisma';

export const appRouter = router({
  createUser: procedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {
      const createdUser = await prisma.user.create({
        data: { ...input }
      });
      return { createdUser }
    }),
});

export type AppRouter = typeof appRouter;