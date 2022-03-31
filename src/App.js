import React, { useRef } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import './App.css';
import './components/media.css'
import {  NavbarBrand,Container } from 'reactstrap';
import Menu from './components/menu';
import { ALBUM1 } from './shared/songs';
import { ALBUM2 } from './shared/songs';
import { Nav,Col,Row } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import SocialFollow from "./SocialFollow"
import FooterPage from './components/footer';
import Home from './pages/Home';
import Controls from './components/Controls';
import ImpVideo from './components/implementVideoPlayer';
import VideoPlayer from './components/implementVideoPlayer';
import AboutUs from './components/AboutUs';
import Forum from './components/Forum';
import Merch from './pages/Merch';
import PostVoid from './pages/PostVoid';
import Navbar from './components/navigation';
import ProductList from './components/webshop/ProductList';
import Shop from './pages/Shop';
import Context from './Context';
import Login from './components/webshop/Login';
import AddProduct from './components/webshop/AddProduct';
import Cart from './components/webshop/Cart';
import ResetPassword from './components/webshop/ResetPassword';
import Userfront from "@userfront/core";
import Countdown from './pages/PostVoid';
// import  PostVoid from "./pages/PostVoid ";

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
      user: null,
      cart: {},
      products: []
    };
    
	}
  //Loads user,product,song and cart data from backend.db
	async componentDidMount() {
      let user = localStorage.getItem("user");
      let cart = localStorage.getItem("cart");
      
      const products = await axios.get('http://localhost:3001/products');
      const songs = await axios.get('http://localhost:3001/songs');
      user = user ? JSON.parse(user) : null;
      cart = cart? JSON.parse(cart) : {};    
      this.setState({ user,  products: products.data,songs:songs.data, cart });
    }
//login function
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
//logout function    
    logout = e => {
      e.preventDefault();
      this.setState({ user: null });
      localStorage.removeItem("user");
    };
    
//add product function
    addProduct = (product, callback) => {
      let products = this.state.products.slice();
      products.push(product);
      this.setState({ products }, () => callback && callback());
    };
//add to cart function    
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
//remove from cart function    
    removeFromCart = cartItemId => {
      let cart = this.state.cart;
      delete cart[cartItemId];
      localStorage.setItem("cart", JSON.stringify(cart));
      this.setState({ cart });
    };
//clears all cart items    
    clearCart = () => {
      let cart = {};
      localStorage.removeItem("cart");
      this.setState({ cart });
    };
//checkout- to do    
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
    

	render(){
		return (
      //Utilizes context provider to ease function calling and reduce stress on app
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout
        }}>
			<div className='App'>
        {/* Navigation bar and menu through routing (React Route v6.2.2) */}
       
        <Routes>
        <Route path='/' element={<Homer/>} />
        <Route path='login' element={<Loginer/>} />
        <Route path='shop' element={<Shoper/>} />
        <Route path='add-product' element={<AddProducter/>} />
        <Route path='cart' element={<Carter/>} />
        <Route path='postvoid' element={<PostVoider/>} />
        <Route path='forum' element={<Forumer/>} />
        <Route path='reset' element={<Reseter/>} />
        </Routes>
			</div>
       </Context.Provider>
		);
	}
}
//Main page
function Homer() {
  return (
    <>
      <main>
      <Navbar className="navbar " />
      <Container >
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
//Main Shop page
function ProductLister() {
  return (
    <> 
      <main>
      <Navbar className='Navbar' />
        <ProductList/>
        <FooterPage/>
      </main>
     
    </>
  );
}
//Main shop page
function Shoper() {
  return (
    <>
      <main>
      <Navbar className="navbar " />   
        <Shop/>
        <FooterPage/>
      </main>
    </>
  );
}
//Login page
function Loginer() {
  return (
    <>
      <main>
      <Navbar className="navbar " />
        <Login/>
        <FooterPage/>
      </main>
    </>
  );
}
//Reset password page
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
//Add product page - only for admins
function AddProducter() {
  return (
    <>
      <main>
      <Navbar className="navbar " />
        <AddProduct/>
        <FooterPage/>
      </main>
    </>
  );
}
//cart page
function Carter() {
  return (
    <>
      <main>
      <Navbar className="navbar " />
        <Cart/>
        <FooterPage/>
      </main>
    </>
  );
}
//Hate Week fake countdown
function PostVoider() {
  return (
    <>
      <main>
      <Navbar className="navbar " />
        <Countdown timeTillDate="08 26 2022, 6:30 pm" timeFormat="MM DD YYYY, hh:mm a"/>
        <FooterPage/>
      </main>
    </>
  );
}
//Forum page
function Forumer() {
  return (
    <>
      <main>
      <Navbar className="navbar " />
        <Forum/>
        <FooterPage/>
      </main>
    </>
  );
}



export default App;