import React from "react";

import '../../users/css/UsersList.css'
function CardUser({ user }) {
    return (
        <tr className="UserList-header">
            <td className="UserList-td" scope="row">{user._id}</td>
            <td className="UserList-td">{user.username}</td>
            <td className="UserList-td">{user.creationdate}</td>
            <td className="UserList-td">{user.usertype}</td>
            <td className="UserList-td">{user.email}</td>
            <td className="UserList-td UserList-delete"><button>PPP</button></td>
        </tr>
    );
}

export default CardUser;