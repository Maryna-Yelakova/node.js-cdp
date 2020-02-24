import express from 'express';
import { userHandler } from './handlers/user-handler';
import { middleware } from "../middlewares/middleware";
import { userSchema } from "../validation/user-schema";

const userRouter = express.Router();

userRuter.get("/users", userHandler.getUsers);
userRuter.get("/users/:id", userHandler.getUserById);
userRuter.post("/users", middleware(userSchema), userHandler.createUser);
userRuter.put("/users/:id", middleware(userSchema), userHandler.editUser);
userRuter.delete("/users/:id", userHandler.deleteUser);

userRuter.get("/users/:id/groups", userHandler.getUserGroups);
userRuter.post("/users/:id/groups", userHandler.addUserGroup);

export default userRouter;
