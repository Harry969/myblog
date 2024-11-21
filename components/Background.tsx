import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* 主背景 */}
      <div className="absolute inset-0 gradient-animation" />
      
      {/* 网格背景 */}
      <div className="absolute inset-0 grid-background opacity-20" />
      
      {/* 动态光点效果 */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.2,
              backgroundColor: 'rgba(124, 58, 237, 0.5)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background; 