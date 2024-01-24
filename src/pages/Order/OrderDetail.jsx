import dayjs from "dayjs";
import "./style.css";
import CarType from "../../components/CarType";

const OrderDetail = ({ order }) => {
  // console.log(order);

  const rentStart = dayjs(order.start_rent_at).format("DD MMM YYYY");
  const rentFinish = dayjs(order.finish_rent_at).format("DD MMM YYYY");
  return (
    <div className="order-detail">
      <h3>Detail Pesanan</h3>
      <div className="detail-container">
        <div>
          <p>Nama/Tipe Mobil</p>
          <p>{order?.Car?.name}</p>
        </div>
        <div>
          <p>Kategori</p>
          <CarType type={order?.Car?.category} />
        </div>
        <div>
          <p>Tanggal Mulai Sewa</p>
          <p>{rentStart}</p>
        </div>
        <div>
          <p>Tanggal Akhir Sewa</p>
          <p>{rentFinish}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
