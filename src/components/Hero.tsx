import { Fade, Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import { useStyles } from "./utils/animations";
import img1 from "../images/hero1.gif";
import "./utils/animations.ts";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import { mainHeroContainer } from "./styles/Hero";
import { Link } from "react-router-dom";
export default function Hero() {
    const { colorChange, float } = useStyles();
    const [animate, setAnimate] = useState(false);

    return (
        <Box sx={mainHeroContainer}>
            <Box className="left-side">
                <Fade in={true} timeout={{ enter: 2000 }}>
                    <Box className="text">
                        <Typography className="hello" variant="h3">
                            Hello!
                        </Typography>
                        <Typography className="pedro" variant="h1">
                            I'm <span className={`${colorChange}`}>Pedro.</span>
                        </Typography>
                        <Typography className="description" variant="body1">
                            I'm a Full-Stack Developer,
                            <br />
                            working with <span>Node.JS and Typescript.</span>
                        </Typography>
                        <Typography className="subtitle" variant="body1">
                            I also work with Firebase, Heroku and GCP clouds.
                        </Typography>
                    </Box>
                </Fade>
                <Fade in={true} timeout={{ enter: 5000 }}>
                    <Box className="buttons">
                        <Button
                            className="btn-contact"
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
                            className="btn-work"
                            variant="contained"
                            disableRipple
                            size="large"
                            startIcon={<ComputerRoundedIcon />}
                            onClick={() => (!animate ? setAnimate(true) : setAnimate(false))}
                        >
                            <Link className="router-projects" to="/projects">
                                Projects
                            </Link>
                        </Button>
                    </Box>
                </Fade>
            </Box>
            <Box className="right-side">
                <Fade in={true} timeout={{ enter: 8000 }}>
                    <img className={`${float}`} src={img1} alt="Hero Placeholder" />
                </Fade>
            </Box>
        </Box>
    );
}
