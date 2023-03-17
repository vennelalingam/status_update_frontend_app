import React from 'react';


const DisplayMessageList = ({messages, deleteMsg}) => {
 
  return (
    <div className='messageList'>
      { messages.length < 1 
      ? (<p className='alert-info'>No messages to display</p>)
      : (<h3>Displaying Listed Messages</h3>)
      }
      
      {/* Displaying Messages */}
      {messages.map((messages, i) => (<div key={i} className='message'>{messages}
        <div className='delMsg'
            onClick={() => deleteMsg(i)}>
            {/* <i className='fa fa-times fa-fw'>Delete</i> */}
            <button className='delbtn'>Delete</button>
        </div>        
        </div>     
      ))
      }      
    </div>
  )
}

export default DisplayMessageList;