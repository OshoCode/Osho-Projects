'use client';

import React, { useState } from 'react';
import { 
  Dumbbell, 
  Users, 
  Clock,
  MapPin,
  Zap,
  Apple,
  Instagram,
  Facebook,
  Twitter,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">FEEL-FIT</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#classes" className="hover:text-gray-300">Features</a>
            <a href="#trainers" className="hover:text-gray-300">Pricing</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
          <div>
            <button className="bg-red-600 font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 text-white px-4 py-1.5 rounded-full text-m">
              Join Now
            </button>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#home" className="hover:text-gray-300">Home</a>
              <a href="#about" className="hover:text-gray-300">About</a>
              <a href="#classes" className="hover:text-gray-300">Features</a>
              <a href="#trainers" className="hover:text-gray-300">Pricing</a>
              <a href="#contact" className="hover:text-gray-300">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0 bg-black/50 z-10" />
            <img 
              src="/gym1.jpg" 
              alt="Gym" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white space-y-4 leading-tight">Transform Your Body and Life </h1>
                <p className="text-xl md:text-xl mb-8 mt-4">Bangkok's premier fitness destination with state-of-the-art equipment and expert trainers</p>
                <button className="btn">
                  Start Your Journey
                </button>
              </div>
              
        </div>

      </section>


      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="header">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/gym2.jpg" 
                alt="About Us" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Your Fitness Journey Starts Here</h3>
              <p className="text-gray-400 mb-6 text-ml">
                We are dedicated to helping you achieve your fitness goals. Our state-of-the-art facility
                and expert trainers provide the perfect environment for your transformation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-red-600 mr-2" />
                  <span>Convenient location</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-red-600 mr-2" />
                  <span>Modern equipment</span>
                </div>
                <div className="flex items-center">
                  <Apple className="w-6 h-6 text-red-600 mr-2" />
                  <span>Healthy lifestyle focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-500 w-100 h-50 rounded pt-4 pb-4">
              <Dumbbell className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-bold mb-2">Modern Equipment</h3>
              <p className="text-gray-400">State-of-the-art facilities and equipment</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
              <p className="text-gray-400">Professional guidance and support</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-bold mb-2">24/7 Access</h3>
              <p className="text-gray-400">Work out on your schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GYM</h3>
              <p className="text-gray-400">Transform your body and mind with us.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#classes" className="text-gray-400 hover:text-white">Classes</a></li>
                <li><a href="#trainers" className="text-gray-400 hover:text-white">Trainers</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Gym Street</li>
                <li>City, State 12345</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@gym.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GYM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 