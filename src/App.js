import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Components from './pages/Components';  
import Features from './pages/Features';


function App() {
  const [page, setPage] = useState('home');

  const pages = {
    home: Home,
    aboutus: AboutUs,
    components: Components,  
    features: Features,
  };

  const CurrentPage = pages[page] || Home;

  return (
    <div className="App">
      <Navbar setPage={setPage} currentPage={page} />

      {page === 'home' && (
        <header className="App-header" id="home">
          <h1>Eco-Vend: Vending Machine</h1>
          <p className="description-text">
            “Eco-Vend: A Vending Machine for Recycling and Rewarding Students with Candy at Wesleyan University Philippines in Cabanatuan City”
          </p>
         <img src="/recycling-logo.png" alt="Recycling Logo" className="recycling-logo" />

        </header>
      )}

      <main>
        <CurrentPage />
      </main>

      {page !== 'aboutus' && page !== 'components' && page !== 'features' && (  
        <footer>
          <p>&copy; Eco-Vend 2025</p>
        </footer>
      )}
    </div>
  );
}

export default App;



