 import Home from './pages/home';
 import ProductList from './pages/ProductList';
 import Product from './pages/Product';
 import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {useSelector} from "react-redux"
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Redirect
    } from "react-router-dom";


const App=()=> {
       const user =useSelector((state)=>state.user.currentUser);
      //const user=false

      return (
            <Router>
                  <Switch>
                        <Route exact path="/">
                              <Home/>
                        </Route>

                        <Route path="/products/:category">
                              <ProductList/>
                        </Route>

                        <Route path="/product/:id">
                              <Product/>
                        </Route>

                        <Route path="/cart">
                              <Cart/>
                        </Route>

                        <Route path="/login">
                              {user ?<Redirect to="/"/>:<Login/>}
                              
                        </Route>

                        <Route path="/register">
                        {user ?<Redirect to="/"/>:<Register/>}
                              <Register/>
                        </Route>

                        


                  </Switch>
            </Router>

      );
      // return <Cart/>
};

export default App;
