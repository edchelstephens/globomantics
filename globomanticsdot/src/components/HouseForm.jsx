import { useState } from "react";

const HouseForm = ({ addHouse }) => {
    const emptyHouse = {
        address: "",
        country: "",
        description: "",
        price: "",
        photo: "277667"

    }

    const [newHouse, setNewHouse] = useState(emptyHouse);

    const onAddHouseClick = () => {
        addHouse(newHouse);
        setNewHouse(emptyHouse);
    };

    return (
        <form action={onAddHouseClick} className="row row-cols-lg-auto">
            <div className="col-3">
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    className="form-control"
                    value={newHouse.address}
                    onChange={(event) => setNewHouse({
                        ...newHouse,
                        address: event.target.value
                    })}

                />
            </div>
            <div className="col-3">
                <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Country"
                    className="form-control"
                    value={newHouse.country}
                    onChange={(event) => setNewHouse({
                        ...newHouse,
                        country: event.target.value
                    })}
                />
            </div>
            <div className="col-3">
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Price"
                    className="form-control"
                    value={newHouse.price}
                    onChange={(event) => setNewHouse({
                        ...newHouse,
                        price: parseInt(event.target.value)
                    })}

                />
            </div>
            <div className="col-3">
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

export default HouseForm;


