import "./styles.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCarList } from "../../redux/features/carListSlice";

const SearchBar = () => {
  const [carName, setCarName] = useState("");
  const [carCategory, setCarCategory] = useState("");
  const [carIsRented, setCarIsRented] = useState("");
  const [carPrice, setCarPrice] = useState("");

  const carListState = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleFindCars = () => {
    console.log("find car");
    const url = `https://api-car-rental.binaracademy.org/customer/v2/car?name=${carName}&category=${carCategory}&isRented=${carIsRented}&${carPrice}&page=${carListState.page}&pageSize=6`;
    dispatch(getCarList(url));
  };

  const getCarNameInput = (e) => {
    setCarName(e.target.value);
  };

  const getCarCategoryInput = (e) => {
    setCarCategory(e.target.value);
  };

  const getCarPriceInput = (e) => {
    setCarPrice(e.target.value);
  };

  const getCarStatusInput = (e) => {
    setCarIsRented(e.target.value);
  };

  return (
    <div
      className={carListState.data.count > 0 ? "search-bar-find" : "search-bar"}
    >
      {carListState.data.count > 0 && <p>Pencarianmu</p>}
      <div className="search-form">
        <div>
          <label>Nama Mobil</label>
          <input
            type="text"
            placeholder="Innova"
            value={carName}
            onChange={getCarNameInput}
          />
        </div>
        <div>
          <label>Kategori</label>
          <select value={carCategory} onChange={getCarCategoryInput}>
            <option>-</option>
            <option value="small">2-3 orang</option>
            <option value="medium">4-5 orang</option>
            <option value="large">6-8 orang</option>
          </select>
        </div>
        <div>
          <label>Harga</label>
          <select value={carPrice} onChange={getCarPriceInput}>
            <option value="">-</option>
            <option value="minPrice=0&maxPrice=250000">
              Rp. 0 - Rp. 250.000
            </option>
            <option value="minPrice=250000&maxPrice=400000">
              Rp. 250.000 - Rp. 400.000
            </option>
            <option value="minPrice=400000&maxPrice=600000">
              Rp. 400.000 - Rp. 600.000
            </option>
          </select>
        </div>
        <div>
          <label>Status</label>
          <select value={carIsRented} onChange={getCarStatusInput}>
            <option value="">-</option>
            <option value="true">Disewakan</option>
            <option value="false">Tersewa</option>
          </select>
        </div>
        <button onClick={handleFindCars}>
          {carListState.data.count > 0 ? "Edit" : "Cari Mobil"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
