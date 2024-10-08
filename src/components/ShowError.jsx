import React from 'react'

const ShowError = ({message}) => {
  return (
    <span className='text-sm text-red-500'>{message}</span>
  )
}

export default ShowError