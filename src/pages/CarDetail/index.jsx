import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import Terms from "./terms";

const CarDetail = () => {
    return (
        <div>
            <Navbar/>
            <SearchBar/>
            <div>
                <Terms/>
                <div>
                    {/* car-image */}
                    {/* car-name
                    car-type
                    input-calendar
                    price
                    payment-button */}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CarDetail;