import express from 'express';
import { userHandler } from './handlers/user-handler';
import { groupHandler } from './handlers/group-handler';
import { middleware } from "../middlewares/middleware";
import { userSchema } from "../validation/user-schema";

const router = express.Router();

router.get("/users", userHandler.getUsers);
router.get("/users/:id", userHandler.getUserById);
router.post("/users", middleware(userSchema), userHandler.createUser);
router.put("/users/update/:id", middleware(userSchema), userHandler.editUser);
router.delete("/users/delete/:id", userHandler.deleteUser);

router.get("/users/groups", userHandler.getUserGroups);
router.post("/users/groups", userHandler.addUserGroup);

router.get("/groups", groupHandler.getGroups);
router.get("/groups/:id", groupHandler.getGroupById);
router.post("/groups", groupHandler.setGroup);
router.put("/groups/update/:id", groupHandler.editGroup); //http://localhost:3000/groups/update/4
router.delete("/groups/delete/:id", groupHandler.deleteGroup);

router.get("/groups/users", groupHandler.getUsers);

export default router;
