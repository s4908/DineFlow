import React from 'react';
import { Scan, Headphones, BrainCircuit, Clock } from 'lucide-react';

const features = [
  {
    icon: <Scan className="w-8 h-8 text-teal-400" />,
    title: "Instant Food Analysis",
    description: "Simply snap a photo. Our Gemini-powered AI identifies ingredients, estimates calories, and analyzes texture."
  },
  {
    icon: <Headphones className="w-8 h-8 text-purple-400" />,
    title: "Generative Soundscapes",
    description: "Endel-like audio engine generates unique music in real-time based on your meal type and time of day."
  },
  {
    icon: <Clock className="w-8 h-8 text-orange-400" />,
    title: "Pacing Assistance",
    description: "The rhythm automatically adjusts to the ideal chewing speed for your specific meal, promoting better digestion."
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-blue-400" />,
    title: "Metabolic Sync",
    description: "We align your eating windows and audio frequencies with your circadian rhythm for maximum energy."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Beyond Calorie Counting
          </h2>
          <p className="text-gray-400 text-lg">
            A holistic approach that combines computer vision with psychoacoustics to transform how your body processes food.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-gray-900/50 border border-white/5 hover:border-white/10 hover:bg-gray-800/50 transition-all group"
            >
              <div className="mb-6 p-4 rounded-xl bg-black border border-white/5 w-fit group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};