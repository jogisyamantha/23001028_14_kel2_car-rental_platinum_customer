import "./style.css";

const OrderDetail = ({ order }) => {
  // console.log(order);
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
          <p>{order.start_rent_at}</p>
        </div>
        <div>
          <p>Tanggal Akhir Sewa</p>
          <p>{order.finish_rent_at}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
