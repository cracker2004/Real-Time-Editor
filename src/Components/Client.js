import Avatar from "react-avatar"

const Client = ({username}) => {
  return (
    <div className="client">
          <Avatar name={username}  size="45" round="14px" />
        <span className="username">{username}</span>
    </div>
  )
}

export default Client