import React from 'react'
import './Education.css'

const Education = (props,ref) => {
    
  return (
    <section id='education' ref={ref}>
    </section>
  )
}
const forwardEducation= React.forwardRef(Education)
export default forwardEducation;