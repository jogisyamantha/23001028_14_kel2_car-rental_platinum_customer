import "./style.css";

const PriceList = () => {
  return (
    <div className="price-card">
      <div className="title">
        <h3>Innova</h3>
        <p>medium</p>
      </div>
      <div className="space">
        <h3>Total</h3>
        <p>Rp. 1.000.000</p>
      </div>
      <div>
        <div>
          <h3>Harga</h3>
          <div className="space">
            <p>Sewa Mobil</p>
            <p>Rp. 1.000.000</p>
          </div>
          <div>
            <h3>Biaya Lainnya</h3>
            <div className="space">
              <p>Pajak</p>
              <p>Termasuk</p>
            </div>
            <div className="space">
              <p>Biaya makan sopir</p>
              <p>Termasuk</p>
            </div>
            <h3>Belum Termasuk</h3>
            <p>Bensin</p>
            <p>Tol dan parkir</p>
          </div>
        </div>
        <button>Bayar</button>
      </div>
    </div>
  );
};

export default PriceList;
