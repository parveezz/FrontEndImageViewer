
import { Link } from "react-router-dom";
import { Mail, Lock, User, Eye, UserPlus, ArrowRight } from "lucide-react";

const Register = () => {
  return (
    <div className="w-full flex bg-gray-950" style={{ height: "100%" }}>
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
              style={{
                background: "linear-gradient(135deg, #a855f7, #6366f1)",
              }}
            >
              <UserPlus size={24} className="text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">MediaManager</h2>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
              Create Account
            </h2>
            <p className="text-gray-400 text-sm">
              Set up your admin profile to get started
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">
                Full Name
              </label>
              <div className="relative group">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors"
                />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-purple-500/50 focus:outline-none transition-all duration-300 bg-white/[0.04]"
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="admin@mediamanager.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-purple-500/50 focus:outline-none transition-all duration-300 bg-white/[0.04]"
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors"
                />

                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full pl-12 pr-10 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 border border-white/10 focus:border-purple-500/50 focus:outline-none transition-all duration-300 bg-white/[0.04]"
                  id="register-password"
                />

                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-300 transition-colors">
                  <Eye size={16} />
                </span>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agree-terms"
                className="w-4 h-4 mt-0.5 rounded border-white/20 bg-white/5 accent-purple-500"
              />
              <label htmlFor="agree-terms" className="text-sm text-gray-400 cursor-pointer select-none leading-snug">
                I agree to the{" "}
                <span className="text-purple-400 hover:text-purple-300 cursor-pointer font-medium">Terms of Service</span>{" "}
                and{" "}
                <span className="text-purple-400 hover:text-purple-300 cursor-pointer font-medium">Privacy Policy</span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="button"
              id="register-submit"
              className="w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg active:scale-[0.98] cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #8b5cf6 50%, #6366f1 100%)",
                boxShadow: "0 4px 20px rgba(168,85,247,0.3)",
              }}
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>



          {/* Link to Login */}
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
        {/* Gradient background — reversed direction from login */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 40%, #6366f1 70%, #818cf8 100%)",
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
              bottom: "-5%",
              left: "-10%",
              animation: "float 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: "350px",
              height: "350px",
              background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
              top: "5%",
              right: "-5%",
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
            <UserPlus size={36} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Join the Team
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Create your admin account and start managing your media library in seconds.
          </p>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Active Admins", value: "24" },
              { label: "Media Assets", value: "12K+" },
              { label: "Storage", value: "2TB" },
              { label: "Uptime", value: "99.9%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl py-4 px-3 text-center"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
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

export default Register;
