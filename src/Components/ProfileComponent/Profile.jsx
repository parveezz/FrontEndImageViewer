
import ProfileInfo from './ProfileInfo'
import SecuritySettings from './SecuritySettings'
import PreferencesSettings from './PreferencesSettings'

const Profile = () => {
      return (
            <div className="min-h-screen bg-[#5751531c]">
                  <div className="w-full md:p-10">
                        {/* Header Section */}
                        <div className="mb-10">
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Account</p>
                              <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
                              <p className="text-sm text-gray-500 font-medium">
                                    Manage your profile, security, and workspace preferences from one place.
                              </p>
                        </div>

                        <div className="space-y-6">
                              <ProfileInfo />
                              <SecuritySettings />
                              <PreferencesSettings />
                        </div>
                  </div>
            </div>
      )
}

export default Profile

