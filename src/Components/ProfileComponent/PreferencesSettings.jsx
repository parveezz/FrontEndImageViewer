import React from 'react';

const PreferencesSettings = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-1">Preferences</h2>
          <p className="text-sm text-gray-400 font-medium">Set your dashboard language, timezone, and regional defaults.</p>
        </div>

        <div className="border-t border-gray-50 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">Language</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all font-medium appearance-none cursor-pointer">
                <option>English (US)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">Timezone</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-300 transition-all font-medium appearance-none cursor-pointer">
                <option>(UTC-08:00) Pacific Time</option>
                <option>(UTC+00:00) UTC</option>
                <option>(UTC+05:30) IST</option>
              </select>
            </div>
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

export default PreferencesSettings;
