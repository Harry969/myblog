import React from 'react';

const Profile = () => {
  return (
    <div className="glass-card p-8 max-w-2xl mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-4 text-glow animate-pulse">
        Harry
      </h1>
      
      <p className="text-xl mb-6 text-purple-200 animate-fade-in">
        I share stories about #programming, #design, and #life on the Internet.
      </p>
      
      <p className="text-lg mb-8 text-purple-300 animate-fade-in animation-delay-2000">
        My stories have attracted 80,000+ followers.
      </p>

      <div className="space-y-6">
        <div className="skill-section">
          <h2 className="text-2xl font-semibold mb-3 text-glow">Skills</h2>
          <div className="space-y-4">
            <SkillBar label="前端开发" percentage={90} />
            {/* 添加更多技能条 */}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ label, percentage }: { label: string; percentage: number }) => {
  return (
    <div className="relative">
      <div className="flex justify-between mb-1">
        <span className="text-purple-200">{label}</span>
        <span className="text-purple-300">{percentage}%</span>
      </div>
      <div className="h-2 bg-purple-900/30 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 animate-fill-bar"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Profile; 