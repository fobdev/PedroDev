import { Fade, Grow, Paper, Typography, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import { mainAboutContainer } from "./styles/About";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import FirebaseIcon from "../images/firebase-icon.svg";
import HerokuIcon from "../images/heroku-icon.svg";

export default function About() {
    return (
        <Paper sx={mainAboutContainer} elevation={0}>
            <div className="papers">
                <Grow in={true} timeout={{ enter: 1000 }}>
                    <Paper className="left-paper" elevation={3}>
                        <Box className="left-box">
                            <CodeIcon className="code-icon" />
                            <Typography className="title-fe" variant="h2">
                                FRONTEND
                            </Typography>
                        </Box>
                    </Paper>
                </Grow>
                <Fade in={true} timeout={{ enter: 2000 }}>
                    <Paper className="middle-floating-boxes">
                        <Box id="title-paper" className="middle-paper">
                            <CloudQueueIcon className="icon" />
                            <Typography className="clouds-title">Cloud Platforms</Typography>
                        </Box>
                        <Zoom in={true} timeout={{ enter: 1000 }}>
                            <Paper elevation={5}>
                                <div className="gcp-paper">
                                    <Paper className="middle-paper" elevation={0}>
                                        <a
                                            href="https://cloud.google.com/"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            <div className="wrapper">
                                                <FilterDramaIcon className="icon" />
                                                <Typography className="clouds-title">
                                                    GCP
                                                </Typography>
                                            </div>
                                        </a>
                                    </Paper>
                                </div>
                            </Paper>
                        </Zoom>
                        <Zoom in={true} timeout={{ enter: 1500 }}>
                            <Paper elevation={5}>
                                <div className="firebase-paper">
                                    <Paper className="middle-paper" elevation={0}>
                                        <a
                                            href="https://firebase.google.com/"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            <div className="wrapper">
                                                <img
                                                    src={FirebaseIcon}
                                                    alt="Firebase Icon"
                                                    style={{ width: "32px" }}
                                                />
                                                <Typography className="clouds-title">
                                                    Firebase
                                                </Typography>
                                            </div>
                                        </a>
                                    </Paper>
                                </div>
                            </Paper>
                        </Zoom>
                        <Zoom in={true} timeout={{ enter: 2000 }}>
                            <Paper elevation={5}>
                                <div className="heroku-paper">
                                    <Paper id="heroku-paper" className="middle-paper" elevation={0}>
                                        <a
                                            href="https://www.heroku.com/"
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            <div className="wrapper">
                                                <img
                                                    src={HerokuIcon}
                                                    alt="Heroku Icon"
                                                    style={{ width: "32px" }}
                                                />
                                                <Typography className="clouds-title">
                                                    Heroku
                                                </Typography>
                                            </div>
                                        </a>
                                    </Paper>
                                </div>
                            </Paper>
                        </Zoom>
                    </Paper>
                </Fade>
                <Grow in={true} timeout={{ enter: 1000 }}>
                    <Paper className="right-paper" elevation={3}>
                        <Box className="right-box">
                            <SettingsIcon className="settings-icon" />
                            <Typography className="title-be" variant="h2">
                                BACKEND
                            </Typography>
                        </Box>
                    </Paper>
                </Grow>
            </div>
        </Paper>
    );
}
