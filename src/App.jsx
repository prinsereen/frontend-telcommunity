import './App.css'
import { Routes, Route }from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Helpdesk from './pages/Helpdesk';
import Chat from './pages/Chat';

function App() {

  return (
    <>
        <div>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/helpdesk" element={<Helpdesk/>}/>
            <Route path="/chat" element={<Chat/>}/>
          </Routes>
        </div>
    </>
  )
}

export default App
