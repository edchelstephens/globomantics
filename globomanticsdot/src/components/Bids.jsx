import currencyFormatter from "../helpers/currencyFormatter";
import useBids from "../hooks/useBids";
import TableHead from "./TableHead";
import LoadingIndicator from "./LoadingIndicator";

const Bids = ({ house }) => {

    const { bids, setBids, isLoading, setIsLoading } = useBids(house.id);
    const headerTexts = ["Bidder", "Amount"]

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
        </>)



    )
};

export default Bids;




