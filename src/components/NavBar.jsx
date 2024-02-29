import { Link } from "react-router-dom"

function NavBar() {

  const id = Math.floor(Math.random() * 5 + 1)

  return (
    <>
      <div id="nav-container">
      <Link to="/">FULL ROSTER</Link>
      </div>
    </>
  )
}

export default NavBar