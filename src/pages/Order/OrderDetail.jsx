import "./style.css";

const OrderDetail = () => {
  return (
    <div className="order-detail">
      <h3>Detail Pesanan</h3>
      <div className="detail-container">
        <div>
          <p>Nama/Tipe Mobil</p>
          <p>mobil</p>
        </div>
        <div>
          <p>Kategori</p>
          <p>medium</p>
        </div>
        <div>
          <p>Tanggal Mulai Sewa</p>
          <p>01-01-2024</p>
        </div>
        <div>
          <p>Tanggal Akhir Sewa</p>
          <p>01-01-2024</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
