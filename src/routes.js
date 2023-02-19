import Login from './components/login/Login';
import Main from './components/main/Main';
import * as constants from './constans/constans';

export const publicRoutes = [
    {
        path: constants.LOGIN_ROUTE,
        Component: Login,
    }
];

export const privateRoutes = [
    {
        path: constants.MAIN_ROUTE,
        Component: Main,
    }
];