import React from 'react';
import { Plane, ArrowRight, LifeBuoy, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const DestinationsPage: React.FC = () => {
  const destinations = [
    {
      name: 'Europe',
      description: 'I\'m a paragraph. Click here to add your own text and edit me. I\'m a great place for you to tell a story & let your users know a little more about you.',
      image: 'https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Eiffel Tower
    },
    {
      name: 'Africa',
      description: 'I\'m a paragraph. Click here to add your own text and edit me. I\'m a great place for you to tell a story & let your users know a little more about you.',
      image: 'https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Desert/Pyramids
    },
    {
      name: 'Asia',
      description: 'I\'m a paragraph. Click here to add your own text and edit me. I\'m a great place for you to tell a story & let your users know a little more about you.',
      image: 'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Asian temple
    },
    {
      name: 'Australia',
      description: 'I\'m a paragraph. Click here to add your own text and edit me. I\'m a great place for you to tell a story & let your users know a little more about you.',
      image: 'https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Sydney Opera House
    },
    {
      name: 'Canada',
      description: 'I\'m a paragraph. Click here to add your own text and edit me. I\'m a great place for you to tell a story & let your users know a little more about you.',
      image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Mountains/Lakes (Lake Louise)
    },
  ];

  return (
    <div className="relative z-10 py-12 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-bv-text-light">DESTINATIONS</h1>

      {/* Carousel Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Eiffel Tower (Alan Tzadkin section)
            alt="Eiffel Tower"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <span className="text-bv-text-light text-sm">© 2013 Alan Tzadkin</span>
          </div>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-bv-text-light hover:bg-black/70 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-bv-text-light hover:bg-black/70 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-bv-surface bg-opacity-70 h-64">
          <img
            src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Mountains
            alt="Mountains"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-bv-teal mb-4">START</h2>
            <p className="text-xl text-bv-text-light">The Adventure</p>
          </div>
        </div>
      </section>

      {/* Summer Destinations List & Tips */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        {/* Destinations List */}
        <div className="lg:col-span-2 bg-bv-surface bg-opacity-70 p-8 rounded-xl shadow-lg">
          <div className="flex items-center mb-6">
            <Plane size={24} className="text-bv-teal mr-3" />
            <h2 className="text-2xl font-semibold">Summer Destinations</h2>
          </div>
          <div className="space-y-8">
            {destinations.map((dest, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center border-b border-bv-border pb-6">
                <div className="md:w-2/3 pr-0 md:pr-6 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-bv-teal mb-2">{dest.name}</h3>
                  <p className="text-bv-text-secondary text-sm">{dest.description}</p>
                </div>
                <div className="md:w-1/3 flex items-center justify-end space-x-4">
                  <img src={dest.image} alt={dest.name} className="w-24 h-16 object-cover rounded-md shadow-md" />
                  <ArrowRight size={24} className="text-bv-teal cursor-pointer hover:text-bv-light-teal transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips & Call to Action */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-bv-teal bg-opacity-90 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-bv-text-light mb-4">FIND SUGGESTED HOTELS, DAY TRIPS & ADVENTURE TIPS</h3>
            <p className="text-bv-text-light text-sm mb-6">
              Bon Voyage offers travel information on a wide range of destinations. Learn about your destination today and contact us for a quote.
            </p>
            <button className="flex items-center px-6 py-3 border-2 border-bv-text-light text-bv-text-light font-semibold rounded-md hover:bg-bv-text-light hover:text-bv-teal transition-colors">
              Need Help? <LifeBuoy size={20} className="ml-2" />
            </button>
          </div>
          <div className="bg-bv-surface bg-opacity-70 p-8 rounded-xl shadow-lg">
            <p className="text-bv-text-secondary text-sm mb-4">
              Booking a major trip is exciting, but it can also be a bit overwhelming. We understand. That's why we have a team of experts to take care of your every need, making your trip stress-free & amazing.
            </p>
            <h3 className="text-xl font-bold text-bv-teal mb-2">Call Us Today</h3>
            <p className="text-3xl font-bold text-bv-text-light flex items-center">
              <Phone size={28} className="mr-3" /> 1-800-000-0000
            </p>
          </div>
        </div>
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

export default DestinationsPage;
