import React from 'react';
import { Search, Plus, Plane, Clock } from 'lucide-react';

const HomePage: React.FC = () => {
  const handpickedOffers = [
    { name: 'Romantic Paris', price: '$449' },
    { name: 'Sri Lanka', price: '$699' },
    { name: 'Tuscany to Provence', price: '$845' },
    { name: 'Malta Getaway', price: '$199' },
    { name: 'NYC Escape', price: '$899' },
  ];

  const summerDestinations = [
    { name: 'Barcelona', price: '$999' },
    { name: 'Anchorage', price: '$199' },
    { name: 'Vancouver', price: '$159' },
    { name: 'Maui', price: '$649' },
    { name: 'Cape Cod', price: '$599' },
  ];

  return (
    <div className="relative z-10 py-12 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-start justify-between mb-20">
        {/* Left Side - Search and Welcome */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start mb-12 lg:mb-0">
          <div className="bg-bv-surface bg-opacity-70 p-8 rounded-xl shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-center mb-6">SEARCH</h2>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="For A Holiday"
                className="w-full p-3 pl-10 bg-bv-dark-blue border border-bv-teal rounded-md focus:outline-none focus:ring-2 focus:ring-bv-light-teal text-bv-text-light"
              />
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-bv-teal" />
            </div>
            <button className="w-full py-3 bg-bv-teal text-bv-text-light font-semibold rounded-md hover:bg-bv-light-teal transition-colors">
              Search
            </button>
          </div>
          <button className="mt-8 px-8 py-3 border-2 border-bv-teal text-bv-teal font-semibold rounded-md hover:bg-bv-teal hover:text-bv-text-light transition-colors">
            WELCOME TO OUR WORLD
          </button>
        </div>

        {/* Right Side - Last Minute Rates */}
        <div className="w-full lg:w-2/3 flex flex-col items-end text-right">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-bv-text-light max-w-2xl">
            SEE HOW MUCH YOU CAN SAVE WITH THESE LAST MINUTE BON VOYAGE RATES.
          </h1>
          <button className="flex items-center px-6 py-3 bg-bv-teal text-bv-text-light font-semibold rounded-full hover:bg-bv-light-teal transition-colors">
            See Details
            <Plus size={20} className="ml-2" />
          </button>
        </div>
      </section>

      {/* Handpicked Offers & Last Minute Rates */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Handpicked Offers */}
        <div className="bg-bv-surface bg-opacity-70 p-8 rounded-xl shadow-lg">
          <div className="flex items-center mb-6">
            <Clock size={24} className="text-bv-teal mr-3" />
            <h2 className="text-2xl font-semibold">Handpicked Offers</h2>
          </div>
          <ul className="space-y-4">
            {handpickedOffers.map((offer, index) => (
              <li key={index} className="flex justify-between items-center border-b border-bv-border pb-2">
                <span className="text-lg text-bv-text-secondary">{offer.name}</span>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-bv-teal mr-3">{offer.price}</span>
                  <Plus size={20} className="text-bv-teal cursor-pointer hover:text-bv-light-teal transition-colors" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Last Minute Rates - Right Column */}
        <div className="space-y-8">
          <div className="bg-bv-surface bg-opacity-70 p-8 rounded-xl shadow-lg flex flex-col items-end text-right">
            <span className="text-5xl font-bold text-bv-teal mb-2 block">$649</span>
            <h3 className="text-xl font-semibold mb-4">Romantic Provence Getaway</h3>
            <button className="flex items-center px-4 py-2 border-2 border-bv-teal text-bv-teal font-semibold rounded-full hover:bg-bv-teal hover:text-bv-text-light transition-colors">
              <Plus size={18} className="mr-2" />
              Details
            </button>
          </div>
          <div className="bg-bv-surface bg-opacity-70 p-8 rounded-xl shadow-lg flex flex-col items-end text-right">
            <span className="text-5xl font-bold text-bv-teal mb-2 block">$449</span>
            <h3 className="text-xl font-semibold mb-4">8 Nights Alaska Cruise All Inclusive</h3>
            <button className="flex items-center px-4 py-2 border-2 border-bv-teal text-bv-teal font-semibold rounded-full hover:bg-bv-teal hover:text-bv-text-light transition-colors">
              <Plus size={18} className="mr-2" />
              Details
            </button>
          </div>
          <div className="bg-bv-surface bg-opacity-70 p-8 rounded-xl shadow-lg flex flex-col items-end text-right">
            <span className="text-5xl font-bold text-bv-teal mb-2 block">$899</span>
            <h3 className="text-xl font-semibold mb-4">4 Nights All Inclusive Cancun Resort & Spa</h3>
            <button className="flex items-center px-4 py-2 border-2 border-bv-teal text-bv-teal font-semibold rounded-full hover:bg-bv-teal hover:text-bv-text-light transition-colors">
              <Plus size={18} className="mr-2" />
              Details
            </button>
          </div>
        </div>
      </section>

      {/* Summer Destinations */}
      <section className="bg-bv-surface bg-opacity-70 p-8 rounded-xl shadow-lg mb-20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Plane size={24} className="text-bv-teal mr-3" />
            <h2 className="text-2xl font-semibold">Summer Destinations</h2>
          </div>
          <span className="bg-bv-teal text-bv-text-light text-xs font-bold px-3 py-1 rounded-full">Top Pick</span>
        </div>
        <ul className="space-y-4">
          {summerDestinations.map((destination, index) => (
            <li key={index} className="flex justify-between items-center border-b border-bv-border pb-2">
              <span className="text-lg text-bv-text-secondary">{destination.name}</span>
              <div className="flex items-center">
                <span className="text-lg font-bold text-bv-teal mr-3">{destination.price}</span>
                <Plus size={20} className="text-bv-teal cursor-pointer hover:text-bv-light-teal transition-colors" />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Book Your Vacation Now CTA */}
      <section className="bg-bv-teal bg-opacity-90 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <h2 className="text-3xl font-bold text-bv-text-light mb-4 md:mb-0">BOOK YOUR VACATION NOW</h2>
        <button className="px-10 py-4 border-2 border-bv-text-light text-bv-text-light font-semibold rounded-md hover:bg-bv-text-light hover:text-bv-teal transition-colors">
          G.O
        </button>
      </section>
    </div>
  );
};

export default HomePage;
