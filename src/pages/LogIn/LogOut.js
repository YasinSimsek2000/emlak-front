/* eslint-disable */

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function LogOut () {
  const navigate = useNavigate();
  const { accessToken, setAccessToken, setRefreshToken } = useContext(AuthContext);

  const handleLogOut = async () => {
    try {
      const response = await fetch('http://localhost:8086/api/v1/auth/logout');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      await response.json();
      setAccessToken("");
      setRefreshToken("");
      navigate("/log-in");
    } catch (error) {
      alert("Network response was not ok");
    }
  };

  return (
    <>
      <div>
          {accessToken}
      </div>
    </>
  );
}

export default LogOut;
