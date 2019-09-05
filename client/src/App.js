import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import NavBar from './components/navbar/navbar.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Footer from './components/footer/footer.component';
import Error from './pages/error/error.component';
import Demo from './pages/demo/demo.component';
import AboutUs from './pages/aboutus/aboutus.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/demo' component={Demo} /> 
          <Route exact path='/aboutus' component={AboutUs} />         
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          <Route component={Error}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
