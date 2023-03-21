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
    date="2011 - present"
    iconStyle={{ background: '#0B0B48', color: '#fff' }}
    // icon={"1."}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: '#54547e', color: '#fff' }}
    // icon={"2."}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  
    </VerticalTimeline>
      
    </div>
  )
}

export default Education
