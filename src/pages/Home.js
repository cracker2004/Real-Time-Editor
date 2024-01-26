import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success('Created a new room')
  }

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room ID and username is required!")
      return;
    }

    // Redirect
    toast.success("Room Joined")
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      }
    });
  }

  const handleEnter = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      joinRoom();
    }
  }

  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <div className='homeLogo'>
          <img src="/logo1.png" alt="code-editor" />
        </div>
        <h4 className='mainLabel'>Paste invitation ROOM ID</h4>
        <div className='inputGroup'>
          <input onChange={(e) => setRoomId(e.target.value)} type="text" className='inputBox' placeholder='ROOM ID' value={roomId} onKeyUp={handleEnter} />
          <input onChange={(e) => setUsername(e.target.value)} type="text" className='inputBox' placeholder='USERNAME' value={username} onKeyUp={handleEnter} />
          <button className='btn joinBtn' onClick={joinRoom}>Join</button>
          <span className='createInfo'>
            If You don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" className='createNewBtn'>new room</a>
          </span>

        </div>
      </div>
      <footer className='homeFooter'>
        <h4>Built with ❤️ by{''} <a href="https://github.com/cracker2004">Cracker 2004</a></h4>
      </footer>
    </div>
  )
}

export default Home