import React from 'react';

const ProfileInfo = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-1">Profile Information</h2>
          <p className="text-sm text-gray-400 font-medium">Update your photo and personal details here.</p>
        </div>

        <div className="border-t border-gray-50 pt-8">
          {/* Avatar Upload */}
          <div className="flex items-center gap-6 mb-10">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                alt="Sarah Jenkins" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-gray-800">Sarah Jenkins</h3>
              <p className="text-xs text-gray-400 font-bold mb-0">Administrator - Media Operations</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                Change Photo
              </button>
              <button className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors">
                Remove
              </button>
            </div>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">First Name</label>
              <input 
                type="text" 
                defaultValue="Sarah"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all font-medium"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">Last Name</label>
              <input 
                type="text" 
                defaultValue="Jenkins"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-1.5 mb-6">
            <label className="text-xs font-bold text-gray-700">Email Address</label>
            <input 
              type="email" 
              defaultValue="sarah.j@mediaflow.com"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all font-medium"
            />
          </div>

          <div className="space-y-1.5 mb-8">
            <label className="text-xs font-bold text-gray-700">Role</label>
            <input 
              type="text" 
              defaultValue="Administrator"
              readOnly
              className="w-full px-4 py-2.5 rounded-lg border-none bg-blue-50/50 text-blue-600 text-sm font-bold cursor-default"
            />
          </div>

          <div className="flex justify-end">
            <button className="bg-black text-white px-6 py-2.5 rounded-lg text-xs font-bold transition-transform active:scale-95 shadow-md">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
