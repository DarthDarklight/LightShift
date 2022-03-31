import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
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
import Context from "../Context";

export default class Merch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: []
    };
    this.routerRef = React.createRef();
  }
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
        <div className="Merch">
         <Routes>

        {/* <Route path='/' element={<Homer/>} /> */}
        <Route path='/' element={<ProductLister/>} />
        <Route path='login' element={<Loginer/>} />
        <Route path='cart' element={<Carter/>} />
        <Route path='add-product' element={<AddProducter/>} />
        <Route path='products' element={<ProductLister/>} />
    
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
        <webNavbar/>
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

  function ProductLister()  {
    return (
      <> 
        <main>
        <webNavbar />
          <ProductList/>
        </main>
       
      </>
    );
  }
  function Carter() {
    return (
      <>
        <main>
        <webNavbar />
          <Cart/>
        </main>
 
      </>
    );
  }
  function AddProducter() {
    return (
      <>
        <main>
        <webNavbar />
          <AddProduct/>
        </main>

      </>
    );
  }
  function Loginer() {
    return (
      <>
        <main>
        <webNavbar />
          <Login/>
        </main>

      </>
    );
  }

  