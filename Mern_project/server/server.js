const express = require ('express');
const mongoose = require ('mongoose');
const cookieParser = require ('cookie-parser');
const cors = require ('cors');
const authRouter = require('./routes/auth/auth-routes');
const dotenv = require("dotenv");
dotenv.config();

// create a database connection
//create a seperate file for this and then import/use that file here

mongoose .connect ("mongodb+srv://yash2003:yash2001@cluster0.mmpdunx.mongodb.net/"
).then(() => console.log("MongoDB connected"))
.catch((error)=> console.log(error));

const app = express ();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders:["Content-Type", 
             'Authorization',
             'Cach-Control',
             'Expires',
             'Pragma',],

             credentials:true
    })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);

app.listen (PORT, () => console.log(`Server is running on port ${PORT}`));