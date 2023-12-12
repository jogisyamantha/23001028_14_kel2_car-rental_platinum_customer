import './styles.css'

const SearchBar = () => {
    return(
        <div className="search-bar">
            <p>Pencarianmu</p>
            <div className="search-form">
                <div>
                    <label>Nama Mobil</label>
                    <input type="text" placeholder="Innova"/>
                </div>
                <div>
                    <label>Kategori</label>
                    <select>
                        <option>Masukkan Kapasitas Mobil</option>
                        <option>2-4 orang</option>
                        <option>4-6 orang</option>
                        <option>6-8 orang</option>
                    </select>
                </div>
                <div>
                    <label>Harga</label>
                    <select>
                        <option>Masukkan Harga Sewa</option>
                        <option>&lt; Rp 400.000</option>
                        <option>Rp 400.000 - Rp 600.000</option>
                        <option>&gt; Rp 600.000</option>
                    </select>
                </div>
                <div>
                    <label>Status</label>
                    <select>
                        <option>Disewa</option>
                        <option>Tidak disewa</option>
                    </select>
                </div>
                <button>Cari Mobil</button>
            </div>
        </div>
    )
}

export default SearchBar;