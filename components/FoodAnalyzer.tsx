import React, { useState, useEffect, useRef } from 'react';
import { Scan, Sparkles, Loader2, Play, Pause, Activity, Utensils, Music, RefreshCw, CheckCircle2 } from 'lucide-react';
import { FoodAnalysisResult } from '../types';
import * as Tone from 'tone';

export const FoodAnalyzer: React.FC = () => {
  const [stage, setStage] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [loadingText, setLoadingText] = useState('Initializing Computer Vision...');
  const sectionRef = useRef<HTMLElement>(null);
  const [autoTriggered, setAutoTriggered] = useState(false);
  
  // Audio State
  const [isPlaying, setIsPlaying] = useState(false);
  const synthRef = useRef<Tone.PolySynth | null>(null);

  // Pre-defined demo data
  const demoResult: FoodAnalysisResult = {
    foodName: "Grilled Salmon Power Bowl",
    calories: 485,
    macros: {
      protein: "34g",
      carbs: "42g",
      fats: "19g"
    },
    textureAnalysis: "Fibrous protein & mixed grains detected",
    sonicPairing: {
      bpm: 60,
      reasoning: "Complex textures detected. Rhythm slowed to 60 BPM to encourage 30+ chews per bite.",
      mood: "Digestive Flow"
    }
  };

  const startSimulation = () => {
    if (stage !== 'idle') return;
    setStage('scanning');
    
    // Simulate steps of analysis
    const steps = [
      { t: 0, msg: "Identifying objects..." },
      { t: 800, msg: "Calculating volumetric data..." },
      { t: 1600, msg: "Analyzing surface texture..." },
      { t: 2400, msg: "Synthesizing audio pairing..." },
    ];

    steps.forEach(({ t, msg }) => {
      setTimeout(() => setLoadingText(msg), t);
    });

    setTimeout(() => {
      setStage('complete');
    }, 3200);
  };

  const toggleAudio = async () => {
    if (isPlaying) {
      // STOP
      if (synthRef.current) {
        synthRef.current.releaseAll();
      }
      setIsPlaying(false);
    } else {
      // START
      await Tone.start();

      if (!synthRef.current) {
        // 1. Create Reverb
        const reverb = new Tone.Reverb({
            decay: 4,       
            preDelay: 0.1,
            wet: 0.6       
        }).toDestination();

        // 2. Create Delay
        const delay = new Tone.PingPongDelay({
            delayTime: "4n.",
            feedback: 0.4,
            wet: 0.3
        }).connect(reverb);

        // 3. Create Filter
        const filter = new Tone.Filter({
            type: "lowpass",
            frequency: 400,
            rolloff: -24,
            Q: 1
        }).connect(delay);

        // 4. Create LFO for "movement"
        const lfo = new Tone.LFO({
            frequency: 0.12, 
            min: 200,      
            max: 1500,     
            type: "sine"
        }).start();

        lfo.connect(filter.frequency);

        // 5. Create PolySynth
        const synth = new Tone.PolySynth(Tone.Synth, {
            oscillator: {
                type: "fatsawtooth",
                count: 3,           
                spread: 20          
            },
            envelope: {
                attack: 3,     
                decay: 1,
                sustain: 1,
                release: 3     
            }
        }).connect(filter);
        
        synthRef.current = synth;
      }
      
      // Trigger the chord
      synthRef.current.triggerAttack(["G2", "D3", "Bb3", "A3"]);
      setIsPlaying(true);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (synthRef.current) {
        synthRef.current.releaseAll();
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !autoTriggered) {
          setAutoTriggered(true);
          setTimeout(() => {
            const btn = document.getElementById('btn-simulate-scan');
            if (btn) btn.click();
          }, 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [autoTriggered]);

  return (
    <section ref={sectionRef} className="py-20 bg-black relative">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold tracking-widest uppercase mb-4 border border-teal-500/20">
                <Sparkles size={12} />
                <span>Experience the Tech</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              See <span className="text-teal-400">AI Analysis</span> in Action
            </h2>
            <p className="text-gray-400 max-w-2xl">
                Try our interactive demo to see how DineFlow analyzes meal composition to create the perfect digestive soundtrack.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Viewfinder / Image Section */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white/10 bg-gray-900 shadow-2xl group">
                {/* Simulated Camera UI Overlay */}
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between items-start">
                        <div className="w-8 h-8 border-t-2 border-l-2 border-white/50 rounded-tl-lg"></div>
                        <div className="w-8 h-8 border-t-2 border-r-2 border-white/50 rounded-tr-lg"></div>
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="w-8 h-8 border-b-2 border-l-2 border-white/50 rounded-bl-lg"></div>
                        <div className="w-8 h-8 border-b-2 border-r-2 border-white/50 rounded-br-lg"></div>
                    </div>
                </div>

                {/* The Image */}
                <img 
                    src="https://d1w7312wesee68.cloudfront.net/KWuuJoDEPaPqvtcL6F53by2fk8eqoac3XnMu9L2VIfU/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-36182000000000000/menu/items/6/item-200000057486391546_1752877110.jpg" 
                    alt="Salmon Bowl" 
                    className={`w-full h-full object-cover transition-all duration-700 ${stage === 'scanning' ? 'scale-105 filter brightness-110' : 'scale-100 opacity-80'}`}
                />

                {/* Scanning Laser Effect */}
                {stage === 'scanning' && (
                    <div className="absolute inset-0 z-20">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
                        <div className="absolute inset-0 bg-teal-500/10"></div>
                        
                        {/* Detection Boxes */}
                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-teal-400/50 rounded-lg animate-pulse">
                             <div className="absolute -top-6 left-0 bg-teal-500 text-black text-xs font-bold px-2 py-1 rounded">
                                 Detecting...
                             </div>
                        </div>

                        {/* Loading State Overlay */}
                        <div className="absolute bottom-10 left-0 right-0 text-center">
                            <div className="inline-flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-teal-500/30">
                                <Loader2 className="w-4 h-4 text-teal-400 animate-spin" />
                                <span className="text-teal-50 font-mono text-sm">{loadingText}</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Initial Start Button Overlay */}
                {stage === 'idle' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] z-30 transition-opacity">
                        <button 
                            id="btn-simulate-scan"
                            onClick={startSimulation}
                            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            <Scan className="w-5 h-5" />
                            <span>Simulate AI Scan</span>
                            <div className="absolute inset-0 rounded-full ring-2 ring-white ring-offset-4 ring-offset-black animate-pulse-slow"></div>
                        </button>
                    </div>
                )}
                
                {/* Complete Overlay (Success Check) */}
                {stage === 'complete' && (
                     <div className="absolute top-6 right-6 z-30 animate-blob">
                        <div className="bg-green-500 text-white p-2 rounded-full shadow-lg">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                     </div>
                )}
            </div>

            {/* Results Dashboard */}
            <div className={`w-full transition-all duration-700 transform ${stage === 'complete' ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-50 blur-sm pointer-events-none'}`}>
                {stage === 'complete' ? (
                    <div className="space-y-6">
                        {/* Nutrition Card */}
                        <div className="glass-panel p-6 rounded-3xl border border-teal-500/30 shadow-[0_0_50px_rgba(20,184,166,0.1)]">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-white">{demoResult.foodName}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Activity size={14} className="text-teal-400" />
                                        <p className="text-gray-400 text-sm">{demoResult.textureAnalysis}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-4xl font-display font-bold text-white">{demoResult.calories}</span>
                                    <span className="text-xs text-teal-400 font-bold uppercase block tracking-wider mt-1">Kcal</span>
                                </div>
                            </div>
                            
                            <div className="space-y-5">
                                <MacroBar label="Protein" value={demoResult.macros.protein} color="bg-purple-500" percentage={75} />
                                <MacroBar label="Carbs" value={demoResult.macros.carbs} color="bg-teal-500" percentage={60} />
                                <MacroBar label="Healthy Fats" value={demoResult.macros.fats} color="bg-orange-500" percentage={40} />
                            </div>
                        </div>

                        {/* Sonic Pairing Card */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/60 to-black p-8 rounded-3xl border border-purple-500/40 group">
                            {/* Animated Background */}
                            <div className={`absolute -right-20 -top-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] ${isPlaying ? 'animate-pulse' : 'opacity-50'}`}></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg transition-colors ${isPlaying ? 'bg-purple-500 text-white' : 'bg-purple-500/20 text-purple-300'}`}>
                                            <Music className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-purple-200">Generated Soundscape</span>
                                    </div>
                                    <Badge icon={<Utensils size={12}/>} text={demoResult.sonicPairing.mood} />
                                </div>

                                <div className="flex items-end justify-between">
                                    <div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-display font-bold text-white">{demoResult.sonicPairing.bpm}</span>
                                            <span className="text-lg text-purple-300 font-medium">BPM</span>
                                        </div>
                                        <p className="text-gray-300 text-sm mt-3 max-w-[280px] leading-relaxed border-l-2 border-purple-500/30 pl-3">
                                            {demoResult.sonicPairing.reasoning}
                                        </p>
                                    </div>
                                    
                                    <button 
                                        onClick={toggleAudio}
                                        className={`w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.4)] ${isPlaying ? 'bg-purple-500 text-white animate-pulse' : 'bg-white text-purple-900 animate-bounce delay-700'}`}
                                    >
                                        {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 ml-1 fill-current" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <button onClick={() => { 
                                if (isPlaying) toggleAudio();
                                setStage('idle'); 
                            }} className="text-gray-500 hover:text-white text-sm flex items-center gap-2 mx-auto transition-colors">
                                <RefreshCw size={14} /> Reset Demo
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Placeholder for empty state to keep layout height */
                    <div className="h-full border border-white/5 rounded-3xl bg-white/[0.02] border-dashed flex flex-col items-center justify-center p-12 text-center opacity-50">
                        <Scan className="w-16 h-16 text-gray-700 mb-6" />
                        <h3 className="text-xl font-bold text-gray-600">Waiting for Scan</h3>
                        <p className="text-gray-700 mt-2">Analysis results will appear here</p>
                    </div>
                )}
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

const MacroBar = ({ label, value, color, percentage }: { label: string, value: string, color: string, percentage: number }) => (
    <div className="group">
        <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400 group-hover:text-white transition-colors">{label}</span>
            <span className="text-white font-medium">{value}</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
                className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`} 
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);

const Badge = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/20 text-xs font-bold text-purple-200 border border-purple-500/20">
        {icon}
        <span>{text}</span>
    </div>
);