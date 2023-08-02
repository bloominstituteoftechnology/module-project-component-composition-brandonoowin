import React from "react"

export default function Figure({ caption, imageURL }) {
    return (
      <figure>
      <img src={imageURL} />
      <figcaption>Awesome picture taken on {caption}</figcaption>
    </figure>
    )
  }