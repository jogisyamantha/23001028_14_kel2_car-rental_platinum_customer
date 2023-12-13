import { useState, useEffect } from "react"
// import { Link } from 'react-router-dom';
import axios from "axios";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import './styles.css'

const Result = () => {
    const [name, setName] = useState('');
    const [cars, setCars] = useState([]);

    useEffect(() => {
        // handleGetCar(name, category, isRented)
        handleGetCar()
    }, [])

    const handleGetCar = (
        dataName = '', 
        dataCategory = '', 
        dataStatus = '',
        dataMinPrice = '',
        dataMaxPrice = '',
    ) => {
        axios
            .get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${dataName}&category=${dataCategory}&isRented=${dataStatus}&page=1&pageSize=10&minPrice=${dataMinPrice}&maxPrice=${dataMaxPrice}`)
            // 
            .then((res) => {
                const carData = res.data.cars
                setCars(carData)
                // console.log(carData)
                // console.log(dataMinPrice, dataMaxPrice)
            })
            .catch((err) => console.log(err))
    }
    
    return (
        <div>
            <div>Header</div>
            {/* Search bar */}
            <SearchBar/>
            {/* Search result */}
            <div className="car-list-container">
                {cars.map((item) => (
                    <div key={item.id} className="car-card">
                        <img src={item.image} />
                        <p>{item.name}</p>
                        <h2>Rp. {item.price}/ hari</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        {/* <Link to={`/search/${item.id}`}>
                            <button>Pilih Mobil</button>
                        </Link> */}
                        <button>Pilih Mobil</button>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Result;