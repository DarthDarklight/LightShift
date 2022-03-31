import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import '../App.css'
import AddProduct from "../components/webshop/AddProduct";
import Cart from "../components/webshop/Cart";
import Login from "../components/webshop/Login";
import ProductList from "../components/webshop/ProductList";
import FooterPage from '../components/footer';
import Home from '../pages/Home';
import Timer from '../pages/PostVoid';
import Controls from '../components/Controls';
import ImpVideo from '../components/implementVideoPlayer';
import VideoPlayer from '../components/implementVideoPlayer';
import AboutUs from "../components/AboutUs";
import Forum from '../components/Forum';
import PostVoid from '../pages/PostVoid';
import Navbar from '../components/navigation';
import {  NavbarBrand,Container } from 'reactstrap';
import ResetPassword from "../components/webshop/ResetPassword";
import Context from "../Context";
import Merch from "./Merch";

class Shop extends React.Component {					
  
	constructor(props) {
        super(props);
        this.state = {
          user: null,
          cart: {},
          products: []
        };
        this.routerRef = React.createRef();

	}
  async componentDidMount() {
    let user = localStorage.getItem("user");
    let cart = localStorage.getItem("cart");

    const products = await axios.get('http://localhost:3001/products');
    user = user ? JSON.parse(user) : null;
    cart = cart? JSON.parse(cart) : {};

    this.setState({ user,  products: products.data, cart });
  }
  
  addProduct = (product, callback) => {
    let products = this.state.products.slice();
    products.push(product);
    this.setState({ products }, () => callback && callback());
  };
  addToCart = cartItem => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
      cart[cartItem.id].amount = cart[cartItem.id].product.stock;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };
  removeFromCart = cartItemId => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };
  
  clearCart = () => {
    let cart = {};
    localStorage.removeItem("cart");
    this.setState({ cart });
  };
  checkout = () => {
    if (!this.state.user) {
      this.routerRef.current.history.push("/login");
      return;
    }
  
    const cart = this.state.cart;
  
    const products = this.state.products.map(p => {
      if (cart[p.name]) {
        p.stock = p.stock - cart[p.name].amount;
  
        axios.put(
          `http://localhost:3001/products/${p.id}`,
          { ...p },
        )
      }
      return p;
    });
  
    this.setState({ products });
    this.clearCart();
  };
  

  login = async (email, password) => {
    const res = await axios.post(
      'http://localhost:3001/login',
      { email, password },
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })
  
    if(res.status === 200) {
      const { email } = jwt_decode(res.data.accessToken)
      const user = {
        email,
        token: res.data.accessToken,
        accessLevel: email === 'admin@example.com' ? 0 : 1
      }
  
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }
  
  logout = e => {
    e.preventDefault();
    this.setState({ user: null });
    localStorage.removeItem("user");
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout
        }}
      >
        <div className="Shop">
         <Routes>

        <Route path='home' element={<Homer/>} />
        <Route path='/' element={<ProductLister/>} />
        <Route path='/login' element={<Loginer/>} />
        <Route path='cart' element={<Carter/>} />
        <Route path='add-product' element={<AddProducter/>} />
        <Route path='products' element={<ProductLister/>} />
        <Route path='reset' element={<Reseter/>} />
        </Routes>
        </div>

      </Context.Provider>

      );
    }
  }
  function Homer() {
    return (
      <>
        <main>
        
      <Container >
      {/* <SocialFollow />  */}
      </Container>
        <ImpVideo/>   
        <Container> 
        <Home/>
        </Container>  
        <AboutUs/>
        <Forum/>
        <FooterPage/>
        </main>
      </>
    );
  }

  function ProductLister() {
    return (
      <> 

        <main>
        {/* <Navbar className='Navbar' />
          <ProductList/> */}
          {/* <webNavbar /> */}
          <ProductList />
        </main>
       
      </>
    );
  }
  function Carter() {
    return (
      <>
        <main>
        
          <Cart/>
        </main>
        
      </>
    );
  }
  function Reseter() {
    return (
      <>
        <main>
        <Navbar className="navbar " />
          <ResetPassword/>
          <FooterPage/>
        </main>
      </>
    );
  }
  function AddProducter() {
    return (
      <>
        <main>
        
          <AddProduct/>
        </main>
        
      </>
    );
  }
  function Loginer() {
    return (
      <>
        <main> 
        <Navbar className="navbar " />
          <Login/>
        </main>
      </>
    );
  }

 export default Shop;