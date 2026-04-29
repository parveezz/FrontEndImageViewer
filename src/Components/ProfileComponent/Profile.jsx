
import ProfileInfo from './ProfileInfo'
import SecuritySettings from './SecuritySettings'
import PreferencesSettings from './PreferencesSettings'
import { LogOut } from "lucide-react";
import { useState } from 'react';
import LogoutConfirmation from './LogoutConfirmation';

const Profile = () => {
      const [showLogoutModal, setShowLogoutModal] = useState(false);


      return (
            <>
                  <div className="min-h-screen bg-[#5751531c]">
                        <div className="w-full md:p-10">
                              <div className="mb-10 w-full flex flex-row justify-around">
                                    <span className='flex-1'>
                                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                                                Account
                                          </p>

                                          <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                                Settings
                                          </h1>

                                          <p className="text-sm text-gray-500 font-medium">
                                                Manage your profile, security, and workspace preferences from one place.
                                          </p>
                                    </span>

                                    <span className="text-sm text-gray-400">
                                          <button
                                                onClick={() => setShowLogoutModal(true)}
                                                className="group inline-flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-2xl active:scale-95"
                                          >
                                                <LogOut
                                                      size={18}
                                                      className="transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                                Logout
                                          </button>
                                    </span>
                              </div>

                              <div className="space-y-6">
                                    <ProfileInfo />
                                    <SecuritySettings />
                                    <PreferencesSettings />
                              </div>
                        </div>
                  </div>
                  {showLogoutModal && (
                        <LogoutConfirmation setShowLogoutModal={setShowLogoutModal} />
                  )}
            </>
      )
}

export default Profile

