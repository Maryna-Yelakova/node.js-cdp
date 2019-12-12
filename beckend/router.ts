import express from 'express';
import { userHandler } from './database/users/user-handler';

const router = express.Router();

router.get("/users", userHandler.getUsers);
router.get("/users/:id", userHandler.getUserById);
router.post("/users", userHandler.setUser);
router.put("/users/update/:id", userHandler.editUser);
router.delete("/users/delete/:id", userHandler.deleteUser);

export default router;