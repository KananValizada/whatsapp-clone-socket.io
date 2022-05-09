import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useState, useEffect } from "react";

const App = () => {
  const [id, setId] = useState();

  useEffect(() => {
    let isID = localStorage.getItem("id");

    if (isID) {
      setId(isID);
    } else {
    }
  }, [id]);
  return id ? <Dashboard /> : <Login onIdSubmit={setId} />;
};

export default App;
