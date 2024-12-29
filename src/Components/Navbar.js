import Logo from "../assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { HiMenu } from "react-icons/hi";
import Box from "@mui/material/Box";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Sobre Nós", icon: <InfoIcon /> },
    { text: "Nosso Trabalho", icon: <HomeWorkIcon /> },
    { text: "Avaliação", icon: <CommentRoundedIcon /> },
    { text: "Contato", icon: <PhoneRoundedIcon /> },
    { text: "Carrinho", icon: <ShoppingCartRoundedIcon /> },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo Donuts" />
      </div>

      <div className="navbar-links-container">
        <a href="#">Home</a>
        <a href="#">Sobre Nós</a>
        <a href="#">Nosso Trabalho</a>
        <a href="#">Avaliação</a>
        <a href="#">Contato</a>
        <a href="#">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Reservas Agora</button>
      </div>

      <div className="nav-bar-menu-container">
        <HiMenu onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
        sx={{ zIndex: 1000 }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
