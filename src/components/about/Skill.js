import React from 'react'

const Skill = (props) => {
    const {skillName,skillPercentage}=props;
  return (
    <span className='skill'>{skillName}
      <div className='skillPercentage'>{skillPercentage}</div> 
    </span>
  )
}

export default Skill