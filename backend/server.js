const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
dotenv.config();
connectDB();
const app = express();

app.get("/", (req , res ) => {
    res.send("API is running success")
});
//endpoint to get the complete chats ex:global
app.use("/api/user" , userRoutes)
app.use(express.json()); //To accept json data

   
const PORT  = process.env.PORT || 5000;
app.listen(5000, console.log("Server started on port 5000")  )   ;

