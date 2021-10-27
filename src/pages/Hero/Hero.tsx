// MUI
import { Fade, Typography, Button, Box } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";

// React
import { Link } from "react-router-dom";

// Styles
import { style } from "./_style";
import { animations } from "../../utils";

// Images
import heroImage from "../../images/other/hero1.gif";

interface Props {}
export const Hero: React.FC<Props> = () => {
    const { colorChange, float } = animations();

    return (
        <Box sx={style}>
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
                                window.scrollTo({
                                    top: document.body.scrollHeight,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            Contact
                        </Button>
                        <Link
                            style={{ textDecoration: "none" }}
                            className="router-projects"
                            to="/projects/frontend/react"
                        >
                            <Button
                                className="btn-work"
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
                    </Box>
                </Fade>
            </Box>
            <Box className="right-side">
                <Fade in={true} timeout={{ enter: 8000 }}>
                    <img className={`${float}`} src={heroImage} alt="Hero Placeholder" />
                </Fade>
            </Box>
        </Box>
    );
};
