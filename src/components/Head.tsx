/** MUI Components Imports */
import {
    IconButton,
    Typography,
    Grow,
    List,
    Slide,
    ListItemButton,
    ListItemIcon,
    Stack,
} from "@mui/material";

/** MUI Icons Imports */
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../images/logo.svg";

/** React */
import { Link } from "react-router-dom";
import { main_color } from "./styles/_globals";
import { SxProps, Theme } from "@mui/system";

const githubLink = "https://github.com/fobdev";
const whatsappLink = "https://wa.me/+5599982207527";
const linkedinLink = "https://www.linkedin.com/in/pedro-henrique-dev1997/";

export default function Head() {
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

    const styling: SxProps<Theme> = {
        backgroundColor: "rgba(255,255,255,0.70)",
        backdropFilter: "blur(20px)",
        ".link": {
            textDecoration: "none",
            color: "black",
            div: { transition: "all .3s", "&:hover": { color: `${main_color}` } },
        },
        ".title": {
            span: { color: `${main_color}` },
        },
        button: { color: `${main_color}` },
        ".mobile-menu": {
            display: "none",
            color: main_color,
            margin: 1.1,
        },
        "@media (max-width: 560px)": {
            ul: {
                display: "none",
            },
            ".mobile-menu": {
                display: "inherit",
            },
        },
    };

    return (
        <Stack
            sx={styling}
            position="sticky"
            zIndex="1300"
            top="0"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
        >
            <Link className="link" to="/" onClick={handleToTopClick}>
                <Stack direction="row" spacing={0.1} margin={1} sx={{ img: { width: "24px" } }}>
                    <Grow in={true} timeout={{ enter: 1000 }}>
                        <img src={logo} alt="Website Logo" />
                    </Grow>
                    <Grow in={true} timeout={{ enter: 1000 }}>
                        <Typography className="title">
                            Pedro<span>Dev</span>
                        </Typography>
                    </Grow>
                </Stack>
            </Link>
            <IconButton>
                <MenuRoundedIcon className="mobile-menu" />
            </IconButton>
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
                        <Link className="link" to="/projects">
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
                            <a href={whatsappLink} rel="noreferrer" target="_blank">
                                <IconButton className="icon-button">
                                    <WhatsAppIcon />
                                </IconButton>
                            </a>
                        </ListItemIcon>
                        <ListItemIcon>
                            <a href={linkedinLink} rel="noreferrer" target="_blank">
                                <IconButton className="icon-button">
                                    <LinkedInIcon />
                                </IconButton>
                            </a>
                        </ListItemIcon>
                        <ListItemIcon>
                            <a href={githubLink} rel="noreferrer" target="_blank">
                                <IconButton className="icon-button">
                                    <GitHubIcon />
                                </IconButton>
                            </a>
                        </ListItemIcon>
                    </Stack>
                </Grow>
            </List>
        </Stack>
    );
}
