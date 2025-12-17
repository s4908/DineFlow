import React, { useState } from 'react';
import { Play, Pause, Sun, Moon, Utensils } from 'lucide-react';
import { AudioVisualizer } from './AudioVisualizer';

export const SoundScience: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'slow' | 'focus' | 'digest'>('slow');

  const modes = [
    {
      id: 'slow',
      icon: <Utensils size={20} />,
      label: 'Mindful Eating',
      bpm: '60 BPM',
      desc: 'Slower rhythms encourage thorough chewing (30+ times), increasing satiety hormones and reducing overeating.',
      color: 'teal'
    },
    {
      id: 'digest',
      icon: <Moon size={20} />,
      label: 'Post-Meal Rest',
      bpm: '45 BPM',
      desc: 'Deep, ambient low frequencies activate the parasympathetic nervous system ("Rest and Digest").',
      color: 'orange'
    },
    {
      id: 'focus',
      icon: <Sun size={20} />,
      label: 'Metabolic Boost',
      bpm: '90 BPM',
      desc: 'Morning upbeat tracks synchronized with circadian light to jumpstart metabolism.',
      color: 'purple'
    }
  ] as const;

  return (
    <section id="science" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Interactive Demo Side */}
          <div className="order-2 lg:order-1">
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
                <div className="mb-8 text-center">
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Live Demo Simulation</p>
                    <h3 className="text-2xl font-display font-bold text-white">Experience the Frequency</h3>
                </div>

                <AudioVisualizer mode={activeMode} />

                <div className="grid grid-cols-3 gap-4 mt-12">
                    {modes.map((mode) => (
                        <button
                            key={mode.id}
                            onClick={() => setActiveMode(mode.id)}
                            className={`flex flex-col items-center p-4 rounded-xl border transition-all ${
                                activeMode === mode.id 
                                ? `bg-${mode.color}-500/20 border-${mode.color}-500 text-white` 
                                : 'bg-transparent border-white/10 text-gray-400 hover:bg-white/5'
                            }`}
                        >
                            <div className={`mb-2 ${activeMode === mode.id ? `text-${mode.color}-400` : ''}`}>
                                {mode.icon}
                            </div>
                            <span className="text-xs font-bold">{mode.label}</span>
                        </button>
                    ))}
                </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">
              Why does your food need a <br />
              <span className="text-teal-400 italic">soundtrack?</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <span className="font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">The Rhythm-Chew Connection</h4>
                  <p className="text-gray-400">
                    Research shows that auditory cues directly influence chewing rate. DineFlow uses 
                    <span className="text-teal-300"> entrainment</span> to subconsciously slow down your bites, allowing enzymes to break down food effectively.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <span className="font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Parasympathetic Activation</h4>
                  <p className="text-gray-400">
                    Stress inhibits digestion. Our AI generates "pink noise" and ambient layers specifically designed to lower cortisol levels and engage your body's rest-and-digest mode immediately after a meal.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <span className="font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Context-Aware Generation</h4>
                  <p className="text-gray-400">
                    Eating a salad at noon requires different sonic support than a steak at 8 PM. DineFlow analyzes the <span className="text-orange-300">macronutrients</span> and time to compose the perfect track.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};