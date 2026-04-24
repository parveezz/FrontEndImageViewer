import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  LogIn,
  UserPlus,
  Shield,
  ArrowRight,
} from "lucide-react";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form state
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Login:", loginData);
    }, 1500);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Register:", registerData);
    }, 1500);
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
            top: "-10%",
            right: "-5%",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-15"
          style={{
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            bottom: "-10%",
            left: "-5%",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-10"
          style={{
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            top: "40%",
            left: "30%",
            animation: "float 12s ease-in-out infinite",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Card */}
      <div
        className="relative z-10 w-full max-w-[460px] mx-4"
        style={{
          animation: "fadeInUp 0.6s ease-out",
        }}
      >
        {/* Glass card */}
        <div
          className="rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
          }}
        >
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                boxShadow: "0 8px 32px rgba(99,102,241,0.3)",
              }}
            >
              <Shield size={28} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight mb-1">
              MediaManager
            </h1>
            <p className="text-gray-400 text-sm">
              {isRegister
                ? "Create your admin account"
                : "Sign in to your admin panel"}
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="flex bg-white/5 rounded-xl p-1 mb-8 border border-white/5">
            <button
              type="button"
              onClick={() => isRegister && toggleMode()}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
              style={
                !isRegister
                  ? {
                      background:
                        "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      color: "white",
                      boxShadow: "0 4px 15px rgba(99,102,241,0.3)",
                    }
                  : { color: "#9ca3af" }
              }
            >
              <LogIn size={16} />
              Login
            </button>
            <button
              type="button"
              onClick={() => !isRegister && toggleMode()}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
              style={
                isRegister
                  ? {
                      background:
                        "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      color: "white",
                      boxShadow: "0 4px 15px rgba(99,102,241,0.3)",
                    }
                  : { color: "#9ca3af" }
              }
            >
              <UserPlus size={16} />
              Register
            </button>
          </div>

          {/* Login Form */}
          {!isRegister && (
            <form
              onSubmit={handleLoginSubmit}
              className="space-y-5"
              style={{ animation: "fadeIn 0.3s ease-out" }}
            >
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
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                    }}
                    required
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
                  <button
                    type="button"
                    className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative group">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className="w-full pl-12 pr-12 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                    }}
                    required
                    id="login-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500/30 focus:ring-offset-0 accent-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="text-sm text-gray-400 cursor-pointer select-none"
                >
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                id="login-submit"
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                }}
              >
                {isLoading ? (
                  <div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    style={{ animation: "spin 0.8s linear infinite" }}
                  />
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Register Form */}
          {isRegister && (
            <form
              onSubmit={handleRegisterSubmit}
              className="space-y-5"
              style={{ animation: "fadeIn 0.3s ease-out" }}
            >
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">
                  Full Name
                </label>
                <div className="relative group">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={registerData.fullName}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        fullName: e.target.value,
                      })
                    }
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                    }}
                    required
                    id="register-fullname"
                  />
                </div>
              </div>

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
                    value={registerData.email}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        email: e.target.value,
                      })
                    }
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                    }}
                    required
                    id="register-email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">
                  Password
                </label>
                <div className="relative group">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={registerData.password}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        password: e.target.value,
                      })
                    }
                    className="w-full pl-12 pr-12 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                    }}
                    required
                    id="register-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {/* Password strength indicator */}
                {registerData.password && (
                  <div className="flex gap-1.5 pt-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className="h-1 flex-1 rounded-full transition-all duration-300"
                        style={{
                          background:
                            registerData.password.length >= level * 3
                              ? level <= 1
                                ? "#ef4444"
                                : level <= 2
                                ? "#f59e0b"
                                : level <= 3
                                ? "#3b82f6"
                                : "#22c55e"
                              : "rgba(255,255,255,0.1)",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">
                  Confirm Password
                </label>
                <div className="relative group">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors"
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    value={registerData.confirmPassword}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full pl-12 pr-12 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                    }}
                    required
                    id="register-confirm-password"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
                {/* Mismatch warning */}
                {registerData.confirmPassword &&
                  registerData.password !== registerData.confirmPassword && (
                    <p className="text-xs text-red-400 mt-1">
                      Passwords do not match
                    </p>
                  )}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree-terms"
                  className="w-4 h-4 mt-0.5 rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500/30 focus:ring-offset-0 accent-indigo-500"
                  required
                />
                <label
                  htmlFor="agree-terms"
                  className="text-sm text-gray-400 cursor-pointer select-none leading-snug"
                >
                  I agree to the{" "}
                  <span className="text-indigo-400 hover:text-indigo-300 cursor-pointer font-medium">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-indigo-400 hover:text-indigo-300 cursor-pointer font-medium">
                    Privacy Policy
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={
                  isLoading ||
                  (registerData.confirmPassword &&
                    registerData.password !== registerData.confirmPassword)
                }
                id="register-submit"
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                }}
              >
                {isLoading ? (
                  <div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    style={{ animation: "spin 0.8s linear infinite" }}
                  />
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
              or
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social Login */}
          <div className="flex gap-3">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-gray-300 border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300 active:scale-[0.98]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-gray-300 border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300 active:scale-[0.98]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </button>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-xs text-gray-600 mt-6">
          © 2026 MediaManager. Secured with enterprise-grade encryption.
        </p>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Login;