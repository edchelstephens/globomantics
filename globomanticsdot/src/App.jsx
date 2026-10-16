import Banner from "./components/Banner";
import HouseList from "./components/HouseList";
import House from "./components/House";
import { useState } from "react";
import "./App.css"


const App = () => {

  const [selectedHouse, setSelectedHouse] = useState();

  const setSelectedHouseWrapper = (house) => {
    // do checks here so that the house argument is indeed a valid house
    // this idea is easily done though with TypeScript
    setSelectedHouse(house);
  }

  return (
    <>

      <Banner headerText="Providing houses all over the Philippines!" />

      {selectedHouse ? <House house={selectedHouse} /> : <HouseList selectHouse={setSelectedHouseWrapper} />}


    </>
  )
};

export default App;

