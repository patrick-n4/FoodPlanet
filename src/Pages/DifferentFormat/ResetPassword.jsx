import React, { useState, useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Logo from "../../IMAGES/logo.png";
import Background from "../../IMAGES/background.png";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button } from "@mui/material";
function ResetPassword() {
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [values, setValues] = useState({
    email: ""
  });
  const [width, setWidth] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 867 ? setWidth(false) : setWidth(true);
    });
  });
  useEffect(() => {
    document.title = "Reset Your Password on FoodPlanet";
    window.innerWidth >= 867 ? setWidth(false) : setWidth(true);
  }, []);
  const validate = async (data) => {
    const { email, password } = data;
    if (email === "") {
      return "Enter your email";
    }
    if (!email.includes("@gmail.com" || email.startsWith("@"))) {
      return "Enter valid email address";
    }
  };
  const getValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const post = async (e) => {
    e.preventDefault();
    setErr(await validate(values));
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className={`bg-[#cd8f40] w-1/2 h-[100vh] ${
          width ? "hidden" : "flex"
        } flex-col items-center justify-center`}
      >
        <img className="h-[34rem]" alt="background" src={Background} />
        <h1 className="font-bold text-4xl w-[15rem] text-center text-white py-10">
          Get your food prepared
        </h1>
      </div>
      <form
        onSubmit={post}
        className=" w-1/2 gap-10 flex flex-col items-center justify-center"
      >
        <img alt="logo" className="w-[18rem]" src={Logo} />
        <h1 className="text-3xl font-bold text-center">Reset Your Password</h1>
        {err && <Alert severity="error">{err}</Alert>}
        <div
          className={`flex flex-col ${
            !width ? "w-[25rem]" : "w-[150%]"
          } gap-5 mx-3`}
        >
          <input
            className="w-full py-2 rounded-[5px] pl-3 border-2 border-solid outline-none"
            onChange={getValues}
            type="text"
            name="email"
            placeholder="Enter your email"
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              variant="contained"
              style={{ background: "#E08B1F" }}
              className={`w-[100%]`}
              onClick={() => {
                navigate("/code");
              }}
            >
              Reset
            </Button>
          </div>
        </div>
        <div className="flex text-xl gap-1 min-w-full justify-center">
          <span>Don't have an account?</span>
          <Link to="/signup" className="hover:underline text-[blue]">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
