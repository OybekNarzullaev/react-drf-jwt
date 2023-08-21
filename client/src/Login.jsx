import axios from "./axios";
import { useState } from "react";
import axiosInstance from "./axios";

const Login = () => {
  const initialFormData = Object.freeze({
    email: "",
    password: "",
    username: "",
  });
  const [formData, updateFormData] = useState(initialFormData);

  const changeHandler = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const submit = (e) => {
    e.preventDefault();

    axios
      .post("token/", {
        email: formData.email,
        password: formData.password,
      })
      .then((req) => {
        localStorage.setItem("access_token", req.data.access);
        localStorage.setItem("refresh_token", req.data.refresh);

        axiosInstance.defaults["Authorization"] = `JWT ${localStorage.getItem(
          "access_token"
        )}`;
        window.location.href = "/";
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="flex justify-center w-full h-full">
      <form
        onSubmit={submit}
        className="w-96 flex flex-col gap-5 p-5 border-2 h-fit mt-10"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            onChange={changeHandler}
            type="email"
            name="email"
            id="email"
            className="border-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            onChange={changeHandler}
            type="password"
            name="password"
            id="password"
            className="border-2"
          />
        </div>
        <div>
          <button type="submit" className="bg-sky-600 px-4 py-2 text-white">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
