import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react';
import chats from '../../../backend/data/data'

const ChatPage = () => {
  const [Chats, setChats] = useState([])

        const fetchChats = async () => {
        const data = await axios.get('/api/chats');
        console.log(data);
    };
    useEffect (() => {
    fetchChats() ;
    } ,[]);

  return (

    <div>
    {chats.map((chat) => (
       <div> {chat.chatName}
       </div>
  ))}
  </div>
  );
};

export default ChatPage;