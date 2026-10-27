

import HouseRow from "./HouseRow";
import LoadingIndicator from "./LoadingIndicator";
import useHouses from "../hooks/useHouses";

import ErrorBoundary from "./ErrorBoundary";
import TableHead from "./TableHead";
import HouseForm from "./HouseForm";


const HouseList = () => {


    const { houses, isLoading, addHouse } = useHouses();





    const headerTexts = ["Address", "Country", "Asking Price"]
    return (

        isLoading ? <LoadingIndicator text="Loading data..." /> :
            <>
                <div className="row mb-2">
                    <h5 className="themeFontColor text-center">
                        Houses currently on the market
                    </h5>
                </div>
                <table className="table table-hover">
                    <TableHead headerTexts={headerTexts} />
                    <tbody>
                        <ErrorBoundary fallback="Error loading house rows!">
                            {houses.map(house => (
                                <HouseRow key={house.id}
                                    house={house}

                                />
                            ))}
                        </ErrorBoundary>
                    </tbody>
                </table>


                <HouseForm addHouse={addHouse} />
            </>

    )


};

export default HouseList;