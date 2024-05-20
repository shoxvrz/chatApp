import './Chat.css'
import CardMessage from "../../components/CardMessage/CardMessage"
import {useSearchParams} from 'react-router-dom'
import { io } from "socket.io-client";
import { useState } from 'react';


const Chat = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [socket, setSocket] = useState(io('http://localhost:3000'))

  console.log(searchParams.get('userName'));
  console.log(searchParams.get('room'));


  return (
    <div className='container'>
      <div className="chat">
        <nav>
          <h1>Friends</h1>
          <p>0 users in this room</p>
          <button className='leave'>Leave Room</button>
        </nav>
        <main>
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />

          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />

          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
          <CardMessage owner={false} />
          <CardMessage owner={true} />
        </main>
        <footer>

          <input type="text" placeholder='What do you want to say...' />


          <button className='send'>Send</button>

        </footer>
      </div>

    </div>
  )
}

export default Chat