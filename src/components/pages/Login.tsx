// Login for used for providing username and password
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Grid } from "@mui/material";

import { UserNameContext } from "../context/UserNameProvider";

const Login = () => {
  const { setUserName } = useContext(UserNameContext);
  const [validUsername, setValidUsername] = useState<boolean>(false);
  const [validPassword, setValidPassword] = useState<boolean>(false);

  const checkValid = (value: string, type: string) => {
    if (type === "username") {
      setUserName(value);
      value !== "" ? setValidUsername(true) : setValidUsername(false);
    } else if (type === "password") {
      value !== "" ? setValidPassword(true) : setValidPassword(false);
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Grid container>
        <Grid item xs />
        <Grid item xs={6}>
          <div style={{ textAlign: "center" }}>
            <TextField
              label="Username"
              variant="standard"
              onChange={(e) => {
                checkValid(e.target.value, "username");
              }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField
              label="Password"
              variant="standard"
              onChange={(e) => {
                checkValid(e.target.value, "password");
              }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            {(!validUsername || !validPassword) && (
              <Button type="submit" disabled>
                Enter Site
              </Button>
            )}
            {validUsername && validPassword && (
              <Link to="/candidate-react-web-ui/people">
                <Button type="submit">Enter Site</Button>
              </Link>
            )}
          </div>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
};
export default Login;
