import { Fade, Typography, Container, Button, Box } from "@mui/material";
import { useState } from "react";
import { useStyles } from "./utils/animations";
import img1 from "../images/hero1.gif";
import "./utils/animations.ts";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import { mainHeroContainer } from "./styles/Hero";
export default function Hero() {
    const { colorChange, float } = useStyles();
    const [animate, setAnimate] = useState(false);

    return (
        <div style={{ backgroundColor: "#eee" }}>
            <Container sx={mainHeroContainer}>
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
                                I'm a Full-Stack Developer,
                                <br />
                                working with <span>Node.JS and Typescript.</span>
                            </Typography>
                            <Typography variant="body1" className="subtitle">
                                I also work with Firebase, Heroku and GCP clouds.
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
