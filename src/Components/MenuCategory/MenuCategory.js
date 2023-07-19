import * as React from "react";
import { Button, Menu, MenuItem } from "@mui/material";

import "./MenuCategory.css";

import { Link } from "react-router-dom";

const MenuCategory = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
      textDecoration: "none",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "lowercase",
    },
    upperText: {
      textTransform: "uppercase",
    },
    link: {
      color: "black",
      fontSize: 18,
      textDecoration: "none",
    },
  };

  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span style={styles.upperText}>P</span>erifericos Gamer
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className="MenuCategory">
          <Link to="/periferico-category/microfono" style={styles.link}>
            Microfono
          </Link>
        </MenuItem>
        <MenuItem className="MenuCategory">
          <Link to="/periferico-category/camara" style={styles.link}>
            Camara
          </Link>
        </MenuItem>
        <MenuItem className="MenuCategory">
          <Link to="/periferico-category/pad" style={styles.link}>
            Pad-Mouse
          </Link>
        </MenuItem>
        <MenuItem className="MenuCategory">
          <Link to="/periferico-category/mouse" style={styles.link}>
            Mouse
          </Link>
        </MenuItem>
        <MenuItem className="MenuCategory">
          <Link to="/periferico-category/teclado" style={styles.link}>
            Teclado
          </Link>
        </MenuItem>
        <MenuItem className="MenuCategory">
          <Link to="/periferico-category/audifono" style={styles.link}>
            Audifono
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuCategory;
