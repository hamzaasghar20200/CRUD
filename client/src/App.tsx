import {createBrowserHistory} from "history";
import React, { useState, useEffect } from 'react';
import {connect, Provider, ReactReduxContext} from "react-redux";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import i18n, {generateLanguage} from "./core/i18n";
import { configureStore } from './state/Store';
import './styles/App.scss';
import {Helmet} from "react-helmet";
const { Store } = configureStore();
import { DashboardSidebar } from "./components/DashboardSideBar/dashboard-sidebar";
import { Society } from "./pages/society/society";
import { Block } from "./pages/block/block";
import { Phase } from "./pages/phase/phase";
import Protector from './common/app-protect';

// import { connect as Nc } from '@nextcloud/push'

export const history = createBrowserHistory();
const getToken = localStorage.getItem('loginToken')
const AppInner = (props) => {
    useEffect(()=>{
        if(getToken === ""){
            <Redirect to="/login" />
        }
    })
    // useEffect(() => {
    //     dispatch(requestSocketConnection({}))
    // }, [dispatch])
    return (
        <div className="row mx-0 pl-0">
            <div className="col-md-3 pl-0">
                <DashboardSidebar />
            </div>
            <div className="col-md-9">
                <Switch>
                    <Route path="/society" component={Society} />
                    <Route path="/society:id" component={Phase} />
                    <Route path="/phase" component={Phase} />
                    <Route path="/block" component={Block} />
                </Switch>
            </div>
        </div>
    );
};
export const App = (props) => {
    const [isSecured, setSecured] = useState(sessionStorage.getItem('IS_SECURED'));
    if(isSecured !== "true" ) {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    } else {
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }


    return (
        <>
        <Protector onSecured={setSecured}/>
            <div className={isSecured !== "true" ? "blur" : ""}>
                    <Provider store={Store} context={ReactReduxContext}>
                        <Router history={history}>
                            <Switch>
                                <Route path="/" component={AppInner}/>
                            </Switch>
                        </Router>
                    </Provider>
            </div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Property Record</title>
            <link rel="canonical" href="https://mysite.com/example" />
        </Helmet>
        </>
    );
};
