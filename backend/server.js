const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");

const app = express();

app.get("/", (req , res ) => {
    res.send("API is running success")
});
//endpoint to get the complete chats ex:global
app.get("/api/chat" , (req , res ) => {
res.send(chats);
});
//endpoint to get particular chats
app.get("/api/chat/:id" , (req , res ) => {
const singleChat = chats.find((c) => c._id === req.params.id);            
res.send(singleChat);


});
   
const PORT  = process.env.PORT || 5000;
app.listen(5000, console.log("Server started on port 5000")  )   ;

