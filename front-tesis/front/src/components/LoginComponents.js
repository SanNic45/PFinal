import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import logo from '../assets/logo.png';
import MessageComponent from './MessageComponent';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/usuarios/login', {
        username,
        password,
      });

      setMessage({ type: 'success', message: response.data.message });



    } catch (error) {
      setMessage({ type: 'danger', message: error.response ? error.response.data.message : error.message });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src={logo}
                  alt="Imagen de inicio de sesión"
                  className="img-fluid"
                  style={{ maxWidth: '150px', borderRadius: '0' }}
                />
              </div>
              <h2 className="card-title text-center">Iniciar Sesión</h2>

              <MessageComponent message={message?.message} type={message?.type} />

              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Nombre de Usuario:
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña:
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-grid">
                <button type="button" className="btn btn-primary" onClick={handleLogin}>
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
