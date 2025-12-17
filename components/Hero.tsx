import React from 'react';
import { Camera, Music, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-teal-500/30 text-teal-300 text-sm font-medium">
            <Sparkles size={16} />
            <span>AI-Powered Mindful Eating</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
            Eat in Rhythm.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-orange-400">
              Digest in Harmony.
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            DineFlow doesn't just count calories. It analyzes your meal via camera and generates 
            <span className="text-white font-medium"> personalized soundscapes </span> 
            scientifically tuned to slow your eating pace, improve digestion, and reduce stress.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
              <Camera size={20} />
              Scan Meal
            </button>
            <button onClick={() => document.getElementById('science')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/10">
              <Music size={20} />
              Hear the Difference
            </button>
          </div>
          
          <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Gemini 2.5 Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>Generative Audio</span>
            </div>
          </div>
        </div>

        {/* Visual/App Mockup Placeholder */}
        <div className="relative">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
             {/* Screen Content */}
             <div className="h-[32px] bg-gray-800 w-full absolute top-0 left-0 z-20 rounded-t-[2.5rem]"></div>
             <div className="flex-1 bg-black relative overflow-hidden flex flex-col">
                {/* App Header */}
                <div className="pt-12 px-6 pb-4 flex justify-between items-center z-10">
                   <span className="text-white font-display text-lg">Breakfast</span>
                   <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700"></div>
                </div>

                {/* Food Image (Simulated) */}
                <div className="mx-4 h-48 rounded-2xl bg-gray-800 overflow-hidden relative group">
                  <img src="https://www.seriouseats.com/thmb/VfwxhZk4i7ff0i7BRgHvIcBnPnM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__05__20160502-avocado-toast-vicky-wasik-ricotta-14-4efcbcf1049544489a90fe9ee2775a92.jpg" alt="Food" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-white font-bold">Avocado Toast</h3>
                      <p className="text-teal-400 text-sm">340 kcal • Healthy Fats</p>
                    </div>
                  </div>
                </div>

                {/* Sound Player Interface */}
                <div className="mt-6 mx-4 p-4 glass-panel rounded-2xl border border-purple-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-purple-500/10 animate-pulse-slow"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-purple-300 uppercase tracking-widest">Now Playing</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-1 h-3 bg-purple-400 rounded-full animate-bounce delay-75"></div>
                        <div className="w-1 h-3 bg-purple-400 rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>
                    <h4 className="text-white font-display text-lg">Morning Mastication</h4>
                    <p className="text-gray-400 text-xs mb-4">60 BPM • Slow Rhythm</p>
                    <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-gradient-to-r from-teal-500 to-purple-500"></div>
                    </div>
                  </div>
                </div>

                {/* AI Insight */}
                <div className="mt-4 mx-4 p-4 bg-gray-900 rounded-2xl border border-gray-800">
                    <div className="flex gap-3">
                        <div className="min-w-[4px] bg-orange-500 rounded-full"></div>
                        <p className="text-gray-300 text-xs leading-relaxed">
                            <strong className="text-white block mb-1">Chewing Advice</strong>
                            This texture requires roughly 25 chews. The music has slowed down to guide your pace.
                        </p>
                    </div>
                </div>
             </div>
          </div>
          
          {/* Decorative Elements around phone */}
          <div className="absolute top-1/2 -right-12 lg:-right-24 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-gray-800 shadow-xl hidden sm:block">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-900/50 rounded-lg text-teal-400"><Camera size={20} /></div>
                <div>
                    <p className="text-xs text-gray-400 uppercase">Recognition</p>
                    <p className="font-bold text-white">99.8% Accuracy</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};