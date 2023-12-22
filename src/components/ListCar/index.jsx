import axios from "axios";
import React, { useEffect } from "react";

const ListCar = () => {


    useEffect(() => {
        getCarList()
    }, [])

    const getCarList = async () => {
        try {
            const res = await axios.get("https://api-car-rental.binaracademy.org/admin/v2/car?page=1&pageSize=10")
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div>
            <h1>LIST CAR</h1>
        </div>
    )
}

export default ListCar