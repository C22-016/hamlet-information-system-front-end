import React from 'react';
import './Forbidden.css';
import { NavLink } from 'react-router-dom';

const Forbidden = () => {
  return (
    <div id="app">
      <div>403</div>
      <div class="txt">
        Akses Terlarang<span class="blink">_</span>
        <NavLink to="/dashboard">
          <p className="text-center p-3">Kembali</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Forbidden;
