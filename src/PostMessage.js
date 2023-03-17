import React from "react";

const PostMessage = ({handleSubmit, textOnChange, textValue}) => {

    return (
        <div className="update-area">
            <form onSubmit={handleSubmit}>
                <textarea
                    className="textarea"
                    type="text"
                    rows="4"
                    placeholder="Type your message here.."
                    onChange={textOnChange}
                    value={textValue}
                >                    
                </textarea>

                {textValue.trim().length > 0 
                ? (<div className="text-right">
                        <button 
                            type="submit" 
                            className="post-btn">
                                Post Message
                        </button>
                    </div>) 
                : null }                
            </form>
        </div>
    )
}

export default PostMessage;