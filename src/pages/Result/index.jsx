import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarList } from "../../redux/features/carListSlice";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import "./styles.css";

const Result = () => {
  // const [name, setName] = useState("");
  // const [cars, setCars] = useState([]);
  const ERROR_SCR =
    "https://placehold.jp/c2c2c2/ffffff/286x160.png?text=%E2%9B%9F&css=%7B%22border-radius%22%3A%22%208px%22%7D";
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.list.data);

  useEffect(() => {
    dispatch(getCarList());
  }, []);

  const handleNotFound = (event) => {
    event.target.src = ERROR_SCR;
    event.target.onerror = null;
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Search bar */}
      <SearchBar />
      {/* Search result */}
      <div className="car-list-container">
        {cars.map((item) => (
          <div key={item.id} className="car-card">
            {item.image ? (
              <img src={item.image} onError={handleNotFound} />
            ) : (
              <img src={ERROR_SCR} />
            )}
            <p>{item.name}</p>
            <h2>Rp. {item.price}/ hari</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to={`/car-list/${item.id}`}>
              <button className="select-car">Pilih Mobil</button>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Result;
