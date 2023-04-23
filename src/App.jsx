import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {Routes, Route, Navigate, HashRouter} from "react-router-dom";
import Register from "./pages/Register";
import Success from "./pages/Success";
import { useSelector } from "react-redux";




const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    
    <HashRouter>
      <Routes>
      {/* exat is used to define it to remain home page */}
        <Route exact path="/" element = {
          <Home/>
        }/>
      
      {/* to category it in women section if we write : and something it is parameter*/}
        <Route path="/products/:category" element = {
          <ProductList/>
        }/>

        <Route path="/product/:id" element = {
          <Product/>
        }/>

        <Route path="/cart" element = {
          <Cart/>
        }/>

        <Route path="/success" element={[<Success />]} />

        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />

        <Route path="/register" element = {
          <Register/>

        }/>
      </Routes>
    
    </HashRouter>
  );

  
};

export default App;