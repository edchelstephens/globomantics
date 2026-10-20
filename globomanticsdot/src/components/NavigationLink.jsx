import { useNavigate } from "react-router";




const NavigationButton = ({ text, route, iElementClassName }) => {
    const navigate = useNavigate();

    return (
        <div className="row mt-3">
            <div className="col-3">
                <button
                    className="btn btn-primary"
                    onClick={() => navigate(route)}
                >
                    <i className={iElementClassName}></i> {text}
                </button>

            </div>

        </div>
    )
};




export default NavigationButton;