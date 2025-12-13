import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNavItems, isActivePath } from './routes.jsx';

const Navigation = ({ className = 'nav' }) => {
  const location = useLocation();
  const navItems = getNavItems();

  return (
    <nav className={className}>
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          className={isActivePath(location.pathname, item.path) ? 'active' : ''}
          title={item.label}
        >
          {item.icon && <i className={item.icon}></i>}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;