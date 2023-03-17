import React from 'react'

const SingleMessageDisplay = ({deleteMsg, msgBlock, msgKey}) => {
  return (
    <div className='message'>
       <p>{msgBlock}</p>
       <div className='delMsg'
            onClick={() => deleteMsg(msgKey)}>
            <i className='fa fa-times fa-fw'></i>
       </div>
    </div>
  )
}

export default SingleMessageDisplay