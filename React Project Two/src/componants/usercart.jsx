import React from 'react'
import gopalPic from '../assets/gopalPic.jpg'
import "./usercart.css"

const usercart = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={gopalPic} alt="Gopal" />
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default usercart
