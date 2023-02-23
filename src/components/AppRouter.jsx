import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/constans";
import { privateRoutes, publicRoutes } from './routes';

import { Context } from '../index';

import { useSelector, useDispatch } from 'react-redux';

const AppRouter = () => {

    const userLoading = useSelector(state => state.user.isLoading)

    return userLoading ? (
        <Switch>
            {privateRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component} exact={true} />)}
            <Redirect to={CHAT_ROUTE} />
        </Switch>
        
    )  : (
        <Switch>
            {publicRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component} exact={true} />)}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
}

export default AppRouter