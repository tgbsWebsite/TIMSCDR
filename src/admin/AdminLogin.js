import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

// API URL configuration with environment variable support
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Backend URL - FIXED to use port 5000
    // const BACKEND_URL = 'http://localhost:5000';

  const handleLogin = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        try {
            const response = await fetch(`${API_URL}/admin/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, password }),
            });
            const data = await response.json();
            if (response.ok && data.token) {
                localStorage.setItem('token', data.token);
                navigate('/admin-timscdr');
            } else {
                setError(data.message || 'Invalid Credentials');
            }
        } catch (err) {
            setError('Cannot connect to backend server. Please ensure Flask server is running on port 5000.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <img 
                    src="/images/logo.png" 
                    alt="TIMSCDR Logo" 
                    className="admin-logo" 
                />
                
                <h2>TIMSCDR ADMIN PANEL</h2>
                
                <input
                    type="text"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
                
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                
                <div className="show-password">
                    <input
                        type="checkbox"
                        id="show-password"
                        checked={showPassword}
                        onChange={(e) => setShowPassword(e.target.checked)}
                    />
                    <label htmlFor="show-password">Show Password</label>
                </div>
                
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
                
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default AdminLogin;