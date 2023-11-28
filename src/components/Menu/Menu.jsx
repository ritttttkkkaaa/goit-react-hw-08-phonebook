import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

const Menu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <div>
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};

export default Menu;