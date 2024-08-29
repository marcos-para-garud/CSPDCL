import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopSection from './TopSection.jsx';

import CustomNavbar from './Navbar.jsx';
import TopMenuSection from './TopMenuSection.jsx';
import Carousel from './Carausal.jsx';
import MarqueeSection from './MarqueeSection.jsx';
import PaymentSection from './PaymentSection.jsx';
import ServiceCentersSection from './ServiceCenterSection.jsx';
import ApplySection from './ApplySection.jsx';
import DownloadSection from './DownloadSection.jsx';
import MediaGallerySection from './MediaGallarySection.jsx';
import FourCardsSection from './FourCardsSection.jsx';
import FourSubsections from './FourSubSections.jsx';
import LoginPage from './LoginPage.jsx';
import Dashboard from './Dashboard.jsx';
import MyAccount from './Myaccount.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the main content */}
        <Route path="/" element={
          <>
            <TopSection />
            {/* <Navbar /> */}
            <CustomNavbar/>
            <TopMenuSection />
            <Carousel />
            <MarqueeSection />
            <PaymentSection />
            <ServiceCentersSection />
            <ApplySection />
            <DownloadSection />
            <MediaGallerySection />
            <FourCardsSection />
            <FourSubsections />
          </>
        } />

        {/* Route for the login page */}
        <Route path="/login" element={
          <>
          <TopSection />
          {/* <Navbar /> */}
          <CustomNavbar/>
          <TopMenuSection />
            <LoginPage />
            <FourSubsections />
          </>
        } />

        {/* Route for the dashboard page */}
        <Route path="/dashboard" element={
          <>
            <TopSection />
            
            <Dashboard customerName="Jitendra Bharadwaj" />
            <FourSubsections />
          </>
        } />


        {/* Route for the My Account page */}
        <Route path="/my-account" element={
          <>
            <MyAccount customerName="Jitendra Bharadwaj" />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
