import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/register.php', { email, password });
            console.log(response.data); // Verifique o que a API está retornando
            alert(response.data.message);
            if (response.data.message === "Usuário cadastrado com sucesso") {
                navigate('/login'); // Redireciona para a página de login
            }
        } catch (error) {
            console.error(error);
            alert('Erro ao cadastrar usuário');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
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
                <div>
                    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
