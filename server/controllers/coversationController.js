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



export const getConversation = async (req, res) => {
    try {
        const conversation = await conversationModel.findOne({
            members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        });
        res.status(200).json(conversation)
    } catch (err) {
        res.status(500).json(err);
    }
}



export const getUserConversation = async (req, res) => {
    try {
        const conversations = await conversationModel.findById(req.params.id)
        res.status(200).json(conversations)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const usersConversations = async (req, res) => {
    try {
        const conversations = await conversationModel.find({
            members: { $in: [req.params.userid] }
        }).sort({ createdAt: -1 })
        res.status(200).json(conversations)
    } catch (error) {
        res.status(500).json(error.message)
    }
}