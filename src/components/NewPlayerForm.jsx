function NewPlayerForm() {
  return (
    <>
    <div id="form-container">
    <h2>ADD NEW PLAYER</h2>
    <form>
      <label>
        Name:
        <input 
        type="text"
        name="player-name"
        id="player-name"
        placeholder="puppy name"
        />
      </label>
      <label>
        Breed:
        <input 
        type="text"
        name="player-breed"
        id="player-breed"
        placeholder="puppy breed"
        />
      </label><label>
        Image:
        <input 
        type="text"
        name="player-image"
        id="player-image"
        placeholder="https://puppyimageurl"
        />
      </label>
      <button id="submit">ADD PLAYER</button>
    </form>
    </div>
    </>
  )
}

export default NewPlayerForm