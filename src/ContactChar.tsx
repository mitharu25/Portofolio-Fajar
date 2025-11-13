import React, { useState, useEffect } from 'react';

const ContactCharacter: React.FC = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Waving animation
  useEffect(() => {
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1000);
    }, 8000);

    return () => clearInterval(waveInterval);
  }, []);

  // Mouse tracking for eyes
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / 20;
    const y = (e.clientY - centerY) / 20;
    setMousePosition({ x: Math.max(-3, Math.min(3, x)), y: Math.max(-3, Math.min(3, y)) });
  };

  return (
    <div 
      className="relative w-64 h-64 cursor-pointer select-none"
      onMouseMove={handleMouseMove}
    >
      {/* Character Body */}
      <div className="relative w-full h-full">
        {/* Main Body */}
        <div className="absolute inset-x-8 top-16 bottom-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          {/* Body Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-transparent rounded-3xl opacity-50"></div>
          
          {/* Chest Panel */}
          <div className="absolute inset-x-4 top-12 h-16 bg-gradient-to-r from-blue-300 to-blue-500 rounded-xl shadow-inner">
            <div className="absolute inset-2 bg-blue-200 rounded-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Head */}
        <div className="absolute inset-x-6 top-4 h-20 bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl shadow-lg border-4 border-blue-500">
          {/* Head Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent rounded-xl opacity-60"></div>
          
          {/* Eyes */}
          <div className="absolute top-4 inset-x-4 flex justify-between">
            <div className="w-6 h-6 bg-white rounded-full shadow-inner flex items-center justify-center">
              <div 
                className={`w-3 h-3 bg-blue-600 rounded-full transition-all duration-100 ${
                  isBlinking ? 'scale-y-0' : 'scale-y-100'
                }`}
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) ${isBlinking ? 'scaleY(0)' : 'scaleY(1)'}`
                }}
              ></div>
            </div>
            <div className="w-6 h-6 bg-white rounded-full shadow-inner flex items-center justify-center">
              <div 
                className={`w-3 h-3 bg-blue-600 rounded-full transition-all duration-100 ${
                  isBlinking ? 'scale-y-0' : 'scale-y-100'
                }`}
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) ${isBlinking ? 'scaleY(0)' : 'scaleY(1)'}`
                }}
              ></div>
            </div>
          </div>

          {/* Mouth */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-3 bg-gray-800 rounded-full"></div>
          </div>

          {/* Antenna */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-6 bg-gray-400 rounded-full"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Left Arm */}
        <div className={`absolute left-2 top-20 w-6 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full shadow-md origin-top transition-transform duration-500 ${
          isWaving ? 'rotate-45' : 'rotate-12'
        }`}>
          {/* Hand */}
          <div className={`absolute -bottom-2 -left-1 w-8 h-8 bg-blue-500 rounded-full shadow-md transition-transform duration-500 ${
            isWaving ? 'rotate-12 scale-110' : ''
          }`}>
            <div className="absolute inset-1 bg-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Right Arm */}
        <div className="absolute right-2 top-20 w-6 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full shadow-md transform -rotate-12">
          {/* Hand */}
          <div className="absolute -bottom-2 -right-1 w-8 h-8 bg-blue-500 rounded-full shadow-md">
            <div className="absolute inset-1 bg-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Legs */}
        <div className="absolute bottom-2 inset-x-10 flex justify-between">
          <div className="w-8 h-12 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full shadow-md">
            <div className="absolute bottom-0 w-10 h-4 bg-gray-600 rounded-full -translate-x-1"></div>
          </div>
          <div className="w-8 h-12 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full shadow-md">
            <div className="absolute bottom-0 w-10 h-4 bg-gray-600 rounded-full -translate-x-1"></div>
          </div>
        </div>

        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 right-4 text-red-400 animate-bounce" style={{ animationDelay: '0s' }}>
            ⭐
          </div>
          <div className="absolute top-12 left-4 text-pink-400 animate-bounce" style={{ animationDelay: '1s' }}>
            ⭐
          </div>
          <div className="absolute bottom-20 right-8 text-yellow-400 animate-bounce" style={{ animationDelay: '2s' }}>
            ⭐
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCharacter;