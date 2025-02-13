import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Testimonials from './pages/Testimonials'
import Cart from './pages/Cart'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Orders from './components/Orders'
import Verify from './pages/Verify'
import HelpCenter from './components/HelpCenter'
import PaymentMethods from './components/PaymentMethods'
import Contact from './components/Contact'
import ShippingStatus from './components/ShippingStatus'
import Complaints from './components/Complaints'
import PrivacyPolicy from './components/PrivacyPolicy'
import CookieSettings from './components/CookieSettings'
import TermConditions from './components/TermConditions'
import CancellationPolicy from './components/Cancellation'
import Imprint from './components/Imprint'
import OurTeam from './components/OurTeam'
import Sustainability from './components/Sustainability'
import Press from './components/Press'
import Jobs from './components/Jobs'
import NewsLetter from './components/NewsLetter'

const App = () => {
  return (
    <main className='overflow-hidden text-[#404040]'>
      <ToastContainer />
      <Header />
      <Routes >
      <Route  path="/" element={<Home />}/>
      <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping-status" element={<ShippingStatus />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/cookiesettings" element={<CookieSettings />} />
        <Route path="/termsconditions" element={<TermConditions />} />
        <Route path="/cancellationpolicy" element={<CancellationPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/press" element={<Press />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/newsletter" element={<NewsLetter />} />
      </Routes>
    </main>
  )
}

export default App