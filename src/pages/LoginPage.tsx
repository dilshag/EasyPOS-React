import React, { useState } from "react";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Logging in with", email, password);
        // Handle login logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white p-4">
            <div className="bg-gray-100 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-300">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login to Your Account</h2>
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-gray-600 mt-4 text-center">
                    Don't have an account? <a href="#" className="text-blue-600 hover:underline">Register</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
