import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';




const AuthLinksList = () => {
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    if (pathname === '/register') {
      setCurrentPage('register');
    } else if (pathname === '/login') {
      setCurrentPage('login');
    } else {
      setCurrentPage('');
    }
  }, [pathname]);

  return (
    <ul className="auth-list">
      <li>
        <Link
          to="/register"
          className={`auth-link ${currentPage === 'register' && 'active'}`}
        >
          Registration
        </Link>
      </li>
      <li>
        <Link
          to="/login"
          className={`auth-link ${currentPage === 'login' && 'active'}`}
        >
          Login
        </Link>
      </li>
    </ul>
  );
};

export default AuthLinksList;