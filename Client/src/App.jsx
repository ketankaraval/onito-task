import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const fetchDate = () => {
    setUpdate((prevVal) => !prevVal);
  };
  useEffect(() => {
    axios
      .get("https://onito-server-zffs.onrender.com/fetch-users")
      .then((response) => {
        console.log("here", response);
        setData(response.data);
      })
      .catch((err) => console.error("Error while fetching data: ", err));
  }, [update]);
  return (
    <div className="App">
      <Form fetchDate={fetchDate} />
      <br />
      <br />
      <br />
      <Table data={data} />
    </div>
  );
};

export default App;
