import userModel from "../models/userModel.js"


export const updateUser = async (req, res) => {
    try {
        const currUser = await userModel.findById(req.params.id);
        if (!currUser) return res.status(403).json('You are not suppose to do that');

        await userModel.findByIdAndUpdate(currUser._id, req.body)
        res.status(200).json("updated sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getUser = async (req, res) => {
    try {
        const currUser = await userModel.findById(req.params.id);
        if (!currUser) return res.status(403).json('You are not suppose to do that');
        const {password, ...others} = currUser._doc;
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const getAllUser = async (req, res) => {
    const search = req.query.search
    try {
        let users
        if (search) {
            users = await userModel.find({ userName: { $regex: search, $options: 'i' } })
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error.message)
    }
}