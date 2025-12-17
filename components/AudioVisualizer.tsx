import React from 'react';

interface AudioVisualizerProps {
  mode: 'slow' | 'focus' | 'digest';
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ mode }) => {
  const getColors = () => {
    switch (mode) {
      case 'slow': return 'bg-teal-500';
      case 'focus': return 'bg-purple-500';
      case 'digest': return 'bg-orange-500';
      default: return 'bg-white';
    }
  };

  const getSpeed = () => {
    switch (mode) {
      case 'slow': return 'duration-[3000ms]';
      case 'focus': return 'duration-[1500ms]';
      case 'digest': return 'duration-[4000ms]';
      default: return 'duration-1000';
    }
  };

  return (
    <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
      {/* Abstract Orbs */}
      <div className={`absolute w-48 h-48 ${getColors()} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${getSpeed()}`}></div>
      <div className={`absolute top-0 -right-4 w-48 h-48 ${mode === 'slow' ? 'bg-cyan-500' : mode === 'focus' ? 'bg-indigo-500' : 'bg-yellow-500'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${getSpeed()}`}></div>
      <div className={`absolute -bottom-8 left-20 w-48 h-48 ${mode === 'slow' ? 'bg-emerald-500' : mode === 'focus' ? 'bg-pink-500' : 'bg-red-500'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${getSpeed()}`}></div>
      
      {/* Central Ring */}
      <div className="relative z-10 w-32 h-32 glass-panel rounded-full flex items-center justify-center border border-white/20">
        <div className="text-center">
            <span className="block text-xs uppercase tracking-widest text-white/70">Current BPM</span>
            <span className="block text-3xl font-display font-bold text-white">
                {mode === 'slow' ? '60' : mode === 'focus' ? '90' : '45'}
            </span>
        </div>
      </div>
    </div>
  );
};