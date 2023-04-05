import React from 'react'
import "./Education.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Education = () => {
  return (
    <div className='educationRoot'>
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#0B0B48', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #0B0B48' }}
    date="2020 - present"
    iconStyle={{ background: '#0B0B48', color: '#fff' }}
    // icon={"1."}
  >
    <h3 className="vertical-timeline-element-title">B.Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">Government Engineering College, Bilaspur</h4>
    <p>
      Data Structure and Algorithm, Operating System, Computer Network, COA, DBMS
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018-2020"
    iconStyle={{ background: '#54547e', color: '#fff' }}
    // icon={"2."}
  >
    <h3 className="vertical-timeline-element-title">Diploma in Computer Science</h3>
    <h4 className="vertical-timeline-element-subtitle">Government Girls Polytechnic College, Bilaspur</h4>
    <p>
    Data Structure and Algorithm, Operating System, Computer Network, COA, DBMS
    </p>
  </VerticalTimelineElement>
  
    </VerticalTimeline>
      
    </div>
  )
}

export default Education
