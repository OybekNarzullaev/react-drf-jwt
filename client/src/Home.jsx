import { useEffect, useState } from "react";
import axios from "./axios";

const Home = () => {
  const [data, setData] = useState("loading");
  const fetchData = async () => {
    try {
      const { data } = await axios.post("welcome/");
      setData(data);
    } catch (err) {
      setData(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div className="text-3xl">{data}</div>;
};

export default Home;
