import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const MasterLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 300px;
  align-items: center;
`;

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRef = useRef(null);
  const errRef = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [username, password]);

  const handleSubmit = async () => {
    //first check here if username/email and password are of required formats or not
    try {
      const res = await axios.post(
        "http://localhost:4000/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json", //this tells the sserver tht the body of our request is in JSON
          },
          withCredentials: true, //this ensures tht cookies are also sent in this cross-origin request
          //which is by default false
        }
      );
      console.log(res);
      dispatch(
        addUser({
          username: username,
          accessToken: res?.data?.accessToken,
        })
      );
      navigate("/dashboard");
    } catch (err) {
      if (!err?.response) {
        setError("No response from server");
      } else if (err?.response?.data) {
        setError(err.response.data);
      } else {
        setError("Login failed");
      }
    }

    //errRef.current.focus(); //for accessibility for screen readers
  };

  return (
    <MasterLogin>
      <div errRef={errRef}>{error}</div>
      <h1>Sign In</h1>
      <label>Username</label>
      <input
        ref={userRef}
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label>Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Login</button>
      <Link to="/signup">
        <div>Create an account</div>
      </Link>
    </MasterLogin>
  );
};
