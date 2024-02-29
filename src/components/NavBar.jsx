import { Link } from "react-router-dom"

function NavBar() {

  const id = Math.floor(Math.random() * 5 + 1)

  return (
    <>
      <div id="nav-container">
      <Link to="/">FULL ROSTER</Link>
      <br/>
      <Link to="/player/:id">PLAYER PROFILE</Link>
      {/* <br/>
      <Link to={`/dummyPlayers/${id}`}>Featured Pup</Link> */}
      </div>
    </>
  )
}

export default NavBar