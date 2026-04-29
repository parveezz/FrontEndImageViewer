import React from "react";
import { LogOut, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LogoutConfirmation = ({ setShowLogoutModal }) => {
      const navigate = useNavigate();

      const handleLogout = () => {
            localStorage.removeItem("BearerToken");
            navigate("/", { replace: true });
      };

      return (
            <>
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

                        {/* Modal Box */}
                        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 relative animate-[fadeIn_0.25s_ease-out]">

                              {/* Close Button */}
                              <button
                                    onClick={() => setShowLogoutModal(false)}
                                    className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-black hover:bg-gray-100 transition-all"
                              >
                                    <X size={20} />
                              </button>

                              {/* Icon */}
                              <div className="w-16 h-16 mx-auto rounded-2xl bg-black flex items-center justify-center mb-6 shadow-lg">
                                    <LogOut size={28} className="text-white" />
                              </div>

                              {/* Content */}
                              <div className="text-center">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                          Are you sure?
                                    </h2>

                                    <p className="text-sm text-gray-500 leading-relaxed mb-8">
                                          You are about to log out of your account. You’ll need to sign in
                                          again to access your dashboard.
                                    </p>
                              </div>

                              {/* Actions */}
                              <div className="flex flex-col sm:flex-row gap-3">

                                    <button
                                          onClick={() => setShowLogoutModal(false)}
                                          className="flex-1 py-3 rounded-2xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all duration-300"
                                    >
                                          Cancel
                                    </button>

                                    <button
                                          onClick={handleLogout}
                                          className="flex-1 py-3 rounded-2xl bg-black text-white font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg"
                                    >
                                          Yes, Logout
                                    </button>

                              </div>
                        </div>
                  </div>

                  {/* Animation */}
                  <style>
                        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
                  </style>
            </>
      );
};

export default LogoutConfirmation;