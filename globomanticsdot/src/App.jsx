import Banner from "./components/Banner";
import HouseList from "./components/HouseList";
import LoadingIndicator from "./components/LoadingIndicator";
import { Suspense } from "react";
import "./App.css"




const App = () => {
  return (
    <>

      <Banner headerText="Providing houses all over the Philippines!" />
      <Suspense fallback={<LoadingIndicator text="Loading..." />}>
        <HouseList />
      </Suspense>

    </>
  )
};

export default App;

