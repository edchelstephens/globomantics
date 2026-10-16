import { useEffect, useState } from "react";

import HouseRow from "./HouseRow";
import LoadingIndicator from "./LoadingIndicator";




const HouseList = () => {


    const [houses, setHouses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {


        const fetchHouses = async () => {
            setIsLoading(true);
            const response = await fetch("http://localhost:5000/house");
            const housesData = await response.json();
            setHouses(housesData);
            setIsLoading(false);

        };
        fetchHouses();

    }, [])



    const addHouse = () => {



        setHouses(
            currentHouses => (
                [
                    ...currentHouses,
                    {
                        id: Math.max(0, ...currentHouses.map(house => house.id)) + 1,
                        address: "Dream House, Xavier Golf Estates",
                        country: "Philippines",
                        price: 20_000_000
                    }
                ]));


    };



    return (

        isLoading ? <LoadingIndicator text="Loading data..." /> :
            <>
                <div className="row mb-2">
                    <h5 className="themeFontColor text-center">
                        Houses currently on the market
                    </h5>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Country</th>
                            <th>Asking Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {houses.map(house => (
                            <HouseRow key={house.id}
                                house={house}

                            />
                        ))}
                    </tbody>
                </table>
                <button
                    className="btn btn-primary"
                    onClick={addHouse}
                >
                    <i className="bi bi-plus-circle me-1"></i>Add
                </button>
            </>

    )


};

export default HouseList;