


import { useEffect, useState } from "react";


const useBids = (houseId) => {
    const [bids, setBids] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const fetchBids = async () => {
            try {
                setIsLoading(true);

                const response = await fetch(`http://localhost:5000/bids/${houseId}`)
                const bidsData = await response.json();
                setBids(bidsData)

            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        };

        fetchBids();
    }, [houseId])

    return {
        bids,
        setBids,
        isLoading,
        setIsLoading
    }

};

export default useBids;