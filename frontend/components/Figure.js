import React from "react"
import styles from 'styled-components'
const ImgStyle = styles.img`
display: block;
margin: 0 auto;
padding: 10px;
border-radius: 25px;
`

export default function Figure({ caption, imageURL }) {
    return (
      <figure>
        <ImgStyle src={imageURL} />
        <figcaption>Awesome picture taken on {caption}</figcaption>
    </figure>
    )
  }