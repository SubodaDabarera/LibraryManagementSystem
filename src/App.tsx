import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/common/Navigation';
import Dashboard from './pages/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Profile from './pages/Profile';
import PrivateRoute from './components/common/PrivateRoute';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<PrivateRoute component={Profile} />} />
          {/* <Route path="/books" element={<PrivateRoute component={BookList} />} />
          <Route path="/books/:id" element={<PrivateRoute component={BookDetails} />} /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;