import "./style.css";

const PriceList = ({ isChecked, order }) => {
  return (
    <div className="price-card">
      <div className="title">
        <h3>Innova</h3>
        <p>medium</p>
      </div>
      <div className="space">
        <p>Total</p>
        <p className="bold">Rp. {order.total_price}</p>
      </div>
      <div>
        <div className="price-list-detail">
          <h3 id="price-first">Harga</h3>
          <div className="space">
            <p>Sewa Mobil</p>
            <p>Rp. 1.000.000</p>
          </div>
          <div>
            <h3>Biaya Lainnya</h3>
            <div className="space">
              <p>Pajak</p>
              <p className="green">Termasuk</p>
            </div>
            <div className="space">
              <p>Biaya makan sopir</p>
              <p className="green">Termasuk</p>
            </div>
            <h3>Belum Termasuk</h3>
            <p>Bensin</p>
            <p>Tol dan parkir</p>
          </div>
          <div className="space">
            <h3>Total</h3>
            <p className="bold">Rp. {order.total_price}</p>
          </div>
        </div>
        {isChecked ? <button>Bayar</button> : <button disabled>Bayar</button>}
      </div>
    </div>
  );
};

export default PriceList;
