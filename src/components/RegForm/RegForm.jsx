import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Notify } from 'notiflix';
import { NavLink } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} welcome!`);
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name ..."
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter email ..."
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name='password'
          placeholder="Enter password ..."
          required
        />
      </label>
      <button type="submit">Register</button>
      <NavLink to="/login">Have acount? LogIn</NavLink>
    </form>
  );
};

export default RegisterForm;