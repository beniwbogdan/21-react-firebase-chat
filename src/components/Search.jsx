import React from 'react';

function Search(props) {
    return (
        <div className={"search"}>
            <div className="searchForm">
                <input type="text" placeholder={"Find a user"}/>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/9944899/pexels-photo-9944899.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt=""/>
                <div className="userChatInfo">
                    <span>John</span>
                </div>
            </div>


        </div>
    );
}

export default Search;