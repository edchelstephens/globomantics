
import "./App.css"

import Banner from "./components/Banner";
import HouseList from "./components/HouseList";
import House from "./components/House";


import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {


  return (
    <BrowserRouter>
      <Banner headerText="Providing houses all over the Philippines!" />
      <Routes>
        <Route index element={<HouseList />} />
        <Route path="house" element={<House />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;

