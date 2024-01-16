import "./style.css";

const PriceList = () => {
  return (
    <div className="price-card">
      <div>
        <h3>Innova</h3>
        <p>medium</p>
      </div>
      <div>
        <h3>Total</h3>
        <p>Rp. 1.000.000</p>
      </div>
      <div>
        <div>
          <h3>Harga</h3>
          <div>
            <p>Sewa Mobil</p>
            <p>Rp. 1.000.000</p>
          </div>
          <div>
            <h3>Biaya Lainnya</h3>
            <div>
              <p>Pajak</p>
              <p>Termasuk</p>
            </div>
          </div>
        </div>
        <button>Bayar</button>
      </div>
    </div>
  );
};

export default PriceList;
