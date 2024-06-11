// src/components/UserForm.js
import React, { useState } from 'react';
import './UserForm.css';

function UserForm() {
  const [user, setUser] = useState({ nome: '', email: '', senha: '' });
  const [submitted, setSubmitted] = useState(false); // Estado para controlar a exibição da mensagem

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/pessoa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setSubmitted(true); // Define submitted como true para exibir a mensagem
      setUser({ nome: '', email: '', senha: '' }); // Limpa os campos do formulário
      return response.json();
    })
    .then(data => console.log('Usuário criado:', data))
    .catch(error => console.error('Erro ao criar usuário:', error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="user-form-container">
      <h2>Cadastrar Novo Usuário</h2>
      {submitted && <p>Cadastrado com sucesso!</p>} {/* Exibe a mensagem se submitted for true */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          value={user.nome}
          onChange={handleChange}
          placeholder="Nome"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="senha"
          value={user.senha}
          onChange={handleChange}
          placeholder="Senha"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default UserForm;
