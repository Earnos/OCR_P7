// import { useState } from 'react'

export function CarousselDisplay(pictures) {
  // const [currentIndex, SetIndex] = useState(0)

  return <img src={pictures} alt="logement caroussel" />
}

export function NextArrow() {
  return (
    <button
      onClick={(pictures) => {
        pictures = +1
      }}
    >
      Next
    </button>
  )
}

export function PreviousArrow() {
  return (
    <button
      onClick={(pictures) => {
        pictures = +1
      }}
    >
      Previous
    </button>
  )
}
