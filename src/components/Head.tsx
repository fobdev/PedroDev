import { ThemeProvider } from "@emotion/react";
import {
    Button,
    Container,
    createTheme,
    IconButton,
    Typography,
    ClickAwayListener,
    MenuItem,
    MenuList,
    Paper,
    Grow,
    Popper,
    Box,
    Slide,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import logo from "../images/logo.svg";
import us_png from "../images/us.svg";
import br_png from "../images/br.svg";
import discord_svg from "../images/discord.svg";
import { useRef, useState, useEffect } from "react";
export default function Head() {
    const main_color = "#49a6e9";

    const [open, setOpen] = useState(false);
    const [animate, setAnimate] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleErrorPopup = (event: Event | React.SyntheticEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);

        return !animate ? setAnimate(true) : setAnimate(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const theme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 0,
                        color: "black",
                        "&:hover": {
                            color: main_color,
                        },
                    },
                },
            },
        },
    });

    const a_style = {
        color: main_color,
        textDecoration: "none",
    };

    return (
        <Box
            position="sticky"
            top="0"
            width="100%"
            zIndex="999"
            sx={{ backgroundColor: "rgba(255,255,255,0.70)", backdropFilter: "blur(20px)" }}
        >
            <ThemeProvider theme={theme}>
                <nav>
                    <Container
                        maxWidth={false}
                        disableGutters
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                padding: "1em",
                                a: {
                                    display: "flex",
                                    textDecoration: "none",
                                },
                                img: {
                                    width: "24px",
                                },

                                ".title": {
                                    marginLeft: "0.2em",
                                    fontFamily: "Roboto",
                                    userSelect: "none",
                                    color: "black",
                                    fontSize: "1.5em",
                                },
                            }}
                        >
                            <div style={{ display: "flex", width: "10%" }}>
                                <a href="/">
                                    <Grow in={true} timeout={{ enter: 1000 }}>
                                        <img src={logo} alt="Website Logo" />
                                    </Grow>
                                    <Grow in={true} timeout={{ enter: 1000 }}>
                                        <Typography className="title">
                                            Pedro<span style={{ color: main_color }}>Dev</span>
                                        </Typography>
                                    </Grow>
                                </a>
                            </div>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                ".menu": {
                                    display: "none",
                                    marginRight: "1em",
                                    color: main_color,
                                },

                                "@media only screen and (max-width: 780px)": {
                                    ".menu": {
                                        display: "inherit",
                                    },
                                    ".info-box, .links-box": {
                                        display: "none",
                                    },
                                },
                            }}
                        >
                            <IconButton className="menu">
                                <MenuRoundedIcon />
                            </IconButton>
                            <Box
                                className="info-box"
                                component="ul"
                                sx={{
                                    padding: 0,
                                    display: "inherit",
                                    justifyContent: "right",
                                    columnGap: "1em",
                                    listStyle: "none",
                                    alignItems: "center",
                                    margin: 0,
                                    Button: {
                                        padding: 0,
                                    },
                                }}
                            >
                                <li>
                                    <Slide in={true} timeout={{ enter: 500 }}>
                                        <Button 
                                        onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                left: 0,
                                                behavior: "smooth",
                                            })
                                        }}
                                        variant="text" disableRipple>
                                            About Me
                                        </Button>
                                    </Slide>
                                </li>
                                <li>
                                    <Slide in={true} timeout={{ enter: 1000 }}>
                                        <Button variant="text" disableRipple>
                                            Projects
                                        </Button>
                                    </Slide>
                                </li>
                                <li>
                                    <Slide in={true} timeout={{ enter: 1500 }}>
                                        <Button variant="text" disableRipple>
                                            Skills
                                        </Button>
                                    </Slide>
                                </li>
                                <li>
                                    <Slide in={true} timeout={{ enter: 2000 }}>
                                        <Button
                                            onClick={() =>
                                                window.scrollTo({
                                                    top: 999,
                                                    left: 0,
                                                    behavior: "smooth",
                                                })
                                            }
                                            variant="text"
                                            disableRipple
                                        >
                                            Contact
                                        </Button>
                                    </Slide>
                                </li>
                            </Box>
                            <Grow in={true} timeout={{ enter: 1000 }}>
                                <Box
                                    className="links-box"
                                    component="ul"
                                    sx={{
                                        padding: "0 1em 0 2em",
                                        margin: 0,
                                        display: "flex",
                                        listStyle: "none",
                                        li: {
                                            alignSelf: "center",
                                        },

                                        ".translate-button": {
                                            color: main_color,
                                            marginRight: "1em",
                                        },
                                    }}
                                >
                                    <li>
                                        <IconButton
                                            className="translate-button"
                                            ref={anchorRef}
                                            id="composition-button"
                                            onClick={handleToggle}
                                        >
                                            <TranslateIcon />
                                        </IconButton>
                                        <Popper
                                            open={open}
                                            anchorEl={anchorRef.current}
                                            role={undefined}
                                            placement="bottom-start"
                                            transition
                                            disablePortal
                                        >
                                            {({ TransitionProps, placement }) => (
                                                <Grow
                                                    {...TransitionProps}
                                                    style={{
                                                        transformOrigin:
                                                            placement === "bottom-start"
                                                                ? "left top"
                                                                : "left bottom",
                                                    }}
                                                >
                                                    <Paper>
                                                        <ClickAwayListener
                                                            onClickAway={handleErrorPopup}
                                                        >
                                                            <MenuList
                                                                autoFocusItem={open}
                                                                id="composition-menu"
                                                                aria-labelledby="composition-button"
                                                                onKeyDown={handleListKeyDown}
                                                            >
                                                                <MenuItem
                                                                    onClick={handleErrorPopup}
                                                                    sx={{ width: "150px" }}
                                                                >
                                                                    <img
                                                                        src={br_png}
                                                                        alt="Brazil"
                                                                        style={{
                                                                            marginRight: ".5em",
                                                                            width: "20%",
                                                                            position: "relative",
                                                                        }}
                                                                    />
                                                                    Português
                                                                </MenuItem>
                                                                <MenuItem
                                                                    onClick={handleErrorPopup}
                                                                    sx={{ width: "150px" }}
                                                                >
                                                                    <img
                                                                        src={us_png}
                                                                        alt="United States"
                                                                        style={{
                                                                            marginRight: ".5em",
                                                                            width: "20%",
                                                                            position: "relative",
                                                                        }}
                                                                    />
                                                                    English
                                                                </MenuItem>
                                                            </MenuList>
                                                        </ClickAwayListener>
                                                    </Paper>
                                                </Grow>
                                            )}
                                        </Popper>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/bfobenga">
                                            <IconButton sx={a_style}>
                                                <TwitterIcon />
                                            </IconButton>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/pedro-henrique-dev1997/">
                                            <IconButton sx={a_style}>
                                                <LinkedInIcon />
                                            </IconButton>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/fobdev">
                                            <IconButton sx={a_style}>
                                                <GitHubIcon />
                                            </IconButton>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://discordapp.com/users/244270921286811648">
                                            <IconButton sx={a_style}>
                                                <img
                                                    src={discord_svg}
                                                    alt="Discord"
                                                    style={{
                                                        width: "24px",
                                                        height: "24px",
                                                    }}
                                                />
                                            </IconButton>
                                        </a>
                                    </li>
                                </Box>
                            </Grow>
                        </Box>
                    </Container>
                </nav>
            </ThemeProvider>
        </Box>
    );
}
