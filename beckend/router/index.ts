import express from 'express';
import { userHandler } from './handlers/user-handler';
import { middleware } from "../middlewares/middleware";
import { userSchema } from "../validation/user-schema";

const router = express.Router();

router.get("/users", userHandler.getUsers);
router.get("/users/:id", userHandler.getUserById);
router.post("/users", middleware(userSchema), userHandler.setUser);
router.put("/users/update/:id", middleware(userSchema), userHandler.editUser);
router.delete("/users/delete/:id", userHandler.deleteUser);

export default router;