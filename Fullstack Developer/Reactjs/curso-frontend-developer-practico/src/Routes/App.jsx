import React from "react";
import Login from "../containers/login.jsx";
import Layout from "../containers/layout.jsx"
import PasswordRecovery from "../containers/PasswordRecovery.jsx";
import "../styles/global.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';


const App = ()=>{
    return (
        <BrowserRouter> 
        <Layout>
                <Switch>
                <Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/password-recovery" component={PasswordRecovery} />
					<Route exact path="/send-email" component={SendEmail} />
					<Route exact path="/new-password" component={NewPassword} />
					<Route exact path="/account" component={MyAccount} />
					<Route exact path="/signup" component={CreateAccount} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/orders" component={Orders} />
					<Route path="*" component={NotFound} />
				</Switch>
            </Layout>
        </BrowserRouter>

    );
}

export default App;