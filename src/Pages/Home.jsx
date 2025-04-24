import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();
    let [input,setInput] = useState("");
    function handleJoin(){
        navigate(`/room/${input}`);
    }
  return (
    <div id='home'>
    <input type="text" placeholder = 'Enter room Id' onChange={(e)=>setInput(e.target.value)} />
    <button onClick = {handleJoin}>Join now </button>
    </div>
  )
}

export default Home