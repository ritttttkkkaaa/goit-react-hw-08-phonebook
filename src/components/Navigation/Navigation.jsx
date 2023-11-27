import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const isLoggedin = useSelector(getIsLoggedIn);
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    if (pathname === '/') {
      setCurrentPage('home');
    } else if (pathname === '/contacts') {
      setCurrentPage('contacts');
    } else {
      setCurrentPage('');
    }
  }, [pathname]);

  return (
    <ul className="nav-list">
      <li>
        <NavLink
          to="/"
          className={`nav-link ${currentPage === 'home' && 'active'}`}
        >
          Home
        </NavLink>
      </li>
      {isLoggedin && (
        <li>
          <NavLink
            to="/contacts"
            className={`nav-link ${currentPage === 'contacts' && 'active'}`}
          >

            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;