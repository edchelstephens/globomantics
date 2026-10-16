import { useEffect, useState } from "react";



const useHouses = (setIsLoading) => {

    const [houses, setHouses] = useState([]);

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

    return {
        houses,
        setHouses
    };
};

export default useHouses;