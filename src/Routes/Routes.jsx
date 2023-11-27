import { Navigate, createBrowserRouter } from "react-router-dom";
import Layouts from "../Component/Layouts";
import Home from "../Pages/Home/Home/Home";
import Categories from "../Pages/Home/Categories/Categories";
import NewsLayout from "../Component/NewsLayout";
import NewsPage from "../Pages/News/NewsPage";
import LoginLayout from "../Component/LoginLayout";
import Login from "../Component/Login/Login";
import Register from "../Component/Login/Register";
import PrivateRoute from "../Pages/PrivateRoute";
import Terms from "../Pages/Home/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: "category",
        element: <Layouts></Layouts>,
        children: [
            {
                path: ':id',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`http://localhost:3000/categories/${params.id}`)
            },
        ]
    },
    {
        path: '/news/:id',
        element: <PrivateRoute><NewsLayout></NewsLayout></PrivateRoute>,
        children: [
            {
                path: '/news/:id',
                element: <NewsPage></NewsPage>,
                loader: ({ params }) => fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    }
]);

export default router