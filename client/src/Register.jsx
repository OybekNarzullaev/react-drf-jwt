import axios from "./axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const initialFormData = Object.freeze({
    email: "",
    password: "",
    username: "",
  });
  const [formData, updateFormData] = useState(initialFormData);

  const navigator = useNavigate();

  const changeHandler = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const submit = (e) => {
    e.preventDefault();

    axios
      .post("user/register/", {
        email: formData.email,
        user_name: formData.username,
        password: formData.password,
      })
      .then(() => navigator("/login"))
      .catch((err) => alert(err.message));
  };
  return (
    <div className="flex justify-center w-full h-full">
      <form
        onSubmit={submit}
        className="w-96 flex flex-col gap-5 p-5 border-2 h-fit mt-10"
      >
        <div className="flex flex-col">
          <label htmlFor="username">username</label>
          <input
            onChange={changeHandler}
            type="text"
            name="username"
            id="username"
            className="border-2"
          />
        </div>
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

export default Register;
