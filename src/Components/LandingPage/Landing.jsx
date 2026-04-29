import React from "react";
import { Link } from "react-router-dom";
import { Play, Shield, Database, Menu, Mail, Phone, MapPin, Users, Settings, Eye } from "lucide-react";

const Landing = () => {
      const currentYear = new Date().getFullYear();

      return (
            <div className="min-h-screen bg-gray-950 text-gray-100 scroll-smooth">
                  {/* Header */}
                  <header className="w-full border-b border-white/5 bg-gray-950/90 backdrop-blur sticky top-0 z-50">
                        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                              <div
                                    className="flex items-center gap-3 cursor-pointer"
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                              >
                                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
                                          M
                                    </div>
                                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                          MediaManager <span className="text-xs uppercase tracking-widest text-indigo-400 ml-2 border border-indigo-400/30 px-2 py-0.5 rounded">Admin</span>
                                    </h1>
                              </div>

                              <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                                    <a href="#features" className="text-gray-400 hover:text-white transition">Features</a>
                                    <a href="#management" className="text-gray-400 hover:text-white transition">Capabilities</a>
                                    <a href="#contact" className="text-gray-400 hover:text-white transition">Support</a>
                              </nav>

                              <div className="hidden md:flex items-center gap-3">
                                    <Link
                                          to="/login"
                                          className="px-5 py-2 rounded-xl border border-indigo-500/50 text-white bg-indigo-500/10 animate-ring-pulse transition-all duration-300 hover:bg-indigo-500 hover:text-white"
                                    >
                                          Admin Login
                                    </Link>
                              </div>
                        </div>
                  </header>

                  {/* Hero Section */}
                  <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                              <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium mb-6">
                                    Complete Administrative Control
                              </span>
                              <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
                                    Master Your <span className="text-indigo-500">Infrastructure</span>
                              </h2>
                              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                                    The ultimate command center for administrators. Manage users, monitor storage, and moderate media assets across your entire organization from one centralized portal.
                              </p>
                              <div className="flex flex-wrap gap-4">
                                    <Link to="/login" className="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-gray-200 transition shadow-xl shadow-white/5">
                                          Enter Admin Portal
                                    </Link>
                              </div>
                        </div>

                        <div className="relative">
                              <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full"></div>
                              <div className="relative rounded-3xl bg-white/5 border border-white/10 p-8 shadow-2xl backdrop-blur-sm">
                                    <div className="bg-gray-900 rounded-2xl p-6 space-y-6 border border-white/5">
                                          <div className="flex items-center justify-between">
                                                <h3 className="font-bold text-lg text-white flex items-center gap-2">
                                                      <Settings size={18} className="text-indigo-400" /> Admin Console
                                                </h3>
                                                <span className="flex items-center gap-2 text-[10px] text-indigo-400 font-bold uppercase tracking-tighter">
                                                      System Status: Optimal
                                                </span>
                                          </div>
                                          <div className="grid grid-cols-2 gap-4">
                                                <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                                                      <p className="text-sm text-gray-500">Total Users</p>
                                                      <p className="text-2xl font-bold text-white">4,281</p>
                                                </div>
                                                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                                                      <p className="text-sm text-gray-500">Storage Used</p>
                                                      <p className="text-2xl font-bold text-white">1.4 TB</p>
                                                </div>
                                          </div>
                                          <div className="space-y-2">
                                                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                                      <div className="h-full bg-indigo-500 w-[65%]"></div>
                                                </div>
                                                <p className="text-[10px] text-gray-500 text-right">Bandwidth usage: 65%</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* Management Breakdown */}
                  <section id="management" className="bg-gray-900/50 py-24 border-y border-white/5">
                        <div className="max-w-7xl mx-auto px-6">
                              <div className="text-center mb-16">
                                    <h3 className="text-4xl font-bold mb-4">Centralized Governance</h3>
                                    <p className="text-gray-400 text-lg">Four core modules to manage every aspect of your digital ecosystem.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                          { title: "User Management", desc: "Control permissions, roles, and account security settings.", icon: Users, color: "from-blue-500/20" },
                                          { title: "Video Libraries", desc: "Oversee massive video archives with automated transcoding.", icon: Play, color: "from-red-500/20" },
                                          { title: "Audio Assets", desc: "Manage high-fidelity audio catalogs and streaming metadata.", icon: Database, color: "from-green-500/20" },
                                          { title: "Image Gallery", desc: "Moderate user uploads and manage global image assets.", icon: Eye, color: "from-orange-500/20" }
                                    ].map((item, i) => (
                                          <div key={i} className={`bg-gradient-to-b ${item.color} to-transparent p-1 rounded-3xl`}>
                                                <div className="bg-gray-950 p-6 rounded-[calc(1.5rem-1px)] h-full border border-white/5">
                                                      <item.icon className="mb-4 text-white" size={24} />
                                                      <h4 className="font-bold text-xl mb-2 text-white">{item.title}</h4>
                                                      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* Admin Specific Features */}
                  <section id="features" className="py-24">
                        <div className="max-w-7xl mx-auto px-6">
                              <div className="grid md:grid-cols-3 gap-12">
                                    <div className="flex flex-col items-center text-center">
                                          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                                                <Shield className="text-indigo-500" size={30} />
                                          </div>
                                          <h4 className="text-xl font-bold mb-3">RBAC Security</h4>
                                          <p className="text-gray-400">Role-Based Access Control ensures users only see what they are authorized to manage.</p>
                                    </div>
                                    <div className="flex flex-col items-center text-center">
                                          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                                                <Database className="text-purple-500" size={30} />
                                          </div>
                                          <h4 className="text-xl font-bold mb-3">Real-time Analytics</h4>
                                          <p className="text-gray-400">Track upload volume, user activity, and system health from a single live dashboard.</p>
                                    </div>
                                    <div className="flex flex-col items-center text-center">
                                          <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6">
                                                <Settings className="text-pink-500" size={30} />
                                          </div>
                                          <h4 className="text-xl font-bold mb-3">Bulk Operations</h4>
                                          <p className="text-gray-400">Perform mass actions on users or media files to keep your library clean and efficient.</p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* Footer */}
                  <footer className="py-12 text-center border-t border-white/5 bg-gray-950">
                        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                              <div className="flex items-center gap-2 font-bold text-white">
                                    <div className="w-6 h-6 rounded-lg bg-indigo-500 flex items-center justify-center text-[10px]">M</div>
                                    MediaManager Admin
                              </div>
                              <p className="text-gray-600 text-sm italic">
                                    Secure Administration Interface — Unauthorized Access Prohibited
                              </p>
                              <p className="text-gray-600 text-sm">
                                    © {currentYear} All rights reserved.
                              </p>
                        </div>
                  </footer>
            </div>
      );
};

export default Landing;