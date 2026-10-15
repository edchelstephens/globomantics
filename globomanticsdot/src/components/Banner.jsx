import logo from "../assets/GloboDot.png"
import styles from "./Banner.module.css"
const Banner = () => {

    console.log("styles:", styles)
  
    return (
        <div>
            <h1 className={styles.header}>Hey</h1>
            <header className="row mb-4">
                <div className="col-5">
                    <img
                        src={logo}
                        className={styles.logo}
                        alt="logo"
                    />
                </div>
                <div className="col-7 mt-5">GloboDot providing houses 🏘️ all over the world 🌍! </div>

            </header>
        </div>
    )


};

export default Banner;