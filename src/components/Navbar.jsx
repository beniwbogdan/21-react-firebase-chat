import React from 'react';

function Navbar(props) {
    return (
        <div className={"navbar"}>
            <span className="logo">reactChat</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/9944899/pexels-photo-9944899.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt=""/>
                <span>John</span>
                <button>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;