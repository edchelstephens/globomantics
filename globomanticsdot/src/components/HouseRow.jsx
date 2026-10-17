import React from "react";

import currencyFormatter from "../helpers/currencyFormatter";
import { useNavigate } from "react-router";




const HouseRow = ({ house }) => {


    const navigate = useNavigate();

    return (
        <tr onClick={() => navigate('/house', { state: { house } })}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {
                house.price && <td className={`${house.price >= 500_000 ? "text-primary" : ""}`}>{currencyFormatter.format(house.price)}</td>
            }
        </tr>
    )
};

const HouseRowMemoized = React.memo(HouseRow);

export default HouseRow;
export {
    HouseRowMemoized
}