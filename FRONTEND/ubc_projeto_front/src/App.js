import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import StudentList from './components/StudentList';
import { Container, Button } from 'react-bootstrap';

const App = () => {
  const { isAuthenticated } = useSelector(state => state.auth);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <Provider store={store}>
      <Router>
        <header style={{ backgroundColor: '#007BFF', color: 'white', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Student Management</h1>
          {isAuthenticated && (
            <Button variant="outline-light" onClick={handleLogout}>
              Sair
            </Button>
          )}
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/login" element={isAuthenticated ? <Navigate to="/students" /> : <Login />} />
              <Route path="/students" element={isAuthenticated ? <StudentList /> : <Navigate to="/login" />} />
            </Routes>
          </Container>
        </main>
        <footer style={{ textAlign: 'center', padding: '10px 0', backgroundColor: '#007BFF', color: 'white', position: 'fixed', width: '100%', bottom: 0 }}>
          <p>&copy; 2023 Student Management. All rights reserved.</p>
        </footer>
      </Router>
    </Provider>
  );
};

export default App;
