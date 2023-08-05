import React from 'react'
import Figure from './Figure'
import styles from "styled-components"
const CardStyles = styles.div`
  color: white; 
  text-align: center;
  
`

export default function Card({ title, text, imageURL, date}) {
    return (
      <CardStyles className='card'>
            <h2>{title}</h2>
            <p>{text}</p>
            <Figure caption={date} imageURL={imageURL}/>
        </CardStyles>
    )
  }