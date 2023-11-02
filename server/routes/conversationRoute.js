import express from "express"
import { createConversation, getConversation, getUserConversation, usersConversations } from "../controllers/coversationController.js"
const route = express.Router()

route.post("/", createConversation)
route.get("/:userid", usersConversations)
route.get("/single/:id", getUserConversation)
route.get("/find/:firstUserId/:secondUserId", getConversation)
export default route