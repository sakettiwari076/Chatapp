const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors")
const userRoutes = require("./routes/userRoutes")
const {notFound, errorHandler } = require('./middleware/errorMiddleware')
dotenv.config();
connectDB();
const app = express();

app.get("/", (req , res ) => {
    res.send("API is running success")
});
app.use(express.json()); //To accept json data registration was not happening as it was at the bottom of api/user 

//endpoint to get the complete chats ex:global
app.use("/api/user" , userRoutes)
app.use(notFound);
app.use(errorHandler);


   
const PORT  = process.env.PORT || 5000;
app.listen(5000, console.log(" Saket's Server started on port 5000")  )   ;

