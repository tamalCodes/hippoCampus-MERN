import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();


//Routes here
app.use('/posts', postRoutes);





// Database hardcoded here

app.use(express.json({ limit: "30mb", extended: true })); //Used to parse JSON bodies
app.use(express.urlencoded({ limit: "30mb", extended: true })); //Parse URL-encoded bodies
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://IAmTamal:tamaldas69@cluster0.5ylfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT} 🚀🚀`)))
    .catch((error) => console.log(error.message));


// mongoose.set('useFindAndModify', false);