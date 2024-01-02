const Terms = () => {
    const includeList = [
        "Apa saja yang termasuk dalam paket misal durasi max 12 jam",
        "Sudah termasuk bensin selama 12 jam",
        "Sudah termasuk Tiket Wisata",
        "Sudah termasuk pajak",
    ]
    const excludeList = [
        "Tidak termasuk biaya makan sopir Rp 75.000/hari",
        "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
        "Tidak termasuk akomodasi penginapan",
    ]
    const termsList = [
        "Tidak termasuk biaya makan sopir Rp 75.000/hari",
        "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
        "Tidak termasuk akomodasi penginapan",
        "Tidak termasuk biaya makan sopir Rp 75.000/hari",
        "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
        "Tidak termasuk akomodasi penginapan",
        "Tidak termasuk biaya makan sopir Rp 75.000/hari",
        "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
        "Tidak termasuk akomodasi penginapan",
    ]

    return (
        <div>
            <p>Tentang Paket</p>
            <div>
            <div>Include</div>
            {includeList.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            <div>Exclude</div> 
            {excludeList.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </div>
            <div>
                <p>Refund, Reschedule, Overtime</p>
                {termsList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </div>
        </div>
    )
}

export default Terms;