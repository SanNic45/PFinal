import React from 'react';
import { Link } from 'react-router-dom'; 
import { BsHouseDoor, BsPeople, BsPerson, BsFileText, BsClipboard } from 'react-icons/bs'; 

const NavbarComponent = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h3>Proyecto</h3>
      </div>
      <ul className="list-unstyled components">
        <li>
          <Link to="/">
            <BsHouseDoor />
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <BsClipboard />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/usuarios">
            <BsPeople />
            Usuarios
          </Link>
        </li>
        <li>
          <Link to="/pacientes">
            <BsPerson />
            Pacientes
          </Link>
        </li>
        <li>
          <Link to="/registro-usuarios">
            <BsFileText />
            Registro Usuarios
          </Link>
        </li>
        <li>
          <Link to="/registro-pacientes">
            <BsClipboard />
            Registro Pacientes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
