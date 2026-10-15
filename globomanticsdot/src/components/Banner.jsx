import logo from "../assets/GloboDot.png"

const Banner = () => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img
                    src={logo}
                    className="logo"
                    alt="logo"
                />
            </div>
            <div className="col-7 mt-5">GloboDot providing houses 🏘️ all over the world 🌍! </div>
        </header>
    )


};

export default Banner;