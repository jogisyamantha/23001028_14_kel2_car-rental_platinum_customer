import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, ConfigProvider } from "antd";
import { getCarList } from "../../redux/features/carListSlice";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import "./styles.css";
import { current } from "@reduxjs/toolkit";

const Result = () => {
  const ERROR_SCR =
    "https://placehold.jp/c2c2c2/ffffff/286x160.png?text=%E2%9B%9F&css=%7B%22border-radius%22%3A%22%208px%22%7D";
  const dispatch = useDispatch();
  const { cars, count } = useSelector((state) => state.list.data);

  // useEffect(() => {
  //   dispatch(
  //     getCarList()
  // `https://api-car-rental.binaracademy.org/customer/v2/car?page={page}&pageSize=6`
  //   );
  // }, []);

  const formatedPrice = (item) => {
    return new Intl.NumberFormat("id-ID").format(item);
  };

  const handleNotFound = (event) => {
    event.target.src = ERROR_SCR;
    event.target.onerror = null;
  };

  const handleChange = (page, pageSize) => {
    // dispatch(getCarList(page));
  };

  return (
    <div>
      {count <= 0 ? (
        <div className="header">
          <Navbar />
          <Hero isShowButton={false} />
        </div>
      ) : (
        <div>
          <div className="header-exclude-hero">
            <Navbar />
          </div>
        </div>
      )}
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
            <h2>Rp. {formatedPrice(item.price)}/ hari</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to={`/car-list/${item.id}`}>
              <button className="select-car">Pilih Mobil</button>
            </Link>
          </div>
        ))}
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#5cb85f",
            },
          }}
        >
          <Pagination
            defaultCurrent={1}
            pageSize={6}
            total={count}
            onChange={handleChange}
            style={{ marginTop: "20px" }}
          />
        </ConfigProvider>
      </div>
      <Footer />
    </div>
  );
};

export default Result;
