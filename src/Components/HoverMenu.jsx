import React from "react";

function HoverMenu(props) {

    const users=["XYZ","PQR","TV","Children"];

    return <div className="hoverDiv" style={props.style} >
        <ul>
        {users.map((user)=>{
            return <li>{props.avatar}{user}</li>
        })
        }
        </ul>
    </div>
}
export default HoverMenu;
