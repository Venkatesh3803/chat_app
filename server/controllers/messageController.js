import messageModel from "../models/messageModel.js";


export const createMessage = async (req, res) => {
    const newMessage = await messageModel(req.body)
    try {
        const message = await newMessage.save();
        res.status(201).json(message)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getMessage = async (req, res) => {
    try {
        const messages = await messageModel.find({ conversationId: req.body.conversationId })
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json(error.message)
    }
}