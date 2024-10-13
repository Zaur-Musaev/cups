import {
  AppBar,
  Button,
  ImageList,
  ImageListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { headerBackground, label1, label2 } from "../../utils/constants";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ color: "white", backgroundImage: `url(${headerBackground})` }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <ImageList sx={{ margin: "0px" }}>
            <ImageListItem
              sx={{ height: "50px", width: "50px", margin: "0px" }}
            >
              <div className="logo-container">
                <img src={label1} alt="label1" className="logo logo-1" />
                <img src={label2} alt="label2" className="logo logo-2" />
              </div>
            </ImageListItem>
          </ImageList>
        </Typography>
        <Button sx={{ color: "black" }} component={Link} to="/home">
          Home
        </Button>
        <Button sx={{ color: "black" }} component={Link} to="/about">
          About
        </Button>
        <Button sx={{ color: "black" }} component={Link} to="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
