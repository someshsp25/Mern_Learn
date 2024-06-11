require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

app.use(express.json());


app.use("/api/auth",router);

// app.get("/",(req,res) =>{
//     res
//     .status(200)
//     .send('Hello,World !!! This is my first project');
// });

// app.get("/login/",(req,res) =>{
//     res.status(200).send('This is my login page');
// });

// app.get("/register/",(req,res) =>{
//     res.status(200).send('This is my registration page');
// });


const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running in port: ${PORT}`);
    });
});


