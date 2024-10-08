import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navigation from "./components/common/Navigation";
import Dashboard from "./pages/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/common/PrivateRoute";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import PageWrapper from "./components/common/PageWrapper";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Navigation />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route
              path="/:id"
              element={<PrivateRoute component={BookDetails} />}
            />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/profile"
              element={<PrivateRoute component={Profile} />}
            />
          </Routes>
        </PageWrapper>
      </AuthProvider>
    </Router>
  );
};

export default App;
