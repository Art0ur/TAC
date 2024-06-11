// src/components/UsersList.js
import React, { useEffect, useState } from 'react';
import './UsersList.css';

function UsersList() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/pessoa')
      .then(response => response.json())
      .then(data => setPessoas(data))
      .catch(error => console.error('Erro ao buscar pessoas:', error));
  }, []);

  return (
    React.createElement('div', { className: 'users-list-container' },
      React.createElement('h2', null, 'Pessoas'),
      React.createElement('ul', null,
        pessoas.map(pessoa =>
          React.createElement('li', { key: pessoa.id },
            React.createElement('span', { className: 'user-name' }, pessoa.nome),
            ' - ',
            React.createElement('span', { className: 'user-email' }, pessoa.email)
          )
        )
      )
    )
  );
}

export default UsersList;
