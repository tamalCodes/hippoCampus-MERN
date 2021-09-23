// all the routes related to posts will be here

import express from 'express'
const router = express.Router();


// the url will be : http://localhost:5000/posts 
router.get('/', (req, res) => {
    res.send("THIS WORKS BRO ");
})

export default router;