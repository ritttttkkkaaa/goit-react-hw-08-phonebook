import { useAuth } from '../../hooks/useAuth';
import Navigation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';
import LogNav from '../LogNav/LogNav';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <Menu /> : <LogNav />}
    </header>
  );
};

export default AppBar;