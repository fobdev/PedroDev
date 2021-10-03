import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { mainAboutContainer } from "./styles/About";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { useStyles } from "./utils/animations";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import FirebaseIcon from "../images/firebase-icon.svg";
import HerokuIcon from "../images/heroku-icon.svg";

export default function About() {
    const { float_alt } = useStyles();

    return (
        <Paper sx={mainAboutContainer} elevation={5}>
            <Typography className="title" variant="h2">
                Stacks and Technologies
            </Typography>
            <div className="papers">
                <Paper className="left-paper" elevation={3}>
                    <Box className="left-box">
                        <CodeIcon className="code-icon" />
                        <Typography className="title-fe" variant="h2">
                            Front-end
                        </Typography>
                    </Box>
                    <ul>
                        <li>Hello World</li>
                        <li>Hello World</li>
                        <li>Hello World</li>
                    </ul>
                </Paper>
                <Box className="middle-floating-boxes">
                    <Box className={`${float_alt}`}>
                        <Paper
                            id="title-paper"
                            className="middle-paper"
                            elevation={0}
                            sx={{ position: "sticky", bottom: "0" }}
                        >
                            <CloudQueueIcon className="icon" />
                            <Typography className="clouds-title">Cloud Platforms</Typography>
                        </Paper>
                    </Box>
                    <Box className={`${float_alt}`}>
                        <div className="gcp-paper">
                            <Paper className="middle-paper" elevation={0}>
                                <a
                                    href="https://cloud.google.com/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <div className="wrapper">
                                        <FilterDramaIcon className="icon" />
                                        <Typography className="clouds-title">GCP</Typography>
                                    </div>
                                </a>
                            </Paper>
                        </div>
                    </Box>
                    <Box className={`${float_alt}`}>
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
                                        <Typography className="clouds-title">Firebase</Typography>
                                    </div>
                                </a>
                            </Paper>
                        </div>
                    </Box>
                    <Box className={`${float_alt}`}>
                        <div className="heroku-paper">
                            <Paper id="heroku-paper" className="middle-paper" elevation={0}>
                                <a href="https://www.heroku.com/" rel="noreferrer" target="_blank">
                                    <div className="wrapper">
                                        <img
                                            src={HerokuIcon}
                                            alt="Heroku Icon"
                                            style={{ width: "32px" }}
                                        />
                                        <Typography className="clouds-title">Heroku</Typography>
                                    </div>
                                </a>
                            </Paper>
                        </div>
                    </Box>
                </Box>
                <Paper className="right-paper" elevation={3}>
                    <Box className="right-box">
                        <SettingsIcon className="settings-icon" />
                        <Typography className="title-be" variant="h2">
                            Back-end
                        </Typography>
                    </Box>
                </Paper>
            </div>
        </Paper>
    );
}
