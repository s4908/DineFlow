import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FoodAnalyzer } from './components/FoodAnalyzer';
import { Features } from './components/Features';
import { SoundScience } from './components/SoundScience';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-teal-500/30">
      <Navbar />
      <main>
        <Hero />
        <FoodAnalyzer />
        <Features />
        <SoundScience />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default App;