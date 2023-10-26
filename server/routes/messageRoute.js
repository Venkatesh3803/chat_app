import express from "express"
import { createMessage, getMessage } from "../controllers/messageController.js";
const route = express.Router();

route.post("/", createMessage)
route.get("/", getMessage)

export default route