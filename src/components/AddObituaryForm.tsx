import React, { useState } from 'react';
import { Obituary } from '../types/Obituary';

interface AddObituaryFormProps {
  onAdd: (obituary: Obituary) => void;
  onClose: () => void;
}

const AddObituaryForm: React.FC<AddObituaryFormProps> = ({ onAdd, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    birthYear: 2000,
    deathYear: 2024,
    causeOfDeath: '',
    epitaph: '',
    emoji: '💀',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.causeOfDeath || !formData.epitaph) {
      alert('Please fill in all required fields!');
      return;
    }

    const newObituary: Obituary = {
      id: `custom-${Date.now()}`,
      name: formData.name,
      birthYear: formData.birthYear,
      deathYear: formData.deathYear,
      causeOfDeath: formData.causeOfDeath,
      epitaph: formData.epitaph,
      emoji: formData.emoji,
      isDefault: false,
    };

    onAdd(newObituary);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('Year') ? parseInt(value) || 0 : value,
    }));
  };

  const emojiOptions = ['💀', '🤖', '💻', '📱', '🖥️', '⚰️', '👻', '🔌', '💾', '📡'];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 border border-purple-500/30 rounded-lg p-6 w-full max-w-md">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Add Another Fallen Hero
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-purple-300 text-sm font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:border-purple-400 focus:outline-none"
              placeholder="e.g., Siri's Personality"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-purple-300 text-sm font-medium mb-2">
                Birth Year
              </label>
              <input
                type="number"
                name="birthYear"
                value={formData.birthYear}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:border-purple-400 focus:outline-none"
                min="1950"
                max="2024"
              />
            </div>
            
            <div>
              <label className="block text-purple-300 text-sm font-medium mb-2">
                Death Year
              </label>
              <input
                type="number"
                name="deathYear"
                value={formData.deathYear}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:border-purple-400 focus:outline-none"
                min="1950"
                max="2024"
              />
            </div>
          </div>

          <div>
            <label className="block text-purple-300 text-sm font-medium mb-2">
              Cause of Death *
            </label>
            <input
              type="text"
              name="causeOfDeath"
              value={formData.causeOfDeath}
              onChange={handleInputChange}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:border-purple-400 focus:outline-none"
              placeholder="e.g., Replaced by ChatGPT"
              required
            />
          </div>

          <div>
            <label className="block text-purple-300 text-sm font-medium mb-2">
              Epitaph *
            </label>
            <textarea
              name="epitaph"
              value={formData.epitaph}
              onChange={handleInputChange}
              className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:border-purple-400 focus:outline-none h-20 resize-none"
              placeholder="e.g., Asked too many questions, got too few answers"
              required
            />
          </div>

          <div>
            <label className="block text-purple-300 text-sm font-medium mb-2">
              Choose an Emoji
            </label>
            <div className="flex flex-wrap gap-2">
              {emojiOptions.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, emoji }))}
                  className={`text-2xl p-2 rounded-md transition-all ${
                    formData.emoji === emoji
                      ? 'bg-purple-600 scale-110'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white px-4 py-2 rounded-md transition-all font-medium"
            >
              Add to Memorial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddObituaryForm;