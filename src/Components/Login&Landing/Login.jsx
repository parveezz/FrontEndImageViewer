import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, Shield, ArrowRight } from "lucide-react";
import { BaseUrl } from "../../BaseUrl";
import toast from "react-hot-toast";

const Login = () => {
      const [userEmail, setUserEmail] = useState("");
      const [userPassword, setUserPassword] = useState("");
      const [checkBox, setCheckBox] = useState(false);

      const navigate = useNavigate();

      const fetchingApi = async (e) => {
            e.preventDefault();

            console.log("Login function triggered");

            // Validation
            if (!userEmail.trim()) {
                  toast.error("Enter Valid Email");
                  return;
            }

            if (!userPassword.trim()) {
                  toast.error("Enter Valid Password");
                  return;
            }

            if (!checkBox) {
                  toast.error("Please tick in the CheckBox");
                  return;
            }

            const url = `${BaseUrl}/api/auth/login`;

            try {
                  const fetching = await fetch(url, {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                              email: userEmail,
                              password: userPassword,
                        }),
                  });

                  const response = await fetching.json();

                  console.log("API Response:", response);

                  // If login failed
                  if (!fetching.ok || !response.success) {
                        toast.error(response.message || "Login Failed");
                        return;
                  }

                  // Store token
                  localStorage.setItem("BearerToken", response.token);

                  // Optional user data
                  if (response.user) {
                        localStorage.setItem("UserData", JSON.stringify(response.user));
                  }

                  toast.success("Login Successfully");

                  // Redirect to admin dashboard
                  navigate("/dashboard");
            } catch (error) {
                  console.error("Login Error:", error);
                  toast.error(error.message || "Something went wrong");
            }
      };

      return (
            <div className="w-full flex bg-gray-950 min-h-screen">
                  {/* Left Panel */}
                  <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
                        <div
                              className="absolute inset-0"
                              style={{
                                    backgroundImage:
                                          "url('/public/login.jpg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                              }}
                        />

                        <div className="relative z-10 text-center px-12 max-w-lg">
                              <div
                                    className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8 shadow-2xl"
                                    style={{
                                          background: "rgba(255,255,255,0.15)",
                                          backdropFilter: "blur(20px)",
                                          border: "1px solid rgba(255,255,255,0.2)",
                                    }}
                              >
                                    <Shield size={36} className="text-white" />
                              </div>

                              <h1 className="text-4xl font-bold text-white mb-4">
                                    MediaManager
                              </h1>

                              <p className="text-white/70 text-lg leading-relaxed">
                                    Your centralized hub for managing images, videos, and audio assets
                                    with ease.
                              </p>
                        </div>
                  </div>

                  {/* Right Panel */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
                        <div className="w-full max-w-[420px]">
                              {/* Mobile Logo */}
                              <div className="lg:hidden text-center mb-8">
                                    <div
                                          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 shadow-lg"
                                          style={{
                                                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                                          }}
                                    >
                                          <Shield size={24} className="text-white" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white">MediaManager</h2>
                              </div>

                              {/* Header */}
                              <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-white mb-2">
                                          Welcome back
                                    </h2>
                                    <p className="text-gray-400 text-sm">
                                          Enter your credentials to access your admin panel
                                    </p>
                              </div>

                              {/* Form */}
                              <form className="space-y-5" onSubmit={fetchingApi}
                              >
                                    {/* Email */}
                                    <div className="space-y-2">
                                          <label className="text-sm font-medium text-gray-300 block">
                                                Email Address
                                          </label>

                                          <div className="relative group">
                                                <Mail
                                                      size={18}
                                                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                                />

                                                <input
                                                      type="email"
                                                      placeholder="admin@mediamanager.com"
                                                      className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-indigo-500/50 focus:outline-none bg-white/[0.04]"
                                                      id="login-email"
                                                      value={userEmail}
                                                      onChange={(e) => setUserEmail(e.target.value)}
                                                />
                                          </div>
                                    </div>

                                    {/* Password */}
                                    <div className="space-y-2">
                                          <div className="flex justify-between items-center">
                                                <label className="text-sm font-medium text-gray-300 block">
                                                      Password
                                                </label>

                                                <span className="text-xs text-indigo-400 cursor-pointer">
                                                      Forgot password?
                                                </span>
                                          </div>

                                          <div className="relative group">
                                                <Lock
                                                      size={18}
                                                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                                />

                                                <input
                                                      type="password"
                                                      placeholder="Enter your password"
                                                      className="w-full pl-12 pr-12 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-indigo-500/50 focus:outline-none bg-white/[0.04]"
                                                      id="login-password"
                                                      value={userPassword}
                                                      onChange={(e) => setUserPassword(e.target.value)}
                                                />

                                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                                                      <Eye size={18} />
                                                </span>
                                          </div>
                                    </div>

                                    {/* Remember me */}
                                    <div className="flex items-center gap-3">
                                          <input
                                                type="checkbox"
                                                id="remember-me"
                                                checked={checkBox}
                                                className="w-4 h-4 rounded border-white/20 bg-white/5 accent-indigo-500"
                                                onChange={(e) => setCheckBox(e.target.checked)}
                                          />

                                          <label
                                                htmlFor="remember-me"
                                                className="text-sm text-gray-400 cursor-pointer"
                                          >
                                                Remember me for 30 days
                                          </label>
                                    </div>

                                    {/* Submit */}
                                    <button
                                          type="submit"
                                          id="login-submit"
                                          className="w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg active:scale-[0.98]"
                                          style={{
                                                background:
                                                      "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                                                boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                                          }}
                                    >
                                          Sign In
                                          <ArrowRight size={18} />
                                    </button>
                              </form>

                              {/* Register */}
                              <p className="text-center text-sm text-gray-400 mt-8">
                                    Don't have an account?{" "}
                                    <Link
                                          to="/register"
                                          className="text-indigo-400 hover:text-indigo-300 font-semibold"
                                    >
                                          Create Account
                                    </Link>
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default Login;