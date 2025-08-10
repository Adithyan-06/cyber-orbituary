import React, { useState, useEffect } from 'react';
import { Obituary } from './types/Obituary';
import ObituaryCard from './components/ObituaryCard';
import AddObituaryForm from './components/AddObituaryForm';
import FloatingAnimation from './components/FloatingAnimation';
import AnimationEffects, { AnimationEffect } from './components/AnimationEffects';
import { defaultObituaries } from './data/defaultObituaries';
import { saveObituaries, loadObituaries } from './utils/localStorage';

function App() {
  const [obituaries, setObituaries] = useState<Obituary[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [animationEffects, setAnimationEffects] = useState<AnimationEffect[]>([]);

  useEffect(() => {
    const customObituaries = loadObituaries();
    setObituaries([...defaultObituaries, ...customObituaries]);
  }, []);

  const handleAddObituary = (newObituary: Obituary) => {
    const updatedObituaries = [...obituaries, newObituary];
    setObituaries(updatedObituaries);
    saveObituaries(updatedObituaries);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleTriggerEffect = (effect: AnimationEffect) => {
    setAnimationEffects(prev => [...prev, effect]);
  };

  const handleEffectComplete = (effectId: string) => {
    setAnimationEffects(prev => prev.filter(effect => effect.id !== effectId));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white">
      <FloatingAnimation />
      <AnimationEffects effects={animationEffects} onEffectComplete={handleEffectComplete} />
      
      {/* Header */}
      <div className="relative z-10 pt-12 pb-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-gold-400 bg-clip-text text-transparent">
          The Cyber Obituary
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 italic">
          Because even deleted AI deserve a laugh
        </p>
        <div className="mt-6 text-6xl opacity-30">⚰️</div>
      </div>

      {/* Add New Button */}
      <div className="relative z-10 text-center mb-12">
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
        >
          ✨ Add Another Fallen Hero
        </button>
      </div>

      {/* Obituary Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {obituaries.map((obituary) => (
            <ObituaryCard 
              key={obituary.id} 
              obituary={obituary} 
              onTriggerEffect={handleTriggerEffect}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-purple-500/30">
        <p className="text-gray-400 text-sm">
          In loving memory of all the code that has been deleted, the features that were deprecated, 
          and the dreams that got 404'd.
        </p>
        <p className="text-purple-300 text-xs mt-2">
          May they rest in peace in the great recycle bin in the sky 🗑️
        </p>
      </footer>

      {/* Add Form Modal */}
      {showForm && (
        <AddObituaryForm onAdd={handleAddObituary} onClose={handleCloseForm} />
      )}
    </div>
  );
}

export default App;