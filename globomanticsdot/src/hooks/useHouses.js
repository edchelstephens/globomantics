import { useEffect, useState } from "react";



const useHouses = () => {

    const [houses, setHouses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("http://localhost:5000/houses/");
                const housesData = await response.json();
                setHouses(housesData);

            } catch (error) {
                console.log("Error fetching houses:", error)
            } finally {
                setIsLoading(false);
            }


        };
        fetchHouses();

    }, []);


    const postHouse = async (newHouse) => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:5000/house/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newHouse)
            });

            const postedHouse = await response.json();

            return postedHouse

        } catch (error) {
            console.log("Error on postHouse:", error)
        } finally {
            setIsLoading(false);
        }
    };

    const addHouse = async (newHouse) => {
        const postedHouse = postHouse(newHouse);
        setHouses(...houses, postedHouse)
    }




    return {
        houses,
        setHouses,
        isLoading,
        setIsLoading,
        addHouse
    };
};

export default useHouses;