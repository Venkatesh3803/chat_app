import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import AuthRoute from "./routes/authRoute.js"
import UserRoute from "./routes/userRoute.js"
import ConversationRoute from "./routes/conversationRoute.js"
import MessageRoute from "./routes/messageRoute.js"
import cors from "cors"


const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

const connection = () => {
    mongoose.connect(process.env.MONGO,
        console.log("connected to mongoDb")
    )
}

app.listen(8000, () => {
    connection()
    console.log("listening at 8000")
})


// routes

app.use("/api/auth", AuthRoute)
app.use("/api/user", UserRoute)
app.use("/api/conversation", ConversationRoute)
app.use("/api/message", MessageRoute)