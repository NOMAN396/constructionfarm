import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Blog from './components/Blog/blog';
import Contact from './components/Contact/contact';
import Project from './components/Project/project';
import Service from './components/Service/service';
import Bonani from './components/Branch/Dhaka/bonani';
import Mirpur from './components/Branch/Dhaka/mirpur';
import Motijil from './components/Branch/Dhaka/motijil';
import Dhanmondi from './components/Branch/Dhaka/dhanmondi';
import Kotwali from './components/Branch/Dhaka/kotwoli';
import Chattogram from './components/Branch/chattogram';
import Rajshahi from './components/Branch/rajshahi';
import Sylhet from './components/Branch/sylhet';
import Register from './components/Admin/Register/register';
import Signin from './components/Admin/Signin/signin';
import Dashboard from './components/Admin/Dashboard/dashboard';
import Protected from './components/protected';
import { useState } from 'react';
import Construction from './components/Admin/Construction/construction';
import Projectdetails from './components/Project/projectdetails';
import Shop from "./components/Shop/shop";
import Cart from  './components/Cart/cart';
import Checkout from './components/Checkout/checkout';
import { CartProvider } from 'react-use-cart';
import Team from './components/Team/team';
import Shops from './components/Admin/Shop/shops';
import Teams from './components/Admin/Team/teams';
import Teammember from './components/Admin/Teammember/member';
import Order from './components/Admin/Order/order';




function App() {

  const [isSignedIn, setIsSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });
  return (
    <CartProvider>
   
      <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/blog" element={<Blog/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/project" element={<Project/>}/>
     <Route path="/service" element={<Service/>}/>
     <Route path= "/bonani" element ={<Bonani/>}/>
     <Route path="/mirpur" element ={<Mirpur/>} />
     <Route path = "/motijil" element={<Motijil/>} />
     <Route path = "/dhanmondi" element={<Dhanmondi/>}/>
     <Route path = "/kotwali" element={<Kotwali/>}/>
     <Route path = "/chattogram" element={<Chattogram/>}/>
     <Route path = "/rajshahi" element={<Rajshahi/>}/>
     <Route path = "/sylhet" element={<Sylhet/>}/>
      <Route path="/signin" element ={<Signin/>}/> 
     <Route path= "/register" element = {<Register/>}/>
     <Route path= "/shop" element = {<Shop/>}/>
     <Route path= "/cart" element = {<Cart/>}/>
     <Route path="/checkout" element={<Checkout />} />
     <Route path = "/projectdetails" element = {<Projectdetails/>}/>
     <Route path ="/team" element={<Team/>}/>

     
   
    <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
    <Route
            path="/construction"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Construction />
              </Protected>
            }
          />
    <Route
            path="/shops"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Shops />
              </Protected>
            }
          />
    <Route
            path="/teams"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Teams />
              </Protected>
            }
          />
    <Route
            path="/teammember"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Teammember />
              </Protected>
            }
          />
    <Route
            path="/order"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Order />
              </Protected>
            }
          />
   
   
   
   
        </Routes>
    
    </CartProvider>
   
  );
}

export default App;
