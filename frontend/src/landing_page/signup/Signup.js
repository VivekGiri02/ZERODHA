import React, { useState } from 'react';
import NavBar from '../Navbar'; // Assuming your Navbar is in ../Navbar
import Footer from '../Footer';   // Assuming your Footer is in ../Footer

// --- Icon Components (or you can use a library like react-icons) ---
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
  </svg>
);
// --- End of Icon Components ---


function SignIn() {
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    // Dynamic styles
    const styles = {
        pageContainer: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#f0f2f5", // A soft grey background
        },
        mainContent: {
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
        },
        signInBox: {
            backgroundColor: "#ffffff",
            padding: "40px 30px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "400px",
            textAlign: "center",
        },
        header: {
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1c1c1e",
            marginBottom: "10px",
        },
        subHeader: {
            fontSize: "16px",
            color: "#8a8a8e",
            marginBottom: "30px",
        },
        inputGroup: {
            position: "relative",
            marginBottom: "20px",
        },
        inputIcon: {
            position: "absolute",
            left: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#c7c7cc",
        },
        inputField: {
            width: "100%",
            padding: "12px 12px 12px 45px", // Left padding for icon
            border: "1px solid #e5e5e5",
            borderRadius: "8px",
            fontSize: "16px",
            outline: "none",
            transition: "border-color 0.3s ease",
        },
        forgotPassword: {
            display: "block",
            fontSize: "14px",
            color: "#007aff",
            textDecoration: "none",
            marginBottom: "20px",
            textAlign: "right",
        },
        signInButton: {
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#007aff",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.1s ease",
            transform: isButtonHovered ? 'scale(1.02)' : 'scale(1)',
        },
        divider: {
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            color: "#8a8a8e",
            margin: "30px 0",
        },
        dividerLine: {
            flex: 1,
            borderBottom: "1px solid #e5e5e5",
        },
        dividerText: {
            padding: "0 10px",
        },
        socialLogin: {
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "30px",
        },
        socialButton: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
            height: "50px",
            border: "1px solid #e5e5e5",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "background-color 0.3s, border-color 0.3s",
        },
        footerText: {
            fontSize: "14px",
            color: "#8a8a8e",
        },
        signUpLink: {
            color: "#007aff",
            fontWeight: "bold",
            textDecoration: "none",
        },
    };

    return (
        <div style={styles.pageContainer}>
            <NavBar />
            <main style={styles.mainContent}>
                <div style={styles.signInBox}>
                    <h2 style={styles.header}>Welcome Back!</h2>
                    <p style={styles.subHeader}>Sign in to continue your journey</p>

                    <form>
                        <div style={styles.inputGroup}>
                            <span style={styles.inputIcon}><UserIcon /></span>
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                style={styles.inputField}
                                onFocus={e => e.target.style.borderColor = '#007aff'}
                                onBlur={e => e.target.style.borderColor = '#e5e5e5'}
                            />
                        </div>

                        <div style={styles.inputGroup}>
                           <span style={styles.inputIcon}><LockIcon /></span>
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                style={styles.inputField}
                                onFocus={e => e.target.style.borderColor = '#007aff'}
                                onBlur={e => e.target.style.borderColor = '#e5e5e5'}
                            />
                        </div>

                        <a href="/forgot-password" style={styles.forgotPassword}>Forgot Password?</a>

                        <button
                            type="submit"
                            style={styles.signInButton}
                            onMouseEnter={() => setIsButtonHovered(true)}
                            onMouseLeave={() => setIsButtonHovered(false)}
                        >
                            Sign In
                        </button>
                    </form>

                    <div style={styles.divider}>
                        <div style={styles.dividerLine}></div>
                        <span style={styles.dividerText}>OR</span>
                        <div style={styles.dividerLine}></div>
                    </div>

                    {/* Placeholder for Social Login Buttons */}
                    <div style={styles.socialLogin}>
                        <div style={styles.socialButton} title="Sign in with Google">G</div>
                        <div style={styles.socialButton} title="Sign in with Facebook">F</div>
                        <div style={styles.socialButton} title="Sign in with Apple">A</div>
                    </div>

                    <p style={styles.footerText}>
                        Don't have an account? <a href="/signup" style={styles.signUpLink}>Sign Up</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default SignIn;