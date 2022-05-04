import './App.css';
import { Button,  } from '@chakra-ui/react'
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
   <Route path="/" component={Homepage} exact/>
   <Route path="/chats"component={ChatPage}/>
    </div>
  );
}

export default App;
