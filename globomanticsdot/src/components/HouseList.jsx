import { useEffect, useState } from "react";

import HouseRow from "./HouseRow";
import LoadingIndicator from "./LoadingIndicator";
import useHouses from "../hooks/useHouses";




const HouseList = ({ selectHouse }) => {


    const [isLoading, setIsLoading] = useState(false);
    const { houses, setHouses } = useHouses(setIsLoading);


    const addHouse = async () => {

        try {
            setIsLoading(true)
            let newHouse = {
                address: "Dream House, Xavier Golf Estates",
                country: "Philippines",
                description: "Your dream house at Xavier Golf estates. Prime location",
                price: 400_000,
                photo: "462358"
            };

            const response = await fetch("http://localhost:5000/house/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    newHouse
                )
            });

            if (!response.ok) {
                throw new Error(`HTTP error on creating new house: ${response.status}. Error response: ${response}`)
            }

            const newHouseResponse = await response.json()

            console.log("newHouseResponse:", newHouseResponse)

            const updatedHousesResponse = await fetch("http://localhost:5000/houses/");
            if (!updatedHousesResponse.ok) {
                throw new Error(`HTTP eror on fetcing houses: ${updatedHousesResponse.status}. Error response: ${updatedHousesResponse}`)
            }

            const updatedHouses = await updatedHousesResponse.json()

            setHouses(updatedHouses)

        } catch (error) {
            console.log("error on addHouse: ", error)
        } finally {
            setIsLoading(false);
        }







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
                                selectHouse={selectHouse}
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