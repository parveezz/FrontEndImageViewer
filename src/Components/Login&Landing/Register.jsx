import React, { useState } from "react";
import { Link } from "react-router-dom";
// Added ArrowLeft to imports
import { Mail, Lock, User, Eye, EyeOff, UserPlus, ArrowRight, ArrowLeft } from "lucide-react";
import { BaseUrl } from "../../BaseUrl";
import { toast } from "sonner";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  const creatingAdmin = async (e) => {
    e.preventDefault();

    const postUrl = `${BaseUrl}/api/auth/register`;

    if (!userName.trim()) {
      return toast.error("Enter your Name");
    }

    if (!userEmail.trim()) {
      return toast.error("Enter your Email");
    }

    if (!/\S+@\S+\.\S+/.test(userEmail.trim())) {
      return toast.error("Enter a valid Email");
    }

    if (!userPassword.trim()) {
      return toast.error("Enter your Password");
    }

    if (userPassword.trim().length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    try {
      const data = await fetch(postUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          password: userPassword,
        }),
      });

      const response = await data.json();

      if (!response.success) {
        return toast.error("Registration Failed");
      }

      toast.success("Registration Successfully Completed");

      setShowPassword(false);
      setUserName("");
      setUserEmail("");
      setUserPassword("");

    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="w-full flex bg-gray-950 min-h-screen relative">

      {/* 1. GO BACK BUTTON — Top Left */}
      <Link
        to="/login"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
      >
        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
          <ArrowLeft size={18} />
        </div>
        <span className="text-sm font-medium">Go Back</span>
      </Link>

      {/* Left Panel — Register Form */}
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
              style={{ background: "linear-gradient(135deg, #a855f7, #6366f1)" }}
            >
              <UserPlus size={24} className="text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">MediaManager</h2>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Create Account</h2>
            <p className="text-gray-400 text-sm">Set up your admin profile to get started</p>
          </div>

          {/* Form */}
          <form className="space-y-5"
            onSubmit={creatingAdmin}
          >
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">Full Name</label>
              <div className="relative group">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-purple-500/50 focus:outline-none transition-all duration-300 bg-white/[0.04]"
                  value={userName}
                  onChange={(e) => { setUserName(e.target.value) }}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">Email Address</label>
              <div className="relative group">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="email"
                  placeholder="admin@mediamanager.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-purple-500/50 focus:outline-none transition-all duration-300 bg-white/[0.04]"
                  value={userEmail}
                  onChange={(e) => { setUserEmail(e.target.value) }}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">Password</label>
              <div className="relative group">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-purple-500/50 focus:outline-none transition-all duration-300 bg-white/[0.04]"
                  value={userPassword}
                  onChange={(e) => { setUserPassword(e.target.value) }}
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg active:scale-[0.98] cursor-pointer mt-4"
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #8b5cf6 50%, #6366f1 100%)",
                boxShadow: "0 4px 20px rgba(168,85,247,0.3)",
              }}
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          {/* 2. LINK TO LOGIN */}
          <p className="text-center text-sm text-gray-400 mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Panel — Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/register.avif')` }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-12 max-w-lg" style={{ animation: "fadeInUp 0.8s ease-out" }}>
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8 shadow-2xl"
            style={{
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <UserPlus size={36} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-md">Join the Team</h1>
          <p className="text-white/90 text-lg leading-relaxed mb-10 drop-shadow-sm">
            Create your admin account and start managing your media library in seconds.
          </p>
          {/* Stat cards remain here... */}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default Register;