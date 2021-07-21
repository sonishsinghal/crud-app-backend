import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// require('dotenv').config()

import Routes from './server/route.js';

const app = express();


app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Step 2 ------------------->
app.use('/users', Routes);



const URL = 'mongodb+srv://sonish:sonish@cluster0.1p2jq.mongodb.net/test'

const PORT = process.env.PORT || '8080'; //2 - get the port from env file, if not available pick 8080


mongoose
.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false ,useCreateIndex: true})
.then(() => console.log("connected to Database"))
.catch((error) => {
    console.log('Error:', error.message)
})
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
// We can do something like this or we can set it directly in the url as well
// mongoose.set('useFindAndModify', false);
