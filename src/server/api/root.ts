import { postRouter } from "~/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { ppbl2024TokenMintTxRouter } from "./routers/ppbl2024TokenMintTx";
import { faucetRouter } from "./routers/faucet";
import { referenceTokensRouter } from "./routers/referenceTokens";
import { listTokensRouter } from "./routers/listTokens";


/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  ppbl2024TokenMintTx: ppbl2024TokenMintTxRouter,
  faucet: faucetRouter,
  referenceTokens: referenceTokensRouter,
  listTokens: listTokensRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
