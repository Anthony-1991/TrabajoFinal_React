import { AppBar, Container, Toolbar } from "@mui/material";
import MenuCategory from "../MenuCategory/MenuCategory";
import { Link } from "react-router-dom";
import "./NavBar.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const styles = {
  linkButton: {
    textDecoration: "none",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  purchaseButton: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
};

const NavBar = () => {
  return (
    <AppBar position="static" className="ResponsiveNavigation">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="ResponsiveNavigationContainer">
          <Link to="/" style={styles.linkButton}>
            Home
          </Link>
          <MenuCategory />
          <Link to="/about" style={styles.linkButton}>
            About
          </Link>
          <Link to="/contact" style={styles.linkButton}>
            Contact
          </Link>
          <Link to="/cart" style={styles.linkButton}>
            <div style={{ display: "flex", alignItems: "center" }}>
              Su Carrito
              <ShoppingCartIcon />
            </div>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
