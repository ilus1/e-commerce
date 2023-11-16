import { rest } from "msw";
import { setupServer } from "msw/node";

import { mockProducts } from "./products";

const server = setupServer(
  rest.get('*', (_, res, ctx) => res(ctx.status(200), ctx.json(mockProducts)))
);

export default server;
