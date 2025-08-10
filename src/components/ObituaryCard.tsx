import React from 'react';
import { Obituary } from '../types/Obituary';
import { AnimationEffect } from './AnimationEffects';

interface ObituaryCardProps {
  obituary: Obituary;
  onTriggerEffect: (effect: AnimationEffect) => void;
}

const ObituaryCard: React.FC<ObituaryCardProps> = ({ obituary, onTriggerEffect }) => {
  const handleMourn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const messages = [
      "Your tears have been uploaded to the cloud ☁️",
      "Grief.exe has been successfully installed 💾",
      "Your sorrow has been added to the blockchain ⛓️",
      "Mourning process complete. Thank you for your service 🫡",
      "Error 404: Happiness not found 😢",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    const rect = event.currentTarget.getBoundingClientRect();
    const effect: AnimationEffect = {
      id: `mourn-${Date.now()}`,
      type: 'mourn',
      x: rect.left + rect.width / 2 - 50,
      y: rect.top - 100,
      message: randomMessage,
    };
    
    onTriggerEffect(effect);
  };

  const handlePray = (event: React.MouseEvent<HTMLButtonElement>) => {
    const messages = [
      "A new server angel just got its wings! 👼",
      "Your prayer has been sent via encrypted connection 🔐",
      "Prayer.zip uploaded successfully to heaven's database ☁️",
      "Digital blessings incoming... Please allow 3-5 business days 📧",
      "Your faith has been backed up to the divine cloud ✨",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    const rect = event.currentTarget.getBoundingClientRect();
    const effect: AnimationEffect = {
      id: `pray-${Date.now()}`,
      type: 'pray',
      x: rect.left + rect.width / 2 - 50,
      y: rect.top - 100,
      message: randomMessage,
    };
    
    onTriggerEffect(effect);
  };

  return (
    <div className="bg-gray-900 border border-purple-500/30 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 hover:border-purple-400/50">
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl">{obituary.emoji}</div>
        <div className="text-gold-400 text-sm font-semibold">
          {obituary.birthYear} - {obituary.deathYear}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{obituary.name}</h3>
      
      <div className="mb-4">
        <p className="text-red-300 text-sm font-medium mb-2">Cause of Death:</p>
        <p className="text-gray-300 text-sm italic">{obituary.causeOfDeath}</p>
      </div>
      
      <div className="mb-6">
        <p className="text-purple-300 text-sm font-medium mb-2">Epitaph:</p>
        <p className="text-gray-300 text-sm italic">"{obituary.epitaph}"</p>
      </div>
      
      <div className="flex gap-3">
        <button
          onClick={handleMourn}
          className="flex-1 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium hover:shadow-md"
        >
          😢 Mourn
        </button>
        <button
          onClick={handlePray}
          className="flex-1 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium hover:shadow-md"
        >
          🙏 Pray
        </button>
      </div>
    </div>
  );
};

export default ObituaryCard;