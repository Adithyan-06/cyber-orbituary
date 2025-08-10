import React from 'react';

const FloatingAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating tears */}
      <div className="animate-float-1 absolute top-20 left-10 text-blue-300 opacity-30">💧</div>
      <div className="animate-float-2 absolute top-32 right-20 text-blue-300 opacity-20">💧</div>
      <div className="animate-float-3 absolute bottom-40 left-1/4 text-blue-300 opacity-25">💧</div>
      <div className="animate-float-1 absolute bottom-60 right-1/3 text-blue-300 opacity-15">💧</div>
      
      {/* Floating digital particles */}
      <div className="animate-float-2 absolute top-1/3 left-1/3 text-purple-300 opacity-20">✨</div>
      <div className="animate-float-3 absolute top-1/2 right-1/4 text-purple-300 opacity-15">⚡</div>
      <div className="animate-float-1 absolute bottom-1/3 right-10 text-purple-300 opacity-25">💫</div>
      <div className="animate-float-2 absolute top-3/4 left-20 text-purple-300 opacity-20">🌟</div>
    </div>
  );
};

export default FloatingAnimation;