import React from "react";

function CardStudent({student}){
    return(
        <tr className="UserList-header">
            <td className="UserList-td">{student._id}</td>
            <td className="UserList-td">{student.DAnumber}</td>
            <td className="UserList-td">{student.studentName}</td>
            <td className="UserList-td">{student.email}</td>
            <td className="UserList-td">{student.decType}</td>
        </tr>
    );
}

export default CardStudent;