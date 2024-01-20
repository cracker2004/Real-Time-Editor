import { useState } from 'react'
import Client from '../Components/Client'
import Editor from '../Components/Editor'

const EditorPage = () => {
  const [clients, setClients] = useState([{ socketId: 1, username: "Rohit Bansal" }, { socketId: 2, username: "Rahul Bansal" }, { socketId: 3, username: "Payal Bansal" }, { socketId: 1, username: "Rohit Bansal" }, { socketId: 2, username: "Rahul Bansal" }, { socketId: 3, username: "Payal Bansal" }, { socketId: 1, username: "Rohit Bansal" }, { socketId: 2, username: "Rahul Bansal" }, { socketId: 3, username: "Payal Bansal" }, { socketId: 1, username: "Rohit Bansal" }, { socketId: 2, username: "Rahul Bansal" }, { socketId: 3, username: "Payal Bansal" }, { socketId: 1, username: "Rohit Bansal" }, { socketId: 2, username: "Rahul Bansal" }, { socketId: 3, username: "Payal Bansal" }]);
  return (
    <div className='mainWrap'>
      <div className='aside'>
        <div className='asideInner'>
          <div className='logo'>
            <img className='logoImage' src="/code-editor.png" alt="logo" />
          </div>
          <h3 className='connected'>Connected</h3>
          <div className='clientList'>
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <div className='editorBtns'>
          <button className='btn copyBtn'>Copy ROOM ID</button>
          <button className='btn leaveBtn'>Leave</button>
        </div>
      </div>
      <div className='editorWrap'>
        <Editor />
      </div>
    </div>
  )
}

export default EditorPage