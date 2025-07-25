import React from 'react';
import CAFE from '../../assets/images/images.jpg';
import { LuTrendingUpDown } from 'react-icons/lu';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black mb-4">Study App</h2>
        {children}
      </div>

      {/* Right Section */}
      <div className="hidden md:block w-[40vw] h-full relative bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center">
        {/* Decorative Blobs */}
        <div className="w-48 h-56 rounded-[40px] bg-purple-400 absolute -top-7 -left-5" />
        <div className="w-48 h-48 rounded-[40px] bg-violet-950 absolute -bottom-7 -left-5" />

        {/* Stats Card */}
        <div className="absolute top-12 left-12 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Study Habits"
            value="430,000"
            color="bg-primary"
          />
        </div>

        {/* Image */}
        <img
          src={CAFE}
          alt="cafe"
          className="w-64 lg:w-[90%] absolute bottom-10 right-10 shadow-2xl rounded-lg"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

// Stats Card Component
const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">{value}</span>
      </div>
    </div>
  );
};
