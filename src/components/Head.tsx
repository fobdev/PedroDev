/** MUI Components Imports */
import {
    Container,
    IconButton,
    Typography,
    Grow,
    Box,
    List,
    Slide,
    ListItemButton,
    ListItemIcon,
} from "@mui/material";

/** MUI Icons Imports */
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

/** Styling */
import { mainHeadBox } from "./styles/Head";

export default function Head() {
    return (
        <Box position="sticky" top="0" width="100%" zIndex="999" sx={mainHeadBox}>
            <Container className="main-container" maxWidth={false}>
                <Box className="title-box">
                    <Link
                        className="title-link"
                        to="/"
                        onClick={() => {
                            window.scrollBy({
                                top: -999,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <Grow in={true} timeout={{ enter: 1000 }}>
                            <img src={logo} alt="Website Logo" />
                        </Grow>
                        <Grow in={true} timeout={{ enter: 1000 }}>
                            <Typography className="title">
                                Pedro<span>Dev</span>
                            </Typography>
                        </Grow>
                    </Link>
                </Box>
                <Box className="right-box">
                    <IconButton className="menu">
                        <MenuRoundedIcon />
                    </IconButton>
                    <List className="info-box">
                        <Slide in={true} timeout={{ enter: 500 }}>
                            <Link className="router-home" to="/">
                                <ListItemButton
                                    disableRipple
                                    onClick={() => {
                                        window.scrollBy({
                                            top: -999,
                                            left: 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                >
                                    Home
                                </ListItemButton>
                            </Link>
                        </Slide>
                        <Slide in={true} timeout={{ enter: 1500 }}>
                            <Link className="router-projects" to="/projects">
                                <ListItemButton
                                    disableRipple
                                    onClick={() => {
                                        window.scrollBy({
                                            top: -999,
                                            left: 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                >
                                    Projects
                                </ListItemButton>
                            </Link>
                        </Slide>
                        <Slide in={true} timeout={{ enter: 2000 }}>
                            <Box className="router-contact">
                                <ListItemButton
                                    disableRipple
                                    onClick={() =>
                                        window.scrollTo({
                                            top: 999,
                                            left: 0,
                                            behavior: "smooth",
                                        })
                                    }
                                >
                                    Contact
                                </ListItemButton>
                            </Box>
                        </Slide>
                    </List>
                    <Grow in={true} timeout={{ enter: 1000 }}>
                        <List className="links-box">
                            <ListItemIcon>
                                <a
                                    href="https://wa.me/+5599982207527"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <IconButton className="whatsapp-button">
                                        <WhatsAppIcon />
                                    </IconButton>
                                </a>
                            </ListItemIcon>
                            <ListItemIcon>
                                <a
                                    href="https://www.linkedin.com/in/pedro-henrique-dev1997/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <IconButton className="linkedin-button">
                                        <LinkedInIcon />
                                    </IconButton>
                                </a>
                            </ListItemIcon>
                            <ListItemIcon>
                                <a
                                    href="https://github.com/fobdev"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <IconButton className="github-button">
                                        <GitHubIcon />
                                    </IconButton>
                                </a>
                            </ListItemIcon>
                        </List>
                    </Grow>
                </Box>
            </Container>
        </Box>
    );
}
