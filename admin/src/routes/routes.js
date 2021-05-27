import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Login from '../pages/Login'
import Home from '../pages/Home'
import CreateProduct from "../pages/CreateProduct";
import MyProducts from "../pages/MyProducts";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/create-product">
          <CreateProduct />
        </Route>

        <Route exact path="/my-products">
          <MyProducts />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;