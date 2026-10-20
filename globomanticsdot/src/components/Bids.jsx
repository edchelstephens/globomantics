import currencyFormatter from "../helpers/currencyFormatter";
import useBids from "../hooks/useBids";
import TableHead from "./TableHead";
import LoadingIndicator from "./LoadingIndicator";
import BidForm from "./BidForm";
import { useState } from "react";

const Bids = ({ house }) => {

    const headerTexts = ["Bidder", "Amount"]
    const emptyBid = {
        houseId: house.id,
        bidder: "",
        amount: 0
    }

    const { bids, isLoading, addBid } = useBids(house.id);
    const [newBid, setNewBid] = useState(emptyBid);

    const onBidSubmitClick = () => {
        addBid(newBid);
        setNewBid(emptyBid);
    }


    return (
        isLoading ? <LoadingIndicator text="Loading data..." /> : (<>
            <div className="row mt-4">
                <div className="col-12">
                    <table className="table table-sm">
                        <TableHead headerTexts={headerTexts} />
                        <tbody>
                            {bids.map((b) => (
                                <tr key={b.id}>
                                    <td>{b.bidder}</td>
                                    <td>{currencyFormatter.format(b.amount)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <BidForm bidSubmitAction={onBidSubmitClick} />
        </>)



    )
};

export default Bids;




