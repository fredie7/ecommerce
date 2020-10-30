import React from 'react'
import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
import Theme from './components/Theme/Theme';
import Products from './components/Products/Products';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import ProductDetails from './components/ProductDetails/ProductDetails';
import UserProfile from './components/UserProfile/UserProfile';
import Cart from './components/Cart/Cart';
import Admin from './components/Admin/Admin';
import Checkout from './components/Checkout/Checkout';
import ProductContextProvider from './context/ProductContext'

const App = () => {
    return (
        <ProductContextProvider>
            <div>
                <Layout>
                <Navigation />
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Products}/>
                            <Route exact path='/signup' component={Signup}/>
                            <Route exact path='/signin' component={Signin}/>
                            <Route exact path='/ProductDetails/:id' component={ProductDetails}/>
                            <Route exact path='/UserProfile/:id' component={UserProfile}/>
                            <Route exact path='/Cart' component={Cart}/>
                            <Route exact path='/Admin' component={Admin}/>
                            <Route exact path='/Checkout' component={Checkout}/>
                        </Switch>
                    </Router>
                </Layout>
            </div>
        </ProductContextProvider>
    )
}
export default App;
            