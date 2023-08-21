import { useNavigate } from "react-router-dom";
import axiosInstance from "./axios";

export const useLogout = () => {
  const navigator = useNavigate();
  const logoutHandler = () => {
    const res = axiosInstance.post("user/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });

    console.log(res);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    axiosInstance.defaults["headers"] = null;
    navigator("/login");
  };
  return logoutHandler;
};
