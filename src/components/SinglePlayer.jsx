import { useParams } from "react-router-dom"
import { useGetSinglePlayerQuery } from "../API/playersSlice"

function SinglePlayer() {
  //useParams returns an object so we are destructring that object using the key defined in the <Route> element and creating a local variable in this component with the same name
  //id = random number generated in the <NavBar>
const {id} = useParams()
const { data, isLoading } = useGetSinglePlayerQuery(id);
console.log(data?.data?.player)
const player = data?.data.player;


  return (
    <>
      <h2>PLAYER PROFILE</h2>
      {isLoading && <p>Loading data...</p>}
      {!isLoading && <div>
        <p>{player.name}</p>
        <img src={player.imageUrl} width="300"/>
        <p>{player.breed}</p>
      </div>}
    </>
  )
}

export default SinglePlayer