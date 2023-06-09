// MUI
import {
    IconButton,
    Typography,
    Grow,
    List,
    Slide,
    ListItemButton,
    ListItemIcon,
    Stack,
    // SwipeableDrawer,
    // ListItem,
    // ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../../images/svg/logo.svg";
// import HomeIcon from "@mui/icons-material/Home";
// import EmailIcon from "@mui/icons-material/Email";
// import AccountTreeIcon from "@mui/icons-material/AccountTree";

// Styles
import { style } from "./_style";

// React
import { Link } from "react-router-dom";
import { useState } from "react";

const githubLink = "https://github.com/fobdev";
const linkedinLink = "https://www.linkedin.com/in/pedro-henrique-799755173/";

interface Props {}
export const Header: React.FC<Props> = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuOpen = () => {
        return openMenu ? setOpenMenu(false) : setOpenMenu(true);
    };

    const handleToTopClick = () => {
        return window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleToBottomClick = () => {
        return window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth",
        });
    };

    // const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    //     if (
    //         event &&
    //         event.type === "keydown" &&
    //         ((event as React.KeyboardEvent).key === "Tab" ||
    //             (event as React.KeyboardEvent).key === "Shift")
    //     ) {
    //         return;
    //     }

    //     setOpenMenu(open);
    // };

    return (
        <Stack
            sx={style}
            position="sticky"
            zIndex="1300"
            top="0"
            direction="row"
            alignItems="center"
            justifyContent="space-around"
        >
            <Link className="link" to="/" onClick={handleToTopClick}>
                <Stack direction="row" spacing={0.1} margin={1}>
                    <Grow in={true} timeout={{ enter: 1000 }}>
                        <Typography className="title">
                            <img src={logo} alt="Website Logo" />
                            <Typography className="title-name">
                                Pedro<Typography component="span">Dev</Typography>
                            </Typography>
                        </Typography>
                    </Grow>
                </Stack>
            </Link>
            <IconButton className="mobile-menu" onClick={handleMenuOpen}>
                <MenuRoundedIcon />
            </IconButton>
            {/* <SwipeableDrawer
                anchor="right"
                open={openMenu}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                sx={{ zIndex: "1500" }}
            >
                <List
                    sx={{
                        a: {
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "black",
                        },
                    }}
                >
                    <Link
                        to="/"
                        className="link"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <ListItem
                            button
                            onClick={() => {
                                handleToTopClick();
                                setOpenMenu(false);
                            }}
                        >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link
                        to="/projects/frontend/react"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <ListItem
                            button
                            onClick={() => {
                                setOpenMenu(false);
                                handleToTopClick();
                            }}
                        >
                            <ListItemIcon>
                                <AccountTreeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Projects" />
                        </ListItem>
                    </Link>
                    <Link to="#" style={{ textDecoration: "none", color: "black" }}>
                        <ListItem
                            divider
                            button
                            onClick={() => {
                                handleToBottomClick();
                                setOpenMenu(false);
                            }}
                        >
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact me" />
                        </ListItem>
                    </Link>
                    <ListItemButton>
                        <a href={whatsappLink} rel="noreferrer" target="_blank">
                            <ListItemIcon>
                                <WhatsAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="Whatsapp" />
                        </a>
                    </ListItemButton>
                    <ListItemButton>
                        <a href={linkedinLink} rel="noreferrer" target="_blank">
                            <ListItemIcon>
                                <LinkedInIcon />
                            </ListItemIcon>
                            <ListItemText primary="LinkedIn" />
                        </a>
                    </ListItemButton>
                    <ListItemButton>
                        <a href={githubLink} rel="noreferrer" target="_blank">
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText primary="GitHub" />
                        </a>
                    </ListItemButton>
                </List>
            </SwipeableDrawer> */}
            <List>
                <Stack direction="row" spacing={1}>
                    <Slide in={true} timeout={{ enter: 500 }}>
                        <Link className="link" to="/">
                            <ListItemButton onClick={handleToTopClick} disableRipple>
                                Home
                            </ListItemButton>
                        </Link>
                    </Slide>
                    <Slide in={true} timeout={{ enter: 1000 }}>
                        <Link className="link" to="/projects/frontend/react">
                            <ListItemButton onClick={handleToTopClick} disableRipple>
                                Projects
                            </ListItemButton>
                        </Link>
                    </Slide>
                    <Slide in={true} timeout={{ enter: 1500 }}>
                        <Link className="link" to="#">
                            <ListItemButton onClick={handleToBottomClick} disableRipple>
                                Contact
                            </ListItemButton>
                        </Link>
                    </Slide>
                </Stack>
            </List>
            <List>
                <Grow in={true} timeout={{ enter: 1000 }}>
                    <Stack direction="row">
                        <ListItemIcon>
                            <IconButton href={githubLink} rel="noreferrer" target="_blank">
                                <GitHubIcon />
                            </IconButton>
                        </ListItemIcon>
                    </Stack>
                </Grow>
            </List>
        </Stack>
    );
};
