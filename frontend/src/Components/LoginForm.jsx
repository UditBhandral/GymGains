import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Utilities/api";

function LoginForm() {
  const [mobileNo, setMobileNo] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate('/validate-otp')
  };

  return (
    <>
      <input
        type="tel"
        placeholder="Enter the phone no."
        onChange={(e) => setMobileNo(e.target.value)}
        value={mobileNo}
      />

      <button onClick={handleClick}>
        Login
      </button>
    </>
  );
}

export default LoginForm;