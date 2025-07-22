import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Navbar';
import Footer from '../Footer';
import Login from './login';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            navigate('/');
        }
    }, [navigate]);

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://zerodha-backend-al7p.onrender.com", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password })
            });

            const data = await res.json();
            if (res.ok) {
                alert("Signup successful!");
                localStorage.setItem("user", JSON.stringify({ email }));
                navigate('/');
            } else {
                alert(`Error: ${data.message || "Invalid data"}`);
            }
        } catch (err) {
            alert("Something went wrong!");
        }
    };

    if (showLogin) {
        return <Login />;
    }

    return (
        <div className="d-flex flex-column justify-content-between" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
            <NavBar />
            <main className="d-flex justify-content-center align-items-center p-4" style={{ flex: 1 }}>
                <form onSubmit={handleSignup} className="bg-white p-4 rounded shadow" style={{ maxWidth: "400px", width: "100%" }}>
                    <h2 className="text-center mb-4">Signup</h2>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control mb-3"
                        required
                    />

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

                    <button type="submit" className="btn btn-primary w-100">Signup</button>

                    <p className="text-center mt-3">
                        Already have an account?{" "}
                        <button type="button" className="btn btn-link text-primary p-0" onClick={() => setShowLogin(true)}>
                            Login
                        </button>
                    </p>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default Signup;
