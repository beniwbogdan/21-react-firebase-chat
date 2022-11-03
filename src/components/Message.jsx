import React from 'react';

function Message(props) {
    return (
        <div className={"message owner"}>
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/14036566/pexels-photo-14036566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>Hey, can u coding faster ? </p>
                <img src="https://images.pexels.com/photos/14036566/pexels-photo-14036566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
            </div>

        </div>
    );
}

export default Message;