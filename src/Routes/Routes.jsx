import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Component/Layouts";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts></Layouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);

export default router