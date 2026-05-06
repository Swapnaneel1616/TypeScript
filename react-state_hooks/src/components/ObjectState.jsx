import React , {useState} from 'react'

const ObjectState = () => {
    const [movie, setMovie] = useState({
        title: "Inception",
        ratings: 9.5
    })

    const handleRating = () =>{
        // const copyMovie = {...movie , ratings: 8.5}
        setMovie({...movie, ratings: 8.5})
    }

  return (
    <section>
        <h1>Title:{movie.title}</h1>
        <p>Ratings: {movie.ratings}</p>
        <button onClick={handleRating}>Change Rating</button>
    </section>
  )
}

export default ObjectState
