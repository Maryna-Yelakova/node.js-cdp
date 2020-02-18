import express from 'express';
import { userHandler } from './handlers/user-handler';
import { middleware } from "../middlewares/middleware";
import { userSchema } from "../validation/user-schema";

const router = express.Router();

router.get("/users", userHandler.getUsers);
router.get("/users/:id", userHandler.getUserById);
router.post("/users", middleware(userSchema), userHandler.createUser);
router.put("/users/:id", middleware(userSchema), userHandler.editUser);
router.delete("/users/:id", userHandler.deleteUser);

router.get("/users/:id/groups", userHandler.getUserGroups);
router.post("/users/:id/groups", userHandler.addUserGroup);

export default router;
