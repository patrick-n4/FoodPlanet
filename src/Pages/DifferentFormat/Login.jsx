import React, { useState, useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Logo from "../../IMAGES/logo.png";
import Background from "../../IMAGES/background.png";
import { Link } from "react-router-dom";
import { Alert, Button } from "@mui/material";
import axios from "../../axios";
function Login() {
  const [password, setPassword] = useState(false);
  const [err, setErr] = useState(null);
  const [values, setValues] = useState({
    login: "",
    password: "",
  });
  const [width, setWidth] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 867 ? setWidth(false) : setWidth(true);
    });
  });
  useEffect(() => {
    document.title = "Login to FoodPlanet";
    window.innerWidth >= 867 ? setWidth(false) : setWidth(true);
  }, []);
  const validate = async (data) => {
    const { login, password } = data;
    if (login === "" || password === "") {
      return "Enter your password or email";
    }
    if (!login.includes("@gmail.com" || login.startsWith("@"))) {
      return "Enter valid email address";
    }
  };
  const getValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const post = async (e) => {
    e.preventDefault();
    setErr(await validate(values));
    try {
      const data = await axios.post("/api/auth/signin", values);
      if(data.data) localStorage.setItem("token", JSON.stringify(data.data))
      navigate("/pages/menu")
    } catch (err) {
      console.log(err.response.data.apierror)
      for (let i in err.response.data.apierror.details) {
        if (!err) setErr(err.response.data.apierror.details[i]);
      }
    }
  };
  const watchP = () => {
    setPassword(!password);
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
        <h1 className="text-3xl font-bold text-center">
          Login to your account{" "}
        </h1>
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
            name="login"
            placeholder="Email or phone number"
          />
          <div className="relative">
            <input
              className="w-full py-2 rounded-[5px] pl-3 border-2 border-solid outline-none"
              onChange={getValues}
              type={!password ? "password" : "text"}
              name="password"
              placeholder="Password"
            />
            <div
              className="absolute right-3 cursor-pointer top-[20%]"
              onClick={watchP}
            >
              {password ? <VisibilityOff /> : <Visibility />}
            </div>
          </div>
          <Link
            to="/reset"
            className="text-right w-full hover:underline text-[blue]"
          >
            Forgot password?
          </Link>
          <div className="flex justify-end">
            <Button
              type="submit"
              variant="contained"
              style={{ background: "#E08B1F" }}
            >
              Login
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

export default Login;
