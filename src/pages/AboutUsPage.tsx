import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  const testimonials = [
    {
      quote: '“The whole trip went without a hitch, you totally hit it just right for us!”',
      author: '- Sam P. -',
    },
    {
      quote: '“Our honeymoon was magical, thanks to Bon Voyage’s exquisite planning.”',
      author: '- Sara D. -',
    },
    {
      quote: '“Thanks Bon Voyage! We loved every second & would go back there in a heartbeat.”',
      author: '- Laura G. -',
    },
  ];

  return (
    <div className="relative z-10 py-12 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-bv-text-light">ABOUT US</h1>

      {/* Who We Are Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="bg-bv-surface bg-opacity-70 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">WHO WE ARE</h2>
          <img
            src="https://images.pexels.com/photos/1004606/pexels-photo-1004606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Lighthouse"
            className="w-full h-64 object-cover rounded-md mb-6 shadow-md"
          />
          <h3 className="text-xl font-semibold text-bv-teal mb-4">I'm a title. Click to edit me.</h3>
          <p className="text-bv-text-secondary text-sm mb-4">
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
          </p>
          <p className="text-bv-text-secondary text-sm">
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
          </p>
        </div>

        {/* 4 Reasons to Book With Us */}
        <div className="bg-bv-teal bg-opacity-90 p-8 rounded-xl shadow-lg flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-bv-text-light mb-8">4 REASONS TO BOOK WITH US:</h2>
          <ul className="space-y-6">
            <li className="flex items-center text-bv-text-light text-xl font-medium">
              <Star size={24} className="text-bv-text-light mr-4" fill="currentColor" /> Expert Travel Knowledge
            </li>
            <li className="flex items-center text-bv-text-light text-xl font-medium">
              <Star size={24} className="text-bv-text-light mr-4" fill="currentColor" /> Tailor-Made Holidays
            </li>
            <li className="flex items-center text-bv-text-light text-xl font-medium">
              <Star size={24} className="text-bv-text-light mr-4" fill="currentColor" /> Global Reach
            </li>
            <li className="flex items-center text-bv-text-light text-xl font-medium">
              <Star size={24} className="text-bv-text-light mr-4" fill="currentColor" /> 100% Money Protected
            </li>
          </ul>
          <button className="mt-10 w-fit px-8 py-3 border-2 border-bv-text-light text-bv-text-light font-semibold rounded-md hover:bg-bv-text-light hover:text-bv-teal transition-colors">
            Contact
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-bv-surface bg-opacity-70 p-8 rounded-xl shadow-lg mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-bv-dark-blue bg-opacity-70 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <MessageSquare size={36} className="text-bv-teal mb-4" />
              <p className="text-bv-text-light text-lg italic mb-4">
                {testimonial.quote}
              </p>
              <p className="text-bv-text-secondary font-medium">
                {testimonial.author}
              </p>
            </div>
          ))}
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

export default AboutUsPage;
