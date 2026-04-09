import { Elysia, t } from "elysia";
import { registerUserService } from "../service/user-service";

export const userRoutes = new Elysia({ prefix: "/api/users" })
  .post("/register", async ({ body, set }) => {
    const result = await registerUserService(body);
    
    if (result.success) {
      set.status = 201;
      return {
        status: "success",
        message: "User registered successfully"
      };
    } else {
      set.status = 400;
      return {
        status: "failed",
        message: "Failed Register"
      };
    }
  }, {
    body: t.Object({
      name: t.String(),
      email: t.String(),
      password: t.String()
    })
  });
