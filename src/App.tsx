import React, { useEffect, useRef } from "react";
import "./App.css";
import { io } from "socket.io-client";
import { toast } from "react-toastify";

function App() {
  useEffect(() => {
    const socket = io();
    socket.on("greeting", (data) => {
      toast(data);
    });
    fetch("/api/items")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div className="App"></div>;
}

export default App;
