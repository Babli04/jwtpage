import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "./style.css";

export function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://jwt.sulla.hu/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
            if (!response.ok) {
                alert('Hiba történt a bejelentkezés során');
            }
            const data = await response.json();
            localStorage.setItem('token', data.token);
            window.location.href = '/termekek';
        } catch (error) {
            alert('Hiba történt:', error);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container card" style={{
                borderRadius: "8%",
                border: "black solid 1px",
            }}>
                <h1>Jelentkezz be!</h1>
                <div className="form-group">
                    <label htmlFor="username">Felhasználónév:</label>
                    <input type="text" className="form-control" id="username" placeholder="Írd be a felhasználóneved" onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Jelszó:</label>
                    <input type="password" className="form-control" id="password" placeholder="Írd be a jelszavad" onChange={e => setPassword(e.target.value)} />
                </div>
                <br/><br/>
                <button className="btn btn-danger" onClick={handleLogin}>Bejelentkezés!</button>
            </div>
        </div>
    );
}
