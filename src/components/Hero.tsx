import { Fade, Typography, Container, Button, Box } from "@mui/material";
import { useState } from "react";
import { useStyles } from "./utils/animations";
import img1 from "../images/hero1.gif";
import "./utils/animations.ts";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
export default function Hero() {
    const main_color = "#49a6e9";
    const { colorChange, float } = useStyles();
    const [animate, setAnimate] = useState(false);

    return (
        <div style={{ backgroundColor: "#eee" }}>
            <Container
                sx={{
                    display: "flex",
                    height: "100vh",
                    justifyContent: "space-between",
                    paddingBottom: "10vh",
                    alignItems: "center",

                    "@media only screen and (max-height: 580px)": {
                        ".hello-text": {
                            fontSize: "2em",
                        },
                        ".the-big-name": {
                            fontSize: "3em",
                        },
                    },
                    ".the-big-name, .description, .subtitle, .hello-text": {
                        fontFamily: "Roboto",
                        fontWeight: "200",
                        textAlign: "left",
                    },

                    ".hello-text": {
                        fontWeight: "bold",
                    },

                    ".description": {
                        fontSize: "2em",

                        span: {
                            textShadow: "0px 0px 2px #000",
                        },
                    },

                    ".subtitle": {
                        fontSize: "1.2em",
                    },

                    ".buttons-box": {
                        display: "flex",
                        marginTop: "3em",
                        justifyContent: "left",
                        columnGap: "5em",

                        ".work-button, .contact-button": {
                            padding: "1em 4em",
                            borderRadius: "5em",
                            backgroundColor: "white",
                            color: main_color,
                        },
                    },
                    ".box-image": {
                        img: {
                            width: "500px",
                            borderRadius: "5em",
                        },
                    },
                    "@media only screen and (max-width: 780px)": {
                        height: "100vh",

                        ".box-image": {
                            display: "none",
                        },

                        ".hello-text, .the-big-name, .description, .subtitle": {
                            textAlign: "center",
                        },

                        ".buttons-box": {
                            display: "flex",
                            flexDirection: "column",
                            rowGap: "1em",
                            marginTop: "3em",
                            alignItems: "center",

                            ".work-button, .contact-button": {
                                width: "15rem",
                                borderRadius: "5em",
                            },
                        },
                    },
                }}
            >
                <Box>
                    <Fade in={true} timeout={{ enter: 2000 }}>
                        <Box>
                            <Typography className="hello-text" variant="h3">
                                Hello!
                            </Typography>
                            <Typography className="the-big-name" variant="h1">
                                I'm <span className={`${colorChange}`}>Pedro.</span>
                            </Typography>
                            <Typography className="description" variant="body1">
                                I'm a MERN Stack developer
                                <br />
                                working with <span>Node.JS and Typescript.</span>
                            </Typography>
                            <Typography variant="body1" className="subtitle">
                                I also work with Postgres, Heroku and GCP.
                            </Typography>
                        </Box>
                    </Fade>
                    <Fade in={true} timeout={{ enter: 5000 }}>
                        <Box className="buttons-box">
                            <Button
                                className="contact-button"
                                variant="contained"
                                disableRipple
                                size="large"
                                startIcon={<EmailRoundedIcon />}
                                onClick={() => {
                                    window.scrollBy({
                                        top: 9999,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                    // window.scrollTo({
                                    //     top: 9999,
                                    //     left: 0,
                                    //     behavior: "smooth",
                                    // })
                                }}
                            >
                                Contact
                            </Button>
                            <Button
                                className="work-button"
                                variant="contained"
                                disableRipple
                                startIcon={<ComputerRoundedIcon />}
                                size="large"
                                onClick={() => (!animate ? setAnimate(true) : setAnimate(false))}
                            >
                                My Work
                            </Button>
                        </Box>
                    </Fade>
                </Box>
                <Box className="box-image">
                    <Fade in={true} timeout={{ enter: 8000 }}>
                        <img className={`${float}`} src={img1} alt="Hero Placeholder" />
                    </Fade>
                </Box>
            </Container>
        </div>
    );
}
