import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [visibleSubMenu, setVisibleSubMenu] = useState(null);

  const handleMouseEnter = (item) => {
    setVisibleSubMenu(item);
  };

  const handleMouseLeave = () => {
    setVisibleSubMenu(null);
  };

  return (
    <header className="app-header">
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">React App</Link>
          </li>
          <li onMouseEnter={() => handleMouseEnter('users')} onMouseLeave={handleMouseLeave}>
            <span>Usuários</span>
            <ul className={`submenu ${visibleSubMenu === 'users' ? 'show' : ''}`}>
              <li><Link to="/main/userform">Cadastrar Novo Usuário</Link></li>
              <li><Link to="/main/users">Consultar Todos</Link></li>
            </ul>
          </li>
          <li onMouseEnter={() => handleMouseEnter('device')} onMouseLeave={handleMouseLeave}>
            <span>Dispositivo</span>
            <ul className={`submenu ${visibleSubMenu === 'device' ? 'show' : ''}`}>
              <li><a href="#">Cadastrar Dispositivo</a></li>
              <li><a href="#">Consultar Dispositivo</a></li>
            </ul>
          </li>
          <li onMouseEnter={() => handleMouseEnter('gateway')} onMouseLeave={handleMouseLeave}>
            <span>Gateway</span>
            <ul className={`submenu ${visibleSubMenu === 'gateway' ? 'show' : ''}`}>
              <li><a href="#">Cadastrar Gateway</a></li>
              <li><a href="#">Consultar Gateway</a></li>
            </ul>
          </li>
          <li onMouseEnter={() => handleMouseEnter('reading')} onMouseLeave={handleMouseLeave}>
            <span>Leitura</span>
            <ul className={`submenu ${visibleSubMenu === 'reading' ? 'show' : ''}`}>
              <li><a href="#">Cadastrar Leitura</a></li>
              <li><a href="#">Consultar Leitura</a></li>
            </ul>
          </li>
          <li onMouseEnter={() => handleMouseEnter('sensor')} onMouseLeave={handleMouseLeave}>
            <span>Sensor</span>
            <ul className={`submenu ${visibleSubMenu === 'sensor' ? 'show' : ''}`}>
              <li><a href="#">Cadastrar Sensor</a></li>
              <li><a href="#">Consultar Sensor</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
