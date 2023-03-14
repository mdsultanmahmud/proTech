import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Blog from "../pages/Blog/Blog"
import Contact from "../pages/Contact/Contact"
import Home from "../pages/Home/Home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"contact",
                element:<Contact></Contact>
            }
        ]
    }
])

export default router