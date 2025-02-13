import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8080/api/login.php",
                { email, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.message) {
                alert(response.data.message);
            } else {
                alert("Login bem-sucedido!");
            }
        } catch (error) {
            console.error("Erro ao logar", error);
            alert("Erro ao fazer login, tente novamente.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ padding: '10px', margin: '10px 0', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ padding: '10px', margin: '10px 0', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
