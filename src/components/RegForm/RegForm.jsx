import { useState } from 'react';
import operations from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { RegFormStyles } from './RegFormStyles.styled';

const RegForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      operations.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  const handleChange = ({ target }) => {
    if (isLoginPage) {
      if (target.name === 'email') {
        setEmail(target.value);
      } else if (target.name === 'password') {
        setPassword(target.value);
      }
    } else {
      if (target.name === 'name') {
        setName(target.value);
      } else if (target.name === 'email') {
        setEmail(target.value);
      } else if (target.name === 'password') {
        setPassword(target.value);
      }
    }
  };
  return (
    <>
      <h2
        style={{
          textAlign: 'center',
          marginTop: '80px',
        }}
      >
        Registration page
      </h2>
      <RegFormStyles autoComplete="off" onSubmit={handleSubmit}>
        <div className="label-container">
          <input
            placeholder="Name"
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="label-container">
          <input
            placeholder="Email"
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="label-container">
          <input
            placeholder="Password"
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button
          disabled={
            isLoginPage
              ? !(!!email && password.length >= 7)
              : !(!!name && !!email && password.length >= 7)
          }
          type="submit"
        >
          Registration
        </button>
      </RegFormStyles>
    </>
  );
};

export default RegForm;