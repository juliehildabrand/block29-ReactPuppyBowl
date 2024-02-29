import NewPlayerForm from "./NewPlayerForm"

function AllPlayers() {

  const dummyPlayers = [
    {
      "id": 2,
      "name": "Crumpet",
      "breed": "American Staffordshire Terrier",
      "status": "field",
      "imageUrl": "https://img.pixers.pics/pho_wat(s3:700/FO/42/45/01/62/700_FO42450162_b0de7640556ab6a1a60ec6da5825f927.jpg,520,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,300,650,jpg)/wall-murals-american-staffordshire-terrier-puppy-2-months-old.jpg.jpg",
      "createdAt": "2021-06-15T16:21:14.103Z",
      "updatedAt": "2021-06-15T16:21:14.103Z",
      "teamId": 1,
      "cohortId": 1
  },
  {
      "id": 4,
      "name": "Daphne",
      "breed": "German Shepherd",
      "status": "field",
      "imageUrl": "https://spiritdogtraining.com/wp-content/uploads/2021/05/German-shepherd-puppy.jpg",
      "createdAt": "2021-06-15T16:21:14.103Z",
      "updatedAt": "2021-06-15T16:21:14.103Z",
      "teamId": 2,
      "cohortId": 1
  },
  {
      "id": 10,
      "name": "Kenny",
      "breed": "Golden Retriever / Boxer",
      "status": "bench",
      "imageUrl": "https://dogtime.com/wp-content/uploads/sites/12/2019/08/boxador-mixed-dog-breed-pictures-cover.jpg",
      "createdAt": "2021-06-15T16:21:14.103Z",
      "updatedAt": "2021-06-15T16:21:14.103Z",
      "teamId": 2,
      "cohortId": 1
  }
  ]

  return (
    <>
    <NewPlayerForm />
    <h2>ROSTER</h2>
    <div id="player-cards">
    {dummyPlayers.map(player => (
      <div id="dummyData" key={player.id}>
        <p>{player.name}</p>
        <img src={player.imageUrl} width="300"/>
        <p>{player.breed}</p>
        <button>PLAYER PROFILE</button>
        <br/>
        <button>REMOVE FROM ROSTER</button>
        </div>
    ))}
    </div>
    </>
  )
}

export default AllPlayers