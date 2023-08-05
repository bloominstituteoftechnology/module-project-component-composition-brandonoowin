import React, { useState, useEffect } from 'react'
import axios from "axios"
import Card from './Card'
import styled from "styled-components"

const SectionStyle = styled.section`
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(72,9,121,1) 33%, rgba(0,212,255,1) 90%); 
  padding: 20px;
  border: 5px solid purple;
  border-radius: 25px;
  margin: 20px;
`


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

    fetchPhoto();

  
  }, []) 

  if (!apod) return ('fetching photo data...')

  return (
    <SectionStyle>
      <Card title={apod.title} text={apod.explanation} imageURL={apod.url} date={apod.date}/>
    </SectionStyle>
    
  )
}

export default App
