import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const VacationsPage: React.FC = () => {
  const vacationPackages = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Paris - Eiffel Tower
      price: '$999',
      name: 'Paris',
      details: '7 nights, 4-star hotel, B&B',
      description: 'I\'m a paragraph. Click here to add your own text and edit me. I\'m a great place for you to tell a story & let your users know a little more about you.',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Switzerland - Mountains
      price: '$1799',
      name: 'Switzerland',
      details: '10 nights, 5-star hotel, all inclusive',
      description: 'I\'m a paragraph. Click here to add your own text and edit me. I\'m a great place for you to tell a story & let your users know a little more about you.',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Thailand - Temple
      price: '$1699',
      name: 'Thailand',
      details: '10 nights, 4-star hotel, B&B',
      description: 'I\'m a paragraph. Click here to add your own text and edit me. I\'m a great place for you to tell a story & let your users know a little more about you.',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/273500/pexels-photo-273500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // New York - Cityscape
      price: '$999',
      name: 'New York',
      details: '7 nights, 4-star hotel, all inclusive',
      description: 'I\'m a paragraph. Click here to add your own text and edit me. I\'m a great place for you to tell a story & let your users know a little more about you.',
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/207247/pexels-photo-207247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Italy - Colosseum
      price: '$356',
      name: 'Italy',
      details: '3 nights, 4-star hotel, B&B',
      description: 'I\'m a paragraph. Click here to add your own text and edit me. I\'m a great place for you to tell a story & let your users know a little more about you.',
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Canada - Lake Louise
      price: '$899',
      name: 'Canada',
      details: '7 nights, 4-star hotel, all inclusive',
      description: 'I\'m a paragraph. Click here to add your own text and edit me. I\'m a great place for you to tell a story & let your users know a little more about you.',
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Australia - Sydney Opera House
      price: '$1099',
      name: 'Australia',
      details: '7 nights, 5-star hotel, B&B',
      description: 'I\'m a paragraph. Click here to add your own text and edit me. I\'m a great place for you to tell a story & let your users know a little more about you.',
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // London - Big Ben
      price: '$299',
      name: 'London',
      details: '3 nights, 4-star hotel, all inclusive',
      description: 'I\'m a paragraph. Click here to add your own text and edit me. I\'m a great place for you to tell a story & let your users know a little more about you.',
    },
  ];

  return (
    <div className="relative z-10 py-12 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-bv-text-light">VACATIONS</h1>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="relative rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-bv-surface bg-opacity-70 h-64">
          <img
            src="https://images.pexels.com/photos/1209658/pexels-photo-1209658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Divers image
            alt="Explore"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-bv-teal mb-4">EXPLORE.</h2>
            <h2 className="text-4xl font-bold text-bv-teal mb-4">DREAM.</h2>
            <h2 className="text-4xl font-bold text-bv-teal">DISCOVER.</h2>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/1209658/pexels-photo-1209658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Divers image
            alt="Divers"
            className="w-full h-64 object-cover"
          />
        </div>
      </section>

      {/* Vacation Packages Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {vacationPackages.map((pkg) => (
          <div key={pkg.id} className="bg-bv-surface bg-opacity-70 rounded-xl shadow-lg overflow-hidden">
            <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-4xl font-bold text-bv-teal mb-2 block">{pkg.price}</span>
              <h3 className="text-xl font-semibold text-bv-text-light mb-1">{pkg.name}</h3>
              <p className="text-sm text-bv-text-secondary mb-4">{pkg.details}</p>
              <p className="text-xs text-bv-text-secondary mb-6">{pkg.description}</p>
              <button className="flex items-center text-bv-teal hover:text-bv-light-teal transition-colors text-sm font-semibold">
                More Details <MoreHorizontal size={16} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Book Your Vacation Now CTA (reused from Home) */}
      <section className="bg-bv-teal bg-opacity-90 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <h2 className="text-3xl font-bold text-bv-text-light mb-4 md:mb-0">BOOK YOUR VACATION NOW</h2>
        <button className="px-10 py-4 border-2 border-bv-text-light text-bv-text-light font-semibold rounded-md hover:bg-bv-text-light hover:text-bv-teal transition-colors">
          G.O
        </button>
      </section>
    </div>
  );
};

export default VacationsPage;
