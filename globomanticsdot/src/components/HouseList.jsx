import { useState } from "react";

import HouseRow from "./HouseRow";




const HouseList = () => {

    const [houses, setHouses] = useState([]);



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

    const deleteLastHouse = () => {


        setHouses(
            currentHouses => currentHouses.slice(0, -1)
        )


    }

    return (
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
                Add
            </button>



            {houses.length > 0 && (
                <>
                    <br />
                    <br />
                    <button className="btn btn-danger"
                        onClick={deleteLastHouse}
                    >
                        Delete last house
                    </button>
                </>
            )}


            <br />
            <br />
            <button className="btn btn-secondary">
                House Count: {houses.length}
            </button>
        </>
    )
};

export default HouseList;