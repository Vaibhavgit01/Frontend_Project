import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#3D52A0] text-white py-10 mt-1">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Roomzy</h3>
          <p className="text-sm">
            Helping you find the perfect Flat or PG across your city with ease and trust.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: support@roomzy.com</p>
          <p className="text-sm">Phone: +91 12345 67890</p>
          <p className="text-sm">Location: Chandigarh, India</p>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} All rights reserved by <span className="font-semibold text-white">Vaibhav</span>.
      </div>
    </footer>
  );
};

export default Footer;

