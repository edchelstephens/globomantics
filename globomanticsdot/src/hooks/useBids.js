import { useEffect, useOptimistic, useState } from "react";


const useBids = (houseId) => {
    const [bids, setBids] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [optimisticBids, addOptimisticBid] = useOptimistic(bids, (bids, newbid) => [...bids, newbid]);

    useEffect(() => {

        const fetchBids = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/bids/${houseId}/`)
                const bids = await response.json();
                setBids(bids);
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        }

        fetchBids();

    }, [houseId])


    const postBid = async (bid) => {
        const response = await fetch("http://localhost:5000/bid/"{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bid)
        })

        const bidResponse = await response.json()

        return bidResponse

    }


    const addBid = async (bid) => {
        addOptimisticBid(bid);
        const postBid = await postBid(bid);
        setBids([...bids, postBid]);
    }

    return { bids: optimisticBids, isLoading, addBid }

}

export default useBids;