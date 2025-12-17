import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-black pointer-events-none"></div>
      
      <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Ready to tune your digestion?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Join the waitlist to get early access to DineFlow and receive a curated "Digestion Playlist" while you wait.
        </p>

        {status === 'success' ? (
          <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-2xl inline-flex items-center gap-3 animate-blob">
            <Check className="w-6 h-6" />
            <span className="font-bold">You're on the list! Keep an eye on your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-teal-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              {!status && <ArrowRight size={20} />}
            </button>
          </form>
        )}
        
        <p className="mt-6 text-sm text-gray-600">
          Limited beta spots available. No spam, ever.
        </p>
      </div>
    </section>
  );
};