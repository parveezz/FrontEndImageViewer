import React from "react";
import { Link } from "react-router-dom";

import {
      Play,
      Shield,
      Database,
      Users,
      Settings,
      Eye,
      UserPlus,
      LogIn,
      ArrowRight,
      Mail,
      Globe
} from "lucide-react";
const Landing = () => {
      const currentYear = new Date().getFullYear();

      return (
            <div className="min-h-screen bg-gray-950 text-gray-100 scroll-smooth">
                  {/* Header (Kept simple) */}
                  <header className="w-full border-b border-white/5 bg-gray-950/90 backdrop-blur sticky top-0 z-50">
                        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                              {/* Logo Section */}
                              <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
                                          M
                                    </div>
                                    <h1 className="text-2xl font-bold text-white tracking-tight">
                                          MediaManager
                                    </h1>
                              </div>

                              {/* Login Button */}
                              <div className="flex items-center">
                                    <Link
                                          to="/login"
                                          className="px-6 py-2 rounded-xl border border-white/10 text-sm font-semibold text-gray-300 hover:text-white bg-blue-600 hover:bg-white/5 hover:border-white/20 transition-all duration-200 active:scale-95"
                                    >
                                          Sign In
                                    </Link>
                              </div>
                        </div>
                  </header>

                  {/* Hero Section */}
                  <section className="max-w-7xl mx-auto px-6 py-20 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                              <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
                                    Unified <span className="text-indigo-500">Media</span> Governance.
                              </h2>
                              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                                    A high-performance administrative engine designed to manage vast digital asset libraries with precision and scale.
                              </p>
                        </div>

                        {/* Right side visual remains the same as your design */}
                        <div className="relative rounded-3xl bg-white/5 border border-white/10 p-8 shadow-2xl backdrop-blur-sm">
                              <div className="bg-gray-900 rounded-2xl p-6 border border-white/5">
                                    <div className="flex justify-between mb-4">
                                          <span className="text-indigo-400 font-bold text-xs uppercase">System Live</span>
                                          <Settings size={16} className="text-gray-500" />
                                    </div>
                                    <div className="space-y-4">
                                          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-indigo-500 w-[78%]"></div>
                                          </div>
                                          <div className="grid grid-cols-2 gap-4 pt-2">
                                                <div className="text-xl font-bold">12.8k <span className="block text-[10px] text-gray-500 uppercase">Requests</span></div>
                                                <div className="text-xl font-bold">99.9% <span className="block text-[10px] text-gray-500 uppercase">Uptime</span></div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* --- PROACTIVE ACTION SECTION (The "Body" focus) --- */}
                  <section className="max-w-7xl mx-auto px-6 py-12">
                        <div className="grid md:grid-cols-2 gap-8">

                              {/* Option A: Registration (Proactive "Poke") */}
                              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/10 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden">
                                    <div className="relative z-10">
                                          <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
                                                <UserPlus className="text-white" size={24} />
                                          </div>
                                          <h3 className="text-2xl font-bold text-white mb-3">New Administrator?</h3>
                                          <p className="text-gray-400 mb-8 leading-relaxed">
                                                Start your 14-day administrative trial. Gain access to the full suite of management tools and API integrations.
                                          </p>
                                          <Link to="/register" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl transition-all group-hover:translate-x-1">
                                                Create Account <ArrowRight size={18} />
                                          </Link>
                                    </div>
                                    {/* Background Blur Effect */}
                                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
                              </div>

                              {/* Option B: Login */}
                              <div className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                                          <LogIn className="text-gray-300" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Existing Admin</h3>
                                    <p className="text-gray-400 mb-8 leading-relaxed">
                                          Welcome back. Access your workspace to monitor system logs, manage user permissions, and review pending assets.
                                    </p>
                                    <Link to="/login" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-bold rounded-xl transition-all">
                                          Sign In to Portal
                                    </Link>
                              </div>

                        </div>
                  </section>

                  {/* Management Breakdown (Visual Cards) */}
                  <section id="management" className="py-24">
                        <div className="max-w-7xl mx-auto px-6">
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                          { title: "Users", desc: "Global role management.", icon: Users, color: "from-blue-500/20" },
                                          { title: "Video", desc: "Automated transcoding.", icon: Play, color: "from-red-500/20" },
                                          { title: "Audio", desc: "Streaming metadata.", icon: Database, color: "from-green-500/20" },
                                          { title: "Images", desc: "Asset moderation.", icon: Eye, color: "from-orange-500/20" }
                                    ].map((item, i) => (
                                          <div key={i} className={`bg-gradient-to-b ${item.color} to-transparent p-[1px] rounded-3xl`}>
                                                <div className="bg-gray-950 p-6 rounded-[calc(1.5rem-1px)] h-full border border-white/5">
                                                      <item.icon className="mb-4 text-white/70" size={20} />
                                                      <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                                                      <p className="text-xs text-gray-500">{item.desc}</p>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* Footer */}
                  <footer className="bg-gray-950 border-t border-white/5 pt-16 pb-8">
                        <div className="max-w-7xl mx-auto px-6">
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                                    {/* Brand Column */}
                                    <div className="col-span-1 md:col-span-1">
                                          <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">M</div>
                                                <span className="text-xl font-bold text-white tracking-tight">MediaManager</span>
                                          </div>
                                          <p className="text-gray-500 text-sm leading-relaxed">
                                                Advanced media governance for enterprise-scale infrastructure. Secure, scalable, and centralized.
                                          </p>
                                    </div>

                                    {/* Quick Links */}
                                    <div>
                                          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
                                          <ul className="space-y-2 text-sm text-gray-500">
                                                <li><a href="#features" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
                                                <li><a href="#management" className="hover:text-indigo-400 transition-colors">API Reference</a></li>
                                                <li><Link to="/login" className="hover:text-indigo-400 transition-colors">Admin Portal</Link></li>
                                          </ul>
                                    </div>

                                    {/* Support */}
                                    <div>
                                          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
                                          <ul className="space-y-2 text-sm text-gray-500">
                                                <li className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer">
                                                      <Mail size={14} /> support@mediamanager.io
                                                </li>
                                                <li className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer">
                                                      <Shield size={14} /> Security Whitepaper
                                                </li>
                                          </ul>
                                    </div>

                                    {/* System Status (The "Pro" Touch) */}
                                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                                          <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-medium text-gray-400 uppercase">System Status</span>
                                                <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                                          </div>
                                          <div className="text-lg font-bold text-white">All Systems Operational</div>
                                          <p className="text-[10px] text-gray-600 mt-1 uppercase tracking-tighter">Last Checked: Just Now</p>
                                    </div>
                              </div>

                              {/* Bottom Bar */}
                              <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                                    <div className="flex items-center gap-6 text-xs text-gray-600">
                                          <p>© {currentYear} MediaManager — Enterprise Administration</p>
                                          <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                                          <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                                    </div>

                                    {/* Socials / Github */}
                                    <div className="flex items-center gap-4 text-gray-500">
                                          <div className="p-2 rounded-lg hover:bg-white/5 hover:text-white transition-all cursor-pointer border border-transparent hover:border-white/10">
                                                <Settings size={18} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </footer>
            </div>
      );
};

export default Landing;