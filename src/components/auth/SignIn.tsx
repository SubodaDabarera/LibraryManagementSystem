import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";

import { useNavigate } from "react-router-dom";
import useAuthHandler from "../../hooks/handlers/useAuthHandler";

const SignIn: React.FC = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signIn } = useAuthHandler();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signIn(email, password);
      if (response.isSuccess) {
        navigate("/");
        return;
      }
      alert(response.message);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;
