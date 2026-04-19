import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ArrowLeft } from "lucide-react";

const Login = () => {
      const navigate = useNavigate();

      const [userEmail, setUserEmail] = useState("");
      const [userPassword, setUserPassword] = useState("");

      const baseUrl = "http://localhost:5000";

      const userLogin = async () => {
            const url = `${baseUrl}/api/auth/login`;

            try {
                  const fetchingApi = await fetch(url, {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                              email: userEmail,
                              password: userPassword,
                        }),
                  });

                  const response = await fetchingApi.json();

                  if (fetchingApi.ok) {
                        localStorage.setItem("token", response.token);
                        toast.success("Login Successfully");
                        navigate("/dashboard");
                  } else {
                        toast.error(response.message || "Login failed");
                  }

            } catch (e) {
                  toast.error(e.message);
            }
      };

      return (
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

                  {/* Background */}
                  <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('/Untitled.png')` }}
                  >
                        <div className="absolute inset-0 bg-black/60" />
                  </div>

                  {/* Card */}
                  <div className="relative z-10 w-full max-w-md mx-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-8">

                        {/* 🔙 Back Button */}
                        <button
                              onClick={() => {
                                    if (window.history.length > 1) {
                                          navigate(-1);
                                    } else {
                                          navigate("/");
                                    }
                              }}
                              className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1.5 
          rounded-lg bg-white/10 text-white hover:bg-white/20 transition text-sm"
                        >
                              <ArrowLeft className="w-4 h-4" />
                              <span className="hidden sm:inline">Back</span>
                        </button>

                        {/* Header */}
                        <div className="mb-6 text-center">
                              <h2 className="text-3xl font-semibold text-white">
                                    Welcome Back 👋
                              </h2>
                              <p className="text-sm text-gray-300 mt-1">
                                    Access your dashboard securely
                              </p>
                        </div>

                        {/* Form */}
                        <form
                              className="space-y-5"
                              onSubmit={(e) => {
                                    e.preventDefault();
                                    userLogin();
                              }}
                        >

                              {/* Email */}
                              <input
                                    type="email"
                                    placeholder="Email"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />

                              {/* Password */}
                              <input
                                    type="password"
                                    placeholder="Password"
                                    value={userPassword}
                                    onChange={(e) => setUserPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />

                              {/* Button */}
                              <button
                                    type="submit"
                                    className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                              >
                                    Login to Dashboard
                              </button>
                        </form>

                        <p className="text-xs text-gray-400 text-center mt-4">
                              Secure admin access only
                        </p>
                  </div>
            </div>
      );
};

export default Login;