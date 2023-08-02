import React, { useState, useEffect } from 'react'
import axios from "axios"
import Card from './Card'


const api_key = 'DEMO_KEY';
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto () {
      axios.get(URL)
      .then(res => {
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }

    // fetchPhoto();
    setApod(
      {
        "date": "2023-08-02",
        "explanation": "Why is the Cigar Galaxy billowing red smoke?  M82, as this starburst galaxy is also known, was stirred up by a recent pass near large spiral galaxy M81.  This doesn't fully explain the source of the red-glowing outwardly expanding gas and dust, however.  Evidence indicates that this gas and dust is being driven out by the combined emerging particle winds of many stars, together creating a galactic superwind.  The dust particles are thought to originate in M82's interstellar medium and are actual...",
        "hdurl": "https://apod.nasa.gov/apod/image/2308/M82_HubblePathak_8150.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "M82: Galaxy with a Supergalactic Wind",
        "url": "https://apod.nasa.gov/apod/image/2308/M82_HubblePathak_1080.jpg"
      })
  
  }, []) 

  if (!apod) return ('fetching photo data...')

  return (
    <section>
      <Card title={apod.title} text={apod.explanation} imageURL={apod.url} date={apod.date}/>
    </section>
    
  )
}

export default App
