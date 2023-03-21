import React, { useState } from 'react'
import './project.css'
import ReactCardFlip from 'react-card-flip';


const Project = () => {
  const [flip, isFlip] = useState(false);
  const handleButton = () => {
    isFlip(!flip)
  }

  return (
    <div id='Project'>
    <div className='projectRoot'>
        <h1>Project</h1>
    </div>
    <div className='project'>
   
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal" flipSpeedFrontToBack={1}>
        <div className='projectDiv'>
          Hello From Front
          <button onClick={handleButton}>Click to flip</button>
        </div>

        <div className='projectDiv'>
          Hello From Back
          <button onClick={handleButton}>Click to flip</button>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={flip} flipDirection="horizontal" flipSpeedFrontToBack={1}>
        <div className='projectDiv'>
          Hello From Front
          <button onClick={handleButton}>Click to flip</button>
        </div>

        <div className='projectDiv'>
          Hello From Back
          <button onClick={handleButton}>Click to flip</button>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={flip} flipDirection="horizontal" flipSpeedFrontToBack={1}>
        <div className='projectDiv'>
          Hello From Front
          <button onClick={handleButton}>Click to flip</button>
        </div>

        <div className='projectDiv'>
          Hello From Back
          <button onClick={handleButton}>Click to flip</button>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={flip} flipDirection="horizontal" flipSpeedFrontToBack={1}>
        <div className='projectDiv'>
          Hello From Front
          <button onClick={handleButton}>Click to flip</button>
        </div>

        <div className='projectDiv'>
          Hello From Back
          <button onClick={handleButton}>Click to flip</button>
        </div>
      </ReactCardFlip>

      </div>
    </div>
  )
}

export default Project
{/* <section className='projectRoot' id='Project'>
      <h1 className='projectTitle'>PROJECT</h1>
      <div className='projectMain'>
        <div className='projectPg'>PGLIFE</div>
        <div className='projectPo'>PORTFOLIO</div>
        <div className='projectTd'>WORD HUNT</div>
      </div>
    </section> */}