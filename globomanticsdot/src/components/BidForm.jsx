

const BidForm = ({ newBid, setNewBid, bidSubmitAction }) => {

    return (
        <form action={bidSubmitAction} className="row row-cols-lg-auto" >
            <div className="col-5">
                <input
                    type="text"
                    id="bidder"
                    name="bidder"
                    placeholder="Bidder"
                    className="h-100 form-control"
                    value={newBid.bidder}
                    onChange={(event) => setNewBid({
                        ...newBid,
                        bidder: event.target.value
                    })}
                />
            </div>
            <div className="col-5">
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Amount"
                    className="h-100 form-control"
                    value={newBid.amount}
                    onChange={(event) => setNewBid({
                        ...newBid,
                        amount: parseInt(event.target.value)
                    })}
                />
            </div>
            <div className="col-2">
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    <i className="bi bi-plus"></i> Add
                </button>
            </div>
        </form>
    )

};

export default BidForm;