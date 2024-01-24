import "./style.css";
const BankTransfer = () => {
  const stepsList = [
    "Masukkan kartu ATM, lalu PIN",
    "Pilih menu Transaksi Lainnya Transfer Ke Rek BCA Virtual Account",
    "Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678",
    "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi",
    "Ambil dan simpanlah bukti transaksi tersebut",
  ];
  return (
    <div className="transfer-container">
      <div className="bank-account card">
        <h3>Lakukan Transfer Ke</h3>
        <div>
          <p className="bank-name">BCA</p>
          <p>
            BCA Transfer <br /> a.n Binar Car Rental
          </p>
        </div>
        <div className="bank-container">
          <label>Nomor Rekening</label>
          <input type="text" value="54104257877"></input>
        </div>
        <div className="bank-container">
          <label>Total Bayar</label>
          <input type="text" value="3500000"></input>
        </div>
      </div>
      <div className="transfer-instruction card">
        <h3>Instruksi Pembayaran</h3>
        <div className="instruction-option">
          <a href="#">ATM BCA</a>
          <a href="#">M-BCA</a>
          <a href="#">BCA Klik</a>
          <a href="#">Internet Banking</a>
        </div>
        <div className="instruction-list">
          <ul>
            {stepsList.map((item) => (
              <li key={item.id}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
