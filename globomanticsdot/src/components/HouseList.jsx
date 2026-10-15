import HouseRow from "./HouseRow";

const houses = [
    {
        id: 1,
        address: "Building E, Room 210, Familia Apartments, Canitoan",
        country: "Philippines",
        price: 550_000
    },
    {
        id: 2,
        address: "Block 2, Lot 19, Navona, Lumbia",
        country: "Philippines",
        price: 1_700_00
    },
    {
        id: 3,
        address: "Block 17, Lot 6, Intalio, Canitoan",
        country: "Philippines",
        price: 6_900_00
    }
]


const HouseList = () => {
    return (
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
                        <HouseRow house={house} key={house.id} />
                    ))}
                </tbody>
            </table>
        </>
    )
};

export default HouseList;