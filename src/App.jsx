import React, { useState } from 'react';
import { ShoppingCart, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Star, Heart, Clock } from 'lucide-react';

const CookiesWebsite = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const cookies = [
    {
      id: 1,
      name: "Classic Chocolate Chip",
      price: 2.50,
      image: "🍪",
      description: "Our signature recipe with premium chocolate chips",
      rating: 4.9,
      bestseller: true
    },
    {
      id: 2,
      name: "Double Fudge Brownies",
      price: 3.25,
      image: "🧁",
      description: "Rich, fudgy brownies with chocolate chunks",
      rating: 4.8
    },
    {
      id: 3,
      name: "Oatmeal Raisin Delight",
      price: 2.25,
      image: "🍪",
      description: "Traditional oatmeal cookies with plump raisins",
      rating: 4.7
    },
    {
      id: 4,
      name: "Peanut Butter Crunch",
      price: 2.75,
      image: "🥜",
      description: "Creamy peanut butter cookies with a perfect crunch",
      rating: 4.9
    },
    {
      id: 5,
      name: "Sugar Cookie Paradise",
      price: 2.00,
      image: "⭐",
      description: "Soft, sweet sugar cookies with colorful sprinkles",
      rating: 4.6
    },
    {
      id: 6,
      name: "Macadamia White Chocolate",
      price: 3.50,
      image: "🍪",
      description: "Premium macadamia nuts with white chocolate chips",
      rating: 4.8
    }
  ];

  const addToCart = (cookie) => {
    setCart([...cart, cookie]);
  };

  const toggleFavorite = (cookieId) => {
    setFavorites(prev => 
      prev.includes(cookieId) 
        ? prev.filter(id => id !== cookieId)
        : [...prev, cookieId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
      {/* Header */}
      <header className="bg-yellow-400 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">🍪</div>
              <h1 className="text-3xl font-bold text-yellow-900">Ili's Bites</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-yellow-900" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors" onClick={() => window.open('https://api.whatsapp.com/send?phone=60193696060&text=Hello%2C%20Can%20I%20place%20an%20order%20%3F%20&fbclid=PAQ0xDSwK_qH9leHRuA2FlbQIxMQABp35McoFcbNjsNWpowHwW53f8K5pLz--pnyHoYSUkpcyq7MiKxO-jLLLzUqJ__aem_WF44fXsXcr4T9Z4VQrGtOQ', '_blank')}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Freshly Baked Daily</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Indulge in our handcrafted cookies made with the finest ingredients and baked with love since 1995
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center bg-yellow-300 px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-semibold">Fresh Every 2 Hours</span>
            </div>
            <div className="flex items-center bg-yellow-300 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 mr-2" />
              <span className="font-semibold">4.8★ Rating</span>
            </div>
          </div>
          <button className="bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            View Our Menu
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12">Our Delicious Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cookies.map((cookie) => (
              <div key={cookie.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
                {cookie.bestseller && (
                  <div className="bg-yellow-400 text-yellow-900 px-3 py-1 text-sm font-bold absolute z-10 rounded-br-lg">
                    BESTSELLER
                  </div>
                )}
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{cookie.image}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{cookie.name}</h3>
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{cookie.rating}</span>
                    </div>
                    <button 
                      onClick={() => toggleFavorite(cookie.id)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(cookie.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-600">${cookie.price}</span>
                    <button 
                      onClick={() => addToCart(cookie)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-yellow-200 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-yellow-800 mb-8">About Ili's Bites</h2>
            <p className="text-lg text-yellow-700 mb-8">
              For over 25 years, we've been crafting the perfect cookies using traditional recipes passed down through generations. 
              Every cookie is made with premium ingredients, baked fresh daily, and served with a smile. Our commitment to quality 
              and customer satisfaction has made us the most beloved bakery in town.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-yellow-800 mb-2">Award Winning</h3>
                <p className="text-yellow-700">Best Bakery 2023</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-yellow-800 mb-2">Natural Ingredients</h3>
                <p className="text-yellow-700">No artificial preservatives</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-yellow-800 mb-2">Made with Love</h3>
                <p className="text-yellow-700">Family recipes since 1995</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-6">Visit Our Store</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Based On Subang Jaya, Selangor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">(555) 123-COOKIE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">hello@ilibites.com</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-700 mb-4">Store Hours</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>8:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <a href="https://www.instagram.com/theilisbites.kl?igsh=dGpkaDcwc2kyemps" className="flex items-center space-x-3 bg-pink-600 text-white p-4 rounded-lg hover:bg-pink-700 transition-colors">
                  <Instagram className="w-6 h-6" />
                  <span>Instagram</span>
                </a>
              </div>
              
              <div className="bg-yellow-100 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-800 mb-3">Special Offers</h4>
                <p className="text-yellow-700 mb-4">
                  Subscribe to our newsletter and get 20% off your first order! Plus, be the first to know about new flavors and seasonal specials.
                </p>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg transition-colors w-full">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-800 text-yellow-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="text-3xl">🍪</div>
            <h3 className="text-2xl font-bold">Ili's Bites</h3>
          </div>
          <p className="mb-4">Baking happiness since 1995</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Careers</a>
          </div>
          <p className="text-sm text-yellow-300">
            © 2024 Ili's Bites. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CookiesWebsite;