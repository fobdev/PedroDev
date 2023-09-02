// MUI
import { Fade, Typography, Button, Stack } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";

// React
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Styles
import { style } from "./_style";
import { animations } from "../../utils";

// Images
import heroImage from "../../images/gif/hero1.gif";

interface Props { }
export const Hero: React.FC<Props> = () => {
    const { colorChange, float } = animations();
    useEffect(() => {
        document.title = "PedroDev: Full Stack Developer";
    }, []);

    return (
        <Stack
            direction="row"
            sx={style}
            columnGap="5em"
            justifyContent="center"
            padding="5em 0 5em 0"
        >
            <Stack
                className="left-side"
                alignContent="center"
                justifyContent="center"
                maxWidth="100%"
            >
                <Fade in={true} timeout={{ enter: 2000 }}>
                    <Stack>
                        <Typography variant="h3" fontSize="clamp(2em, 5vw, 2.5em)" fontWeight="500">
                            Hello!
                        </Typography>
                        <Typography variant="h1" fontSize="clamp(5em, 10vw, 6em)" fontWeight="200">
                            I'm <span className={`${colorChange}`}>Pedro.</span>
                        </Typography>
                        <Typography
                            variant="body1"
                            fontSize="clamp(1em, 5vw ,2em)"
                            fontWeight="200"
                            sx={{ span: { textShadow: "rgb(0 0 0) 0px 0px 2px" } }}
                        >
                            I'm a Full-Stack Developer,
                            <br />
                            working with <span>Node.JS and Typescript.</span>
                        </Typography>
                        <Typography
                            variant="body1"
                            fontSize="clamp(1em, 3vw, 1.3em)"
                            fontWeight="200"
                        >
                            I also work with Firebase, Heroku and GCP clouds.
                        </Typography>
                    </Stack>
                </Fade>
                <Fade in={true} timeout={{ enter: 5000 }}>
                    <Stack className="buttons" direction="row" columnGap="4em" marginTop="1.5em">
                        <Button
                            className="hero-button"
                            variant="contained"
                            disableRipple
                            size="large"
                            startIcon={<EmailRoundedIcon />}
                            onClick={() => {
                                window.scrollTo({
                                    top: document.body.scrollHeight,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            Contact
                        </Button>
                        <Link
                            style={{
                                display: "flex",
                                textDecoration: "none",
                            }}
                            className="router-projects"
                            to="/projects/frontend/react"
                        >
                            <Button
                                className="hero-button"
                                variant="contained"
                                disableRipple
                                size="large"
                                startIcon={<ComputerRoundedIcon />}
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Projects
                            </Button>
                        </Link>
                    </Stack>
                </Fade>
            </Stack>
            <Stack className="right-side" justifyContent="center">
                <Fade in={true} timeout={{ enter: 8000 }}>
                    <img className={`${float}`} src={heroImage} alt="Hero Placeholder" />
                </Fade>
            </Stack>
        </Stack>
    );
};
