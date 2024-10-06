import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import useAuthHandler from "../../hooks/handlers/useAuthHandler";
import { UserRoles, userRolesArray } from "../../lib/enums/UserRoles";

// const userRolesArray = [
//   UserRoles.HeadOfLibrary, UserRoles.Librarian, UserRoles.Member
// ]

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState(UserRoles.Member);
  const { signUp } = useAuthHandler();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userObj = {
        username,
        email,
        password,
        name,
        role,
      };
      const created = await signUp(userObj);
      if (created.isSuccess) {
        navigate("/");
        return;
      }
      alert(created.message);
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };

  const handleRoleChange = (event: SelectChangeEvent) => {
    const roleInput = event.target.value
    switch (roleInput){
      case UserRoles.Member:
        setRole(UserRoles.Member)
        return
      case UserRoles.Librarian:
        setRole(UserRoles.Librarian)
        return
      case UserRoles.HeadOfLibrary:
        setRole(UserRoles.HeadOfLibrary)
        return
      default:
        alert("Please enter valid Role!")
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="FullName"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={role}
          label="Age"
          onChange={handleRoleChange}
        >
          {userRolesArray.map((role) => (
            <MenuItem value={role.value}>{role.label}</MenuItem>
          ))}
        </Select>
        <TextField
          label="Email"
          type="email"
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
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;
