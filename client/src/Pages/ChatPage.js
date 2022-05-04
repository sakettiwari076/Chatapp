import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react';
// import { chats } from '../../../Backend/data/data';
const ChatPage = () => {
  const [chats, setChats] = useState([])

        const fetchChats = async () => {
        const data = await axios.get('/api/chats');
        setChats(data);
    };
    useEffect (() => {
    fetchChats() ;
    } ,[]);

  return (

    <div>
      cha
       
  
  </div>
  );
};

export default ChatPage;