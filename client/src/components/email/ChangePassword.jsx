import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './css/ChangePassword.css'
import axios from "axios";

function ChangePassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const { id, token } = useParams();
    const URL = process.env.REACT_APP_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password != confirmPassword) {
            setError("Les mots de passe sont différent");
            return;
        }
        setError("")
        const data = {
            userId: id,
            validationToken: token,
            newPassword: password,
        }
        await axios.post(URL + "/api/user/changepassword", data).catch((error) => {
            console.error(error);
        });

    }
    return (
        <div class="mainDiv">
            <div class="cardStyle">
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>

                    <img src="" id="signupLogo" />

                    <h2 class="formTitle">
                        Changer le mot de passe
                    </h2>

                    <div class="inputDiv">
                        <label className="inputLabel" for="password">Nouveau mot de passe</label>
                        <input
                            className="input-change"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <div class="inputDiv">
                        <label class="inputLabel" for="confirmPassword">Confirmer le mot de passe</label>
                        <input
                            className="input-change"
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <div class="buttonWrapper">
                        <button type="submit" id="submitButton" onclick="validateSignupForm()" class="submitButton pure-button pure-button-primary">
                            <span>Continue</span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default ChangePassword;