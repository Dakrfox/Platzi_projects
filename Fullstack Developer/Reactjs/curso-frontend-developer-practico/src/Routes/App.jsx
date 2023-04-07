import React from "react";
import Login from "../containers/login.jsx";
import Layout from "../containers/layout.jsx"
import PasswordRecovery from "../containers/PasswordRecovery.jsx";
import "../styles/global.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const App = ()=>{
    return (
        <BrowserRouter> 
        <Layout>
                <Switch>
                    <Route exact path="/" component={Home }/>
                    <Route exact path="/login" component={Login }/>
                    <Route exact path="/password-recovery" component={PasswordRecovery}/>
                    <Route exact path="*" component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>

    );
}

export default App;