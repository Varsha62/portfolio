import React from 'react'
import './Hero.css'
import HeroLogo from '../Hero/Hero.png'



const Hero = () => {
  return (
    
    <section className='hero' id='Hero'>
        <div className='heroRoot'>
         
         <div className='heroRootDiv'>
            <div className='heroContant'>
            <h1>Hello,I am <br/> <span
            style={{
              color:'#6A68D7'
            }}
            >Varsha</span></h1>
            </div>
            <div className='heroContantSub'>
            <p>Final year computer science student</p>
            </div>
            <div className='heroButton'>
                <button className='heroButton1'>Download CV</button>
            </div>
         </div>

        <div>
            <img src={HeroLogo} alt="logo" className='HeroImg'></img>
        </div>
        </div>
    </section>
    
  )
}

export default Hero



