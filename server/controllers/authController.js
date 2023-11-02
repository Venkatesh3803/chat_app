import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashPass
    const newUser = await userModel(req.body)

    try {
        const existUser = await userModel.findOne({ email: newUser.email })
        if (existUser) return res.status(403).json("Email already exist")
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const login = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) return res.status(403).json("Invalid Credentials")

        const validity = await bcrypt.compare(req.body.password, user.password)
        if (!validity) return res.status(403).json("Invalid Credentials")

        const token = jwt.sign({
            id: user._id, email: user.email
        }, process.env.JWT_KEY, { expiresIn: "24h" })

        const { password, ...others } = user._doc
        res.status(201).json({ others, token })
    } catch (error) {
        res.status(500).json(error.message)
    }
}