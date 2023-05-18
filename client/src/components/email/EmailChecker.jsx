import { useEffect, useState, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function EmailChecker() {
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();
  const URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = URL + `/api/user/${param.id}/verify/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [URL, param]);

  return (
    <Fragment>
      {validUrl ? (
        <div>
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
  );
}

export default EmailChecker;
