import { Elysia } from "elysia";
import { userRoutes } from "./routes/user-routes";

const app = new Elysia()
  .use(userRoutes)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
