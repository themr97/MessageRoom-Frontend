import React from "react";
import './style.css'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
              <h1>Simple Chat Room App</h1>
              <div className="buttons">
              <Button color="primary" variant="contained" component={Link} to="/login">
                  Login
              </Button>
              <Button color="secondary" variant="contained" component={Link} to="/register">
                  Register
                  </Button>
            </div>
      </header>
    </div>
  );
};

export default Home;
