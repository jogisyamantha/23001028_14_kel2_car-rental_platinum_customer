import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCar from "../pages/addCar";
import Dashboard from "../pages/Dashboard";
import CarList from "../pages/CarList";



const routers = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
    },
    {
        path: "/addCar",
        element: <AddCar/>,
    },
    {
        path: "/listCar",
        element: <CarList/>
    }
])

const Router = () =>{
    return (
        <RouterProvider router={routers}/>
    )
}

export default Router