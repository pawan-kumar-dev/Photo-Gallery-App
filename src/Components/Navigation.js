import React,{memo} from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink className="links" to="/mountain">Mountain</NavLink></li>
        <li><NavLink className="links" to="/beach">Beaches</NavLink></li>
        <li><NavLink className="links" to="/bird">Birds</NavLink></li>
        <li><NavLink className="links" to="/food">Food</NavLink></li>
      </ul>
    </nav>
  );
}

export default memo(Navigation);
