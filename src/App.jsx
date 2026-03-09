import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Explore from './pages/Explore';
import AssetDetail from './pages/AssetDetail';
import Learn from './pages/Learn';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignUpAccountType from './pages/SignUpAccountType';
import Individuals from './pages/Individuals';
import Businesses from './pages/Businesses';
import Institutions from './pages/Institutions';
import Developers from './pages/Developers';
import Company from './pages/Company';
import Support from './pages/Support';
import Careers from './pages/Careers';
import Base from './pages/Base';
import Wallet from './pages/Wallet';
import Legal from './pages/Legal';
import CdsViteApp from './pages/CdsViteApp';
import About from './pages/About';
import './App.css';

function MarketingLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#0A0B0D]">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Dedicated CDS sandbox area */}
        <Route path="/cds-demo" element={<CdsViteApp />} />

        {/* Auth pages — standalone dark layout, no Navbar/Footer */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUpAccountType />} />
        <Route path="/signup/create" element={<SignUp />} />

        {/* Global Marketing Site */}
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/individuals" element={<Individuals />} />
          <Route path="/individuals/wallet" element={<Wallet />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/developers/base" element={<Base />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/about" element={<About />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/support" element={<Support />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/asset/:id" element={<AssetDetail />} />
          <Route path="/learn" element={<Learn />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
