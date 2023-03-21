import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image_Main from './image/c.png'
import Image_Main1 from './image/cpp.jpg'
import Image_Main2 from './image/python.jpg'
// import Image_Main3 from './image/React.jpg'
import Image_Main4 from './image/web_development.png'
import Image_Main5 from './image/Ds_and_algo.jpg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Skill.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

const Skill = () => {
  return (
    <>
      <div id="Skill">
        <div className="SkillMain">
          <h1>SKILL</h1>

        </div>


        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper"
        >


          <div className="SKillImg">

            <SwiperSlide className="SkillImg_1">
              <img src={Image_Main} />
            </SwiperSlide>

            <SwiperSlide className="SkillImg_2">
              <img src={Image_Main1} />
            </SwiperSlide>

            <SwiperSlide className="SkillImg_3">
              <img src={Image_Main2} />
            </SwiperSlide>

            {/* <SwiperSlide className="SKillImg_4">
              <img src={Image_Main3} />
            </SwiperSlide> */}

            <SwiperSlide className="SkillImg_5">
              <img src={Image_Main4} />
            </SwiperSlide>

            <SwiperSlide className="SkillImg_6">
              <img src={Image_Main5} />
            </SwiperSlide>

          </div>
        </Swiper>
      </div>
    </>

  );
}
// import React from 'react'
// import './Skill.css'

// const Skill = () => {
//   return (
//       <section className='about' id='Skill'>
//       <div className='aboutSkill'>
//                 <h3 className='aboutSkillTitle'>Skills</h3>
//                 <ul className='aboutList'>
//                     <li>C</li>
//                     <li>CPP</li>
//                     <li>PYTHON</li>
//                     <li>REACT JS</li>
//                     <li>WEB DEVELOPMENT</li>
//                     <li>DSA AND ALGORITHMS</li>
//                 </ul>
//             </div>

//             </section>

//   )
// }

export default Skill
