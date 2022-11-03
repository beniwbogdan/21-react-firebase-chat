import React from 'react';

function Chats(props) {
    return (
        <div className={"chats"}>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/9944899/pexels-photo-9944899.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt=""/>
                <div className="userChatInfo">
                    <span>John</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/6827381/pexels-photo-6827381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <div className="userChatInfo">
                    <span>Cartman</span>
                    <p>Hi</p>
                </div>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/14169804/pexels-photo-14169804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <div className="userChatInfo">
                    <span>Lucee</span>
                    <p>Whaaat?</p>
                </div>
            </div>
        </div>
    );
}

export default Chats;