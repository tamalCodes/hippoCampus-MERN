import PostMessage from "../models/postMessage.js";



// this is to get all the posts from the database
// since find() will be taking time we need to make this async
export const getPosts = async (req, res) => {

    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}



// this is to create a new post
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
