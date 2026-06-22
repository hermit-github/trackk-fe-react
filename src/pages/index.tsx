import {createBrowserRouter} from "react-router-dom";
import HomePage from "./Home.page";
import NotFoundPage from "./NotFound.page";
import UsersPage from "./Users.page";

const routes = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        "path": "/users",
        "element": <UsersPage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]

const router = createBrowserRouter(routes)

export default router

