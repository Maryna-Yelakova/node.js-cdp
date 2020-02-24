import express from 'express';
import { userHandler } from './handlers/user-handler';
import { middleware } from "../middlewares/middleware";
import { userSchema } from "../validation/user-schema";

const userRouter = express.Router();

userRouter.get("/users", userHandler.getUsers);
userRouter.get("/users/:id", userHandler.getUserById);
userRouter.post("/users", middleware(userSchema), userHandler.createUser);
userRouter.put("/users/:id", middleware(userSchema), userHandler.editUser);
userRouter.delete("/users/:id", userHandler.deleteUser);

userRouter.get("/users/:id/groups", userHandler.getUserGroups);
userRouter.post("/users/:id/groups", userHandler.addUserGroup);

export default userRouter;
