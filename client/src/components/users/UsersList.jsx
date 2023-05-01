import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext";
import CardUser from "../shared/cards/CardUser";

import './css/UsersList.css'
function UsersList() {
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { role } = useContext(UserContext);
    const URL = "http://localhost:3001";

    const token = localStorage.getItem("jwtToken");
    axios.defaults.headers.common["x-access-token"] = token;
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            if (role === "Coordinateur") {
                try {
                    const response = await axios.get(
                        URL + "/api/user/all-users"
                    );
                    setUserList(response.data.users);
                    setIsLoading(false);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="UserList">
            <thead>
                <tr className="UserList-header">
                    <th className="UserList-th" scope="col">Id</th>
                    <th className="UserList-th" scope="col">Nom d'Utilisateurs</th>
                    <th className="UserList-th" scope="col">Date de Création</th>
                    <th className="UserList-th" scope="col">Role</th>
                    <th className="UserList-th" scope="col">Email</th>
                    <th className="UserList-th" scope="col">Supprimer</th>
                </tr>
            </thead>
            <tbody>
            {userList && userList.map((user) => (
                <CardUser key={user._id} user={user} />
            ))}
            </tbody>
        </div>
    );
}

export default UsersList;