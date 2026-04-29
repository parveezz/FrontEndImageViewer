import React from "react";
import { Link } from "react-router-dom";
import { Play, Shield, Database, Menu, Mail, Phone, MapPin } from "lucide-react";

const Landing = () => {
      const currentYear = new Date();
      console.log(currentYear.getFullYear())

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
                                          MediaManager
                                    </h1>
                              </div>

                              <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                                    <a href="#features" className="text-gray-400 hover:text-white transition">Features</a>
                                    <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
                                    <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
                              </nav>

                              <div className="hidden md:flex items-center gap-3">
                                    <Link to="/login" className="px-5 py-2 rounded-xl border border-white/10 text-gray-300 hover:border-indigo-500 hover:text-white transition">
                                          Login
                                    </Link>
                                    <Link to="/register" className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20">
                                          Register
                                    </Link>
                              </div>

                              <button className="md:hidden text-gray-400">
                                    <Menu />
                              </button>
                        </div>
                  </header>

                  {/* Hero Section */}
                  <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                              <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium mb-6">
                                    Modern Media Control Platform
                              </span>
                              <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
                                    Organize, Stream & <span className="text-indigo-500">Manage</span> Your Digital Assets
                              </h2>
                              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                                    MediaManager helps teams handle images, videos, and audio from one secure dashboard with powerful organization tools.
                              </p>
                              <div className="flex flex-wrap gap-4">
                                    <Link to="/register" className="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-gray-200 transition shadow-xl shadow-white/5">
                                          Get Started Free
                                    </Link>
                                    <button className="px-8 py-4 rounded-2xl border border-white/10 flex items-center gap-2 hover:bg-white/5 transition text-white">
                                          <Play size={18} fill="currentColor" /> Watch Demo
                                    </button>
                              </div>
                        </div>

                        <div className="relative">
                              {/* Decorative glow behind the visual */}
                              <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full"></div>
                              <div className="relative rounded-3xl bg-white/5 border border-white/10 p-8 shadow-2xl backdrop-blur-sm">
                                    <div className="bg-gray-900 rounded-2xl p-8 space-y-6 border border-white/5">
                                          <div className="flex items-center justify-between">
                                                <h3 className="font-bold text-xl text-white">Dashboard Overview</h3>
                                                <span className="flex items-center gap-2 text-sm text-green-400 font-medium">
                                                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                                      Active
                                                </span>
                                          </div>
                                          <div className="grid grid-cols-3 gap-4">
                                                <div className="p-4 rounded-2xl bg-white/5 text-center border border-white/5">
                                                      <p className="text-2xl font-bold text-white">1.2K</p>
                                                      <p className="text-sm text-gray-500">Images</p>
                                                </div>
                                                <div className="p-4 rounded-2xl bg-white/5 text-center border border-white/5">
                                                      <p className="text-2xl font-bold text-white">340</p>
                                                      <p className="text-sm text-gray-500">Videos</p>
                                                </div>
                                                <div className="p-4 rounded-2xl bg-white/5 text-center border border-white/5">
                                                      <p className="text-2xl font-bold text-white">890</p>
                                                      <p className="text-sm text-gray-500">Audio</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* Features Section */}
                  <section id="features" className="bg-gray-900/50 py-24 scroll-mt-20 border-y border-white/5">
                        <div className="max-w-7xl mx-auto px-6">
                              <div className="text-center mb-14">
                                    <h3 className="text-4xl font-bold mb-4 text-white">Everything You Need</h3>
                                    <p className="text-gray-400 text-lg">Built for creators, admins, and teams managing digital content.</p>
                              </div>
                              <div className="grid md:grid-cols-3 gap-8">
                                    {[
                                          { icon: Shield, title: "Secure Access", desc: "Advanced authentication and protected admin dashboard.", color: "text-indigo-400" },
                                          { icon: Database, title: "Cloud Storage", desc: "High-speed storage to organize and retrieve your assets.", color: "text-purple-400" },
                                          { icon: Play, title: "Streaming Ready", desc: "Optimized performance for audio and video streaming.", color: "text-pink-400" }
                                    ].map((feature, i) => (
                                          <div key={i} className="bg-gray-950 p-8 rounded-3xl shadow-sm border border-white/5 hover:border-indigo-500/30 transition group">
                                                <feature.icon className={`mb-4 ${feature.color} group-hover:scale-110 transition`} size={32} />
                                                <h4 className="text-2xl font-bold mb-3 text-white">{feature.title}</h4>
                                                <p className="text-gray-400">{feature.desc}</p>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* About Section */}
                  <section id="about" className="py-24 scroll-mt-20">
                        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                              <div className="grid grid-cols-2 gap-4">
                                    <div
                                          className="h-64 rounded-3xl bg-cover bg-center shadow-2xl border border-white/10"
                                          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600')` }}
                                    ></div>
                                    <div
                                          className="h-64 rounded-3xl mt-12 bg-cover bg-center shadow-2xl border border-white/10"
                                          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600')` }}
                                    ></div>
                              </div>
                              <div>
                                    <h3 className="text-4xl font-bold mb-6 text-white">Why MediaManager?</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                          Founded in 2024, we realized that digital assets are often scattered across dozens of platforms. We built a unified home for your creativity.
                                    </p>
                                    <ul className="space-y-4">
                                          {["Centralized Dashboard", "User Role Management", "Real-time Analytics"].map((item, index) => (
                                                <li key={index} className="flex items-center gap-3 font-medium text-gray-300">
                                                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs">✓</div>
                                                      {item}
                                                </li>
                                          ))}
                                    </ul>
                              </div>
                        </div>
                  </section>

                  {/* Contact Section */}
                  <section id="contact" className="bg-gray-900 py-24 scroll-mt-20">
                        <div className="max-w-7xl mx-auto px-6">
                              <div className="grid lg:grid-cols-2 gap-16">
                                    <div>
                                          <h3 className="text-4xl font-bold mb-6 text-white">Let's Talk</h3>
                                          <p className="text-gray-400 mb-8 text-lg">Have questions about our enterprise plans? Our team is here to help you scale.</p>
                                          <div className="space-y-6">
                                                <div className="flex items-center gap-4 text-gray-300">
                                                      <Mail className="text-indigo-400" /> <span>hello@mediamanager.com</span>
                                                </div>
                                                <div className="flex items-center gap-4 text-gray-300">
                                                      <Phone className="text-indigo-400" /> <span>+1 (555) 000-0000</span>
                                                </div>
                                                <div className="flex items-center gap-4 text-gray-300">
                                                      <MapPin className="text-indigo-400" /> <span>San Francisco, CA</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                                          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                                <input type="text" placeholder="Full Name" className="w-full bg-gray-950 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white" />
                                                <input type="email" placeholder="Email Address" className="w-full bg-gray-950 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white" />
                                                <textarea placeholder="Your Message" rows="4" className="w-full bg-gray-950 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white resize-none"></textarea>
                                                <button className="w-full py-4 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-500 transition text-white shadow-lg shadow-indigo-600/20">Send Message</button>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* Footer */}
                  <footer className="py-10 text-center text-gray-600 text-sm border-t border-white/5">
                        © {currentYear.getFullYear()} MediaManager. All rights reserved.
                  </footer>
            </div>
      );
};

export default Landing;