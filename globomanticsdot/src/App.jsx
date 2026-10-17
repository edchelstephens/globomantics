import { useCallback, useState } from "react";
import "./App.css"

import Banner from "./components/Banner";
import navValues from "./navigation/navValues";
import HouseList from "./components/HouseList";
import navigationContext from "./navigation/navigationContext";
import ComponentPicker from "./components/ComponentPicker";




const App = () => {

  const navigate = useCallback(
    navTo => setNav({
      current: navTo,
      navigate
    }), []
  )


  const [nav, setNav] = useState(
    {
      current: navValues.home,
      navigate,
    }
  )





  return (
    <navigationContext.Provider value={nav}>
      <Banner headerText="Providing houses all over the Philippines!" />
      <ComponentPicker currentNavLocation={nav.current} />


    </navigationContext.Provider>
  )
};

export default App;

