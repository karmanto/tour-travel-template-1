import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout: React.FC = () => {
  // Pexels image URL for the consistent background
  const backgroundImage = "https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="relative min-h-screen flex flex-col font-sans text-bv-text-light">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Semi-transparent overlay for better text readability and design consistency */}
        <div className="absolute inset-0 bg-bv-dark-blue opacity-70"></div>
      </div>

      <Header />
      <main className="relative z-10 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
