import express from "express"
import { getAllUser, getUser, updateUser } from "../controllers/userController.js"
const route = express.Router()

route.patch("/:id", updateUser)
route.get("/single/:id", getUser)
route.get("/", getAllUser)

export default route