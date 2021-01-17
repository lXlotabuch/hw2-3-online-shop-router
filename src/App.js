import { React, useState, useEffect } from "react";
import CardsPlace from "./components/CardsPlace";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  const [goods, setGoods] = useState([]);

  const getGoods = async () => {
    const res = await fetch("./DATA.json");
    const data = await res.json();
    setGoods(data);
  };

  useEffect(async () => {
    getGoods();
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <CardsPlace goods={goods} />
      </div>
    </BrowserRouter>
  );
}

export default App;
