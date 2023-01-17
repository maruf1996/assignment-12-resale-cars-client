import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Pay from "../../Pages/Dashboard/Pay/Pay";
import CategoryProducts from "../../Pages/Home/CategoryProducts/CategoryProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Products from "../../Pages/Products/Products";
import Error from "../../Shared/Error/Error";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router=createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products',
                element:<Products></Products>,
                loader:()=>fetch('https://resale-cars-server.vercel.app/products')
            },
            {
                path:'/category/:categoryName',
                element:<CategoryProducts></CategoryProducts>,
                loader:({params})=>fetch(`https://resale-cars-server.vercel.app/products/${params.categoryName}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    },
    {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement:<Error></Error>,
    children:[
        {
            path:'/dashboard',
            element:<MyOrders></MyOrders>
        },
        {
            path:'/dashboard/:id',
            element:<Pay></Pay>
        },
        {
            path:'/dashboard/addProduct',
            element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
        },
        {
            path:'/dashboard/myProducts',
            element:<SellerRoute><MyProduct></MyProduct></SellerRoute>
        },
        {
            path:'/dashboard/myBuyers',
            element:<SellerRoute><MyBuyers></MyBuyers></SellerRoute>
        },
        {
            path:'/dashboard/allSellers',
            element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
        },
        {
            path:'/dashboard/allUsers',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
    ]
    },
    {
        path:'/login',
        element:<Login></Login>,
        errorElement:<Error></Error>
    },
    {
        path:'/register',
        element:<Register></Register>,
        errorElement:<Error></Error>
    }
])

export default router;