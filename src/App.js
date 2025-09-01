import React from 'react';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import CertificationsSection from './components/CertificationsSection';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <ProductSection />
        <div className="mobile-only">
          <CertificationsSection />
        </div>
      </main>
    </div>
  );
}

export default App;
