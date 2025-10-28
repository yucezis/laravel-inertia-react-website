import { useEffect, useState } from 'react';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Subscribed with: ${email}`);
    e.target.reset();
  };

  return (
    <footer className="bg-[#fefdf7] text-gray-800 px-6 py-12 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">SUBSCRIBE</h3>
          <form onSubmit={handleSubscribe} className="flex items-center border-b border-gray-400 py-2">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              required
            />
            <button type="submit" className="text-gray-700 hover:text-black text-xl">→</button>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">ABOUT</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About Me</a></li>
            <li><a href="#" className="hover:underline">Process</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Shop Art</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">FOLLOW</h3>
          <ul className="space-y-1">
            <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
            <li><a href="https://behance.com" className="hover:underline">Behance</a></li>
            <li><a href="https://dribble.com" className="hover:underline">Dribble</a></li>
            <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">SUPPORT</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © 2022 Qode Interactive, All Rights Reserved
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-white border border-gray-300 rounded-full shadow-md px-4 py-2 text-sm hover:bg-gray-100"
        >
          TO TOP
        </button>
      )}
    </footer>
  );
}
