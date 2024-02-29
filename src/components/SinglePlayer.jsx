import { useParams } from "react-router-dom"

function SinglePlayer() {
  //useParams returns an object so we are destructring that object using the key defined in the <Route> element and creating a local variable in this component with the same name
  const {id} = useParams();
  //id = random number generated in the <NavBar>
  return (
    <>
      <h2>PLAYER PROFILE</h2>
      <h3>Player with id: {id} goes here</h3>
    </>
  )
}

export default SinglePlayer