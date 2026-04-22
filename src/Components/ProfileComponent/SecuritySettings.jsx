import React from 'react';

const SecuritySettings = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-1">Security & Authentication</h2>
          <p className="text-sm text-gray-400 font-medium">Manage your security preferences and account access.</p>
        </div>

        <div className="border-t border-gray-50 pt-4 divide-y divide-gray-50">
          <div className="py-6 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-1">Two-Factor Authentication</h4>
              <p className="text-xs text-gray-400 font-medium">Add an extra layer of security to your account.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
            </label>
          </div>

          <div className="py-6 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-1">Password</h4>
              <p className="text-xs text-gray-400 font-medium">Last changed 3 months ago.</p>
            </div>
            <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">
              Change Password
            </button>
          </div>

          <div className="py-6 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-1">Active Sessions</h4>
              <p className="text-xs text-gray-400 font-medium">Manage the devices that are currently logged in.</p>
            </div>
            <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">
              View Sessions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
