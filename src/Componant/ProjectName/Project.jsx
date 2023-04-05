import React, { useState } from 'react'
import './project.css'
import ReactCardFlip from 'react-card-flip';
import ECom from "./image/e-commerce.jpg"
import Lang from "./image/language_translator.png"
import PG from "./image/Pg_life.jpg"
import WordHunt from "./image/word_hunt.jpg"

const Project = () => {
  const [flip1, isFlip1] = useState(false);
  const [flip2, isFlip2] = useState(false);
  const [flip3, isFlip3] = useState(false);
  const [flip4, isFlip4] = useState(false);

  return (
    <div id='Project'>
      <div className='projectRoot'>
        <h1>Project</h1>
      </div>
      <div className='project'>

        <ReactCardFlip isFlipped={flip1} flipDirection="horizontal" flipSpeedFrontToBack={1}>
          <div className='projectDiv'>
            <img src={ECom} alt="E-com" onMouseMove={()=>{
              isFlip1(true)
            }}
            onMouseLeave={()=> {
              isFlip1(false)
            }}
            ></img>
          </div>

          <div className='projectDiv'>
            Hello From Back
            {/* <button onClick={handleButton}>Click to flip</button> */}
          </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={flip2} flipDirection="horizontal" flipSpeedFrontToBack={1}>
          <div className='projectDiv'>
            <img src={Lang} alt="E-com"
            onMouseMove={()=>{
              isFlip2(true)
            }}
            onMouseLeave={()=> {
              isFlip2(false)
            }}
            ></img>
          </div>

          <div className='projectDiv'>
            Hello From Back
            {/* <button onClick={handleButton}>Click to flip</button> */}
          </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={flip3} flipDirection="horizontal" flipSpeedFrontToBack={1}>
          <div className='projectDiv'>
            <img src={PG} alt="E-com"
            onMouseMove={()=>{
              isFlip3(true)
            }}
            onMouseLeave={()=> {
              isFlip3(false)
            }}
            ></img>
          </div>

          <div className='projectDiv'>
            Hello From Back
            {/* <button onClick={handleButton}>Click to flip</button> */}
          </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={flip4} flipDirection="horizontal" flipSpeedFrontToBack={1}>
          <div className='projectDiv'>
            <img src={WordHunt} alt="E-com"
            onMouseMove={()=>{
              isFlip4(true)
            }}
            onMouseLeave={()=> {
              isFlip4(false)
            }}
            ></img>

            
          </div>

          <div className='projectDiv'>
            Hello From Back
            {/* <button onClick={handleButton}>Click to flip</button> */}
          </div>
        </ReactCardFlip>

      </div>
    </div>
  )
}

export default Project
