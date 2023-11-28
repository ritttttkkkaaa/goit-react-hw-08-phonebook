import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavLink to="/">
        PhoneBook
      </NavLink>
      <nav>
        {isLoggedIn && (
          <ul>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navigation;