import React, { useState } from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password })
            });

            const data = await res.json();
            if (res.ok) {
                alert("Signup successful!");
                setUsername('');
                setEmail('');
                setPassword('');
            } else {
                alert(`Error: ${data.error || "Signup failed"}`);
            }
        } catch (error) {
            alert("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

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

                    <button type="submit" className="btn btn-success w-100" disabled={loading}>
                        {loading ? "Signing up..." : "Signup"}
                    </button>

                    <p className="text-center mt-3">
                        Already have an account? <a href="/login" className="text-primary">Login</a>
                    </p>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default Signup;