import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import CategoryLayout from "../layout/CategoryLayout";
import Category from "../pages/Category";
import Safari from "../pages/Safari";
import Agbada from "../pages/Agbada";
import Blaazzers from "../pages/Blaazzers";
import CoporateSuitt from "../pages/CoporateSuitt";
import MainLayout from "../layout/mainLayout";
import ProductDetail from "../pages/ProductDetail";
import CheckOut from "../pages/CheckOut";
import AdminLogin from "../pages/AdminLogin";
export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {index:true,path:"/",element:<HomePage/>},
            {path:"/about",element:<About/>},
            {path:"/product-details",element:<ProductDetail/>},
            {path:"/checkout",element:<CheckOut/>}
        ]
    },
    {
        path:"/category",
        element:<CategoryLayout/>,
        children:[
            {index:true,path:"/category",element:<Category/>},
            {path:"/category/safari",element:<Safari/>},
            {path:"/category/agbada",element:<Agbada/>},
            {path:"/category/blazzers",element:<Blaazzers/>},
            {path:"/category/coporate_suit",element:<CoporateSuitt/>}
        ]
    },


])