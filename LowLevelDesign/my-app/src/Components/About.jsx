import React from 'react'
import { LANG_CONSTANTS } from '../utils/langContants'
const About = ({lang}) => {
  const data = LANG_CONSTANTS[lang];
  return (
    <div><h1 className='font-bold text-2xl'>{data.title}</h1>
   {data.desc}</div>
  )
}

export default About