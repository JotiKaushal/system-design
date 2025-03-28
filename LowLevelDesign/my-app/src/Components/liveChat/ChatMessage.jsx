import React from 'react'
const ChatMessage = ({name, message, thumbnil}) => {
  return (
    <div className='flex items-center'>
        <img className='h-8 w-8 m-2 rounded-full' alt="user image" src={thumbnil}/>
        <p className='p-2'>
            <span className='font-bold p-2'>{name}</span>
            <span>{message}</span>
        </p>
    </div>
  )
}

export default ChatMessage