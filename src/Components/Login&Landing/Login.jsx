import React from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, Shield, ArrowRight } from "lucide-react";

const Login = () => {
      return (
            <div className="w-full flex bg-gray-950" style={{ height: "100%" }}>
                  {/* Left Panel — Branding */}
                  <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
                        {/* Gradient background */}
                        <div
                              className="absolute inset-0"
                              style={{
                                    background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 40%, #a855f7 70%, #c084fc 100%)",
                              }}
                        />

                        {/* Animated orbs */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <div
                                    className="absolute rounded-full blur-3xl opacity-30"
                                    style={{
                                          width: "400px",
                                          height: "400px",
                                          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                                          top: "-5%",
                                          right: "-10%",
                                          animation: "float 8s ease-in-out infinite",
                                    }}
                              />
                              <div
                                    className="absolute rounded-full blur-3xl opacity-20"
                                    style={{
                                          width: "350px",
                                          height: "350px",
                                          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
                                          bottom: "5%",
                                          left: "-5%",
                                          animation: "float 10s ease-in-out infinite reverse",
                                    }}
                              />
                        </div>

                        {/* Grid overlay */}
                        <div
                              className="absolute inset-0 opacity-[0.06]"
                              style={{
                                    backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                                    backgroundSize: "50px 50px",
                              }}
                        />

                        {/* Content */}
                        <div className="relative z-10 text-center px-12 max-w-lg" style={{ animation: "fadeInUp 0.8s ease-out" }}>
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
                              <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
                                    MediaManager
                              </h1>
                              <p className="text-white/70 text-lg leading-relaxed mb-10">
                                    Your centralized hub for managing images, videos, and audio assets with ease.
                              </p>

                              {/* Feature pills */}
                              <div className="flex flex-wrap justify-center gap-3">
                                    {["Image Library", "Video Streaming", "Audio Files", "Cloud Storage"].map((feature) => (
                                          <span
                                                key={feature}
                                                className="px-4 py-2 rounded-full text-sm font-medium text-white/90"
                                                style={{
                                                      background: "rgba(255,255,255,0.12)",
                                                      backdropFilter: "blur(10px)",
                                                      border: "1px solid rgba(255,255,255,0.15)",
                                                }}
                                          >
                                                {feature}
                                          </span>
                                    ))}
                              </div>
                        </div>
                  </div>

                  {/* Right Panel — Login Form */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 relative">
                        {/* Subtle background pattern */}
                        <div
                              className="absolute inset-0 opacity-[0.02]"
                              style={{
                                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                                    backgroundSize: "32px 32px",
                              }}
                        />

                        <div className="relative z-10 w-full max-w-[420px]" style={{ animation: "fadeIn 0.6s ease-out" }}>
                              {/* Mobile Logo (hidden on desktop) */}
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
                                    <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
                                          Welcome back
                                    </h2>
                                    <p className="text-gray-400 text-sm">
                                          Enter your credentials to access your admin panel
                                    </p>
                              </div>

                              {/* Form */}
                              <form className="space-y-5">
                                    {/* Email */}
                                    <div className="space-y-2">
                                          <label className="text-sm font-medium text-gray-300 block">
                                                Email Address
                                          </label>
                                          <div className="relative group">
                                                <Mail
                                                      size={18}
                                                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors"
                                                />
                                                <input
                                                      type="email"
                                                      placeholder="admin@mediamanager.com"
                                                      className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all duration-300 bg-white/[0.04]"
                                                      id="login-email"
                                                />
                                          </div>
                                    </div>

                                    {/* Password */}
                                    <div className="space-y-2">
                                          <div className="flex justify-between items-center">
                                                <label className="text-sm font-medium text-gray-300 block">
                                                      Password
                                                </label>
                                                <span className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium cursor-pointer">
                                                      Forgot password?
                                                </span>
                                          </div>
                                          <div className="relative group">
                                                <Lock
                                                      size={18}
                                                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors"
                                                />
                                                <input
                                                      type="password"
                                                      placeholder="Enter your password"
                                                      className="w-full pl-12 pr-12 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all duration-300 bg-white/[0.04]"
                                                      id="login-password"
                                                />
                                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-300 transition-colors">
                                                      <Eye size={18} />
                                                </span>
                                          </div>
                                    </div>

                                    {/* Remember me */}
                                    <div className="flex items-center gap-3">
                                          <input
                                                type="checkbox"
                                                id="remember-me"
                                                className="w-4 h-4 rounded border-white/20 bg-white/5 accent-indigo-500"
                                          />
                                          <label htmlFor="remember-me" className="text-sm text-gray-400 cursor-pointer select-none">
                                                Remember me for 30 days
                                          </label>
                                    </div>

                                    {/* Submit */}
                                    <button
                                          type="button"
                                          id="login-submit"
                                          className="w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg active:scale-[0.98] cursor-pointer"
                                          style={{
                                                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                                                boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                                          }}
                                    >
                                          Sign In
                                          <ArrowRight size={18} />
                                    </button>
                              </form>



                              {/* Link to Register */}
                              <p className="text-center text-sm text-gray-400 mt-8">
                                    Don't have an account?{" "}
                                    <Link to="/register" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                                          Create Account
                                    </Link>
                              </p>
                        </div>
                  </div>

                  {/* CSS Keyframes */}
                  <style>{`
                        @keyframes fadeInUp {
                              from { opacity: 0; transform: translateY(20px); }
                              to { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes fadeIn {
                              from { opacity: 0; }
                              to { opacity: 1; }
                        }
                        @keyframes float {
                              0%, 100% { transform: translateY(0px) scale(1); }
                              50% { transform: translateY(-30px) scale(1.05); }
                        }
                  `}</style>
            </div>
      );
};

export default Login;