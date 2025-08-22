import React from 'react';
import { Twitter, Instagram } from 'lucide-react'; // Removed Pinterest

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 bg-bv-footer-dark bg-opacity-90 py-12 px-8 md:px-16 lg:px-24 text-bv-text-secondary text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <p className="mb-2">500 Terry Francine Street</p>
          <p className="mb-2">San Francisco, CA 94158</p>
          <p className="mb-2">Info@mysite.com</p>
          <p className="mb-2">Tel: 123-456-7890</p>
          <p className="mb-4">Fax: 123-456-7890</p>
          <p className="mb-4">© 2035 by Bon Voyage.</p>
          <p className="mb-4">Powered and secured by <a href="#" className="text-bv-teal hover:underline">Wix</a></p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-bv-teal transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-bv-teal transition-colors"><Instagram size={20} /></a>
            {/* <a href="#" className="hover:text-bv-teal transition-colors"><Pinterest size={20} /></a> Removed Pinterest icon */}
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="First name *"
              className="col-span-1 p-3 bg-bv-surface border border-bv-border rounded-md focus:outline-none focus:ring-2 focus:ring-bv-teal text-bv-text-light"
            />
            <input
              type="text"
              placeholder="Last name *"
              className="col-span-1 p-3 bg-bv-surface border border-bv-border rounded-md focus:outline-none focus:ring-2 focus:ring-bv-teal text-bv-text-light"
            />
            <input
              type="email"
              placeholder="Email *"
              className="col-span-1 p-3 bg-bv-surface border border-bv-border rounded-md focus:outline-none focus:ring-2 focus:ring-bv-teal text-bv-text-light"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="md:col-span-3 p-3 bg-bv-surface border border-bv-border rounded-md focus:outline-none focus:ring-2 focus:ring-bv-teal text-bv-text-light"
            ></textarea>
            <button
              type="submit"
              className="md:col-span-3 w-fit px-8 py-3 bg-bv-teal text-bv-text-light font-semibold rounded-md hover:bg-bv-light-teal transition-colors self-end"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
