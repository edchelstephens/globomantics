import Banner from "./components/Banner";
import HouseList from "./components/HouseList";
import House from "./components/House";
import { useState } from "react";
import "./App.css"


const App = () => {

  const [selectedHouse, setSelectedHouse] = useState();
  return (
    <>

      <Banner headerText="Providing houses all over the Philippines!" />

      {selectedHouse ? <House house={selectedHouse} /> : <HouseList selectHouse={setSelectedHouse} />}


    </>
  )
};

export default App;

