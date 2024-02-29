import { useGetPlayersQuery, useCreatePlayerMutation } from "../API/playersSlice"
import { useState } from "react"

function NewPlayerForm() {

  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const [createPlayer, result] = useCreatePlayerMutation();

  const {refetch} = useGetPlayersQuery();

  async function handleSubmit(e) {
    e.preventDefault();
    await createPlayer({name, breed, imageUrl});
    refetch();
  }

  return (
    <>
    <div id="form-container">
    <h2>ADD NEW PLAYER</h2>
    <form onSubmit = {handleSubmit}>
      <label>
        Name:
        <input 
        type="text"
        name="player-name"
        id="player-name"
        placeholder="puppy name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Breed:
        <input 
        type="text"
        name="player-breed"
        id="player-breed"
        placeholder="puppy breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        />
      </label><label>
        Image:
        <input 
        type="text"
        name="player-image"
        id="player-image"
        placeholder="https://puppyimageurl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <button type="submit" id="submit">ADD PLAYER</button>
    </form>
    </div>
    </>
  )
}

export default NewPlayerForm