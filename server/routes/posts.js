// all the routes related to posts will be here
// and we will be using controllers for the logic

import express from 'express'
import { createPost, getPosts } from '../controllers/posts.js';
const router = express.Router();



// the url will be : http://localhost:5000/posts 
// we are using controllers for the logic 


router.get('/', getPosts);
router.post('/', createPost);

export default router;