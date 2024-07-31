import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { Form, Button, FloatingLabel, Alert } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/students');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="mt-5" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 className="text-center mb-4">Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FloatingLabel>

        <Button variant="primary" type="submit" disabled={loading} className="w-100">
          {loading ? 'Loading…' : 'Login'}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
