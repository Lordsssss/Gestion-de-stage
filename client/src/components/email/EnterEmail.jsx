import React, { useState } from "react";
import axios from "axios";
import CustomAlert from "../shared/customalert/CustomAlert";

function EnterEmail() {
    const [userEmail, setUserEmail] = useState("");
    const URL = process.env.REACT_APP_BASE_URL;
    const [showAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const handleSubmit = async (e) => {
        try {
            const data = {
                email: userEmail
            }
            await axios.post(URL + "/api/user/endPswEmail", data).catch((error) => {
                console.error(error);
            });
            handleShowAlert(true);
        } catch (err) {
            console.error("send error", err)
        }
    }
    return (
        <div className="EnterEmail">
            <CustomAlert
                show={showAlert}
                onClose={handleCloseAlert}
                title="Message"
                message="L'email à bien été envoyé"
            />
            <form onSubmit={handleSubmit}>
                <label>Entrer votre email:
                    <input
                        type="email"
                        placeholder="Email"
                        className="formbold-form-input"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Changer !</button>
            </form>
        </div>);
}

export default EnterEmail;