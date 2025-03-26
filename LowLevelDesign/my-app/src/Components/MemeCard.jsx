import React from 'react'

const MemeCard = ({data}) => {
    const {title,author,url} = data;
  return (
    <div className='p-5 m-5 border border-black rounded-lg w-64'>
        <img className='w-64 h-64' src={url} alt="meme img"/>
        <p>{title}</p>
        <p>{author}</p>
    </div>
  )
}

export default MemeCard