


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

    const postBid = async (bid) => {

        try {
            setIsLoading(true);

            const response = await fetch("http://localhost:5000/bid", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bid)
            });
            const bidResponse = await response.json()
            return bidResponse

        } catch (error) {
            console.log("Error on postBid:", error)
        } finally {
            setIsLoading(false);
        }

    };

    const addBid = async (bid) => {
        const postedBid = await postBid(bid);
        setBids([...bids, postedBid]);
    }


    return {
        bids,

        isLoading,
        addBid

    }

};

export default useBids;