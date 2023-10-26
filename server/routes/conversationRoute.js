import express from "express"
import { createConversation, usersConversations } from "../controllers/coversationController.js"
const route = express.Router()

route.post("/", createConversation)
route.get("/:userid", usersConversations)

export default route