import React, { useState, useEffect } from 'react';

interface AnimationEffect {
  id: string;
  type: 'mourn' | 'pray';
  x: number;
  y: number;
  message: string;
}

interface AnimationEffectsProps {
  effects: AnimationEffect[];
  onEffectComplete: (id: string) => void;
}

const AnimationEffects: React.FC<AnimationEffectsProps> = ({ effects, onEffectComplete }) => {
  useEffect(() => {
    effects.forEach(effect => {
      const timer = setTimeout(() => {
        onEffectComplete(effect.id);
      }, 3000); // Remove effect after 3 seconds

      return () => clearTimeout(timer);
    });
  }, [effects, onEffectComplete]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {effects.map(effect => (
        <div key={effect.id}>
          {effect.type === 'mourn' ? (
            <MournEffect effect={effect} />
          ) : (
            <PrayEffect effect={effect} />
          )}
        </div>
      ))}
    </div>
  );
};

const MournEffect: React.FC<{ effect: AnimationEffect }> = ({ effect }) => {
  return (
    <div
      className="absolute animate-mourn-fall"
      style={{ left: effect.x, top: effect.y }}
    >
      {/* Falling tears */}
      <div className="flex flex-col items-center">
        <div className="text-4xl mb-2 animate-bounce">💧</div>
        <div className="text-2xl mb-1 animate-pulse">😢</div>
        <div className="text-lg animate-pulse">💔</div>
        
        {/* Message bubble */}
        <div className="mt-4 bg-blue-900/90 text-blue-100 px-4 py-2 rounded-lg text-sm font-medium shadow-lg animate-fade-in-up border border-blue-400/30">
          {effect.message}
        </div>
      </div>
    </div>
  );
};

const PrayEffect: React.FC<{ effect: AnimationEffect }> = ({ effect }) => {
  return (
    <div
      className="absolute animate-pray-rise"
      style={{ left: effect.x, top: effect.y }}
    >
      {/* Rising prayer elements */}
      <div className="flex flex-col items-center">
        <div className="text-4xl mb-2 animate-spin-slow">✨</div>
        <div className="text-3xl mb-1 animate-pulse">🙏</div>
        <div className="text-2xl animate-bounce">👼</div>
        
        {/* Floating sparkles */}
        <div className="absolute -top-8 -left-4 text-yellow-300 animate-float-sparkle-1">⭐</div>
        <div className="absolute -top-6 right-2 text-yellow-300 animate-float-sparkle-2">✨</div>
        <div className="absolute -top-10 left-8 text-yellow-300 animate-float-sparkle-3">💫</div>
        
        {/* Message bubble */}
        <div className="mt-4 bg-purple-900/90 text-purple-100 px-4 py-2 rounded-lg text-sm font-medium shadow-lg animate-fade-in-up border border-purple-400/30">
          {effect.message}
        </div>
      </div>
    </div>
  );
};

export default AnimationEffects;
export type { AnimationEffect };