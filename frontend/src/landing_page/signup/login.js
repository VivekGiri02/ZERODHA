import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for redirection
import NavBar from '../Navbar';
import Footer from '../Footer';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // THE FIX: Use the correct backend URL and path
            const res = await fetch("http://localhost:3002/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            if (res.ok) {
                alert("Login successful!");
                localStorage.setItem("token", data.token); // This is correct
                // No need to store userId separately, the token has it.
                navigate('/'); // redirect to homepage or dashboard
            } else {
                alert(`Error: ${data.message || "Invalid credentials"}`);
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong! Is the backend server running?");
        }
    };

    return (
        <div className="d-flex flex-column justify-content-between" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
            <NavBar />
            <main className="d-flex justify-content-center align-items-center p-4" style={{ flex: 1 }}>
                <form onSubmit={handleLogin} className="bg-white p-4 rounded shadow" style={{ maxWidth: "400px", width: "100%" }}>
                    <h2 className="text-center mb-4">Login</h2>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control mb-3"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control mb-3"
                        required
                    />

                    <button type="submit" className="btn btn-success w-100">
                        Login
                    </button>

                    <p className="text-center mt-3">
                        Don't have an account? <a href="/signup" className="text-primary">Signup</a>
                    </p>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default Login;