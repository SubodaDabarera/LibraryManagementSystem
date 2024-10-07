import React, { useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { UserRoles, userRolesArray } from "../lib/enums/UserRoles";
import useAuthHandler from "../hooks/handlers/useAuthHandler";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  //@ts-ignore
  const {user} = useAuth()
  const navigate = useNavigate();
  const { update, deleteUser } = useAuthHandler();

  const [username, setUsername] = useState(user?.username);
  const [name, setName] = useState(user?.name);
  const [role, setRole] = useState(user?.role);
  const [email, setEmail] = useState(user?.email);
  const [editable, setEditable] = useState(false);

  if (!user) {
    return <Typography>Please log in to view your profile.</Typography>;
  }

  const handleRoleChange = (event: SelectChangeEvent) => {
    const roleInput = event.target.value;
    switch (roleInput) {
      case UserRoles.Member:
        setRole(UserRoles.Member);
        return;
      case UserRoles.Librarian:
        setRole(UserRoles.Librarian);
        return;
      case UserRoles.HeadOfLibrary:
        setRole(UserRoles.HeadOfLibrary);
        return;
      default:
        alert("Please enter valid Role!");
    }
  };

  const handleSave = async () => {
    const obj = {
      id: user.id,
      username,
      user,
      email,
      role,
    };

    const updated = await update(obj);
    alert(updated.message);
  };

  const handleDelete = async () => {
    const deleted = await deleteUser(user.id);
    alert(deleted.message);
    if (deleted.isSuccess) {
      navigate("/");
    }
  };

  return (
    <Paper style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Grid container>
        <Grid item>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            disabled={editable}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Full name"
            fullWidth
            margin="normal"
            value={name}
            disabled={editable}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            disabled={editable}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={role}
            label="Age"
            onChange={handleRoleChange}
            disabled={editable}
          >
            {userRolesArray.map((role) => (
              <MenuItem value={role.value}>{role.label}</MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>

      <Button onClick={() => setEditable((prev) => !prev)}>
        {editable ? <>Edit</> : <>Ok</>}
      </Button>
      <Button variant="contained" onClick={handleSave}>
        Save
      </Button>
      <Button variant="contained" color="error" onClick={handleDelete}>
        Delete
      </Button>
    </Paper>
  );
};

export default Profile;
