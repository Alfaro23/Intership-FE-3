import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/constans";
import Login from "./Login";
import Main from "./Main";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Main
    }
]