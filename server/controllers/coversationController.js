import conversationModel from "../models/conversationModel.js"

export const createConversation = async (req, res) => {
    const newConversation = await conversationModel({
        members: [req.body.senderId, req.body.recevierId]
    });

    try {
        const conversation = await newConversation.save()
        res.status(201).json(conversation)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const getConversation = () => {
    try {

    } catch (error) {

    }
}


export const usersConversations = async (req, res) => {
    try {
        const conversations = await conversationModel.find({
            members: { $in: [req.params.userid] }
        })
        res.status(200).json(conversations)
    } catch (error) {
        res.status(500).json(error.message)
    }
}