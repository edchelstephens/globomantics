import Banner from "./components/Banner";
import HouseList from "./components/HouseList";
import House from "./components/House";

import "./App.css"



const house1 = {
  "id": 1,
  "address": "12 Valley of Kings, Geneva",
  "country": "Switzerland",
  "description": "A superb detached Victorian property on one of the town's finest roads, within easy reach of Barnes Village. The property has in excess of 6000 sq/ft of accommodation, a driveway and landscaped garden.",
  "price": 900000,
  "photo": "277667"
};


const App = () => {
  return (
    <>

      <Banner headerText="Providing houses all over the Philippines!" />

      <HouseList />

      <House house={house1} />


    </>
  )
};

export default App;

