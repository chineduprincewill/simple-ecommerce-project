import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import PrivateRoute from './components/utils/PrivateRoute';
import Dashboard from './components/pages/Dashboard';
import Product from './components/pages/Product';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/product-detail" component={Product} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/cart" component={Cart} />
            <PrivateRoute exact path="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
