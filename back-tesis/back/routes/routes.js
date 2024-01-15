// routes.js
import express from "express";
import { getAllUsers, getUser, loginUser } from "../controllers/UserController.js";

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.post('/login', loginUser); 

export default router
