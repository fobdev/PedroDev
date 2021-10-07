import { Fade, Grow, Paper, Typography, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import { mainAboutContainer, references } from "./styles/About";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import FirebaseIcon from "../images/firebase-icon.svg";
import HerokuIcon from "../images/heroku-icon.svg";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import BigButton from "./subcomponents/BigButton";
import TechRoles from "./subcomponents/TechRoles";
import TypescriptSVG from "../images/typescript.svg";
import JavascriptSVG from "../images/javascript.svg";
import ReactSVG from "../images/React.svg";
import FlutterSVG from "../images/Flutter.svg";
import DartSVG from "../images/Dart.svg";
import Cpp from "../images/C++.svg";
import Python from "../images/Python.svg";
import PostgreSQL from "../images/Postgres.svg";
import MongoDB from "../images/MongoDB.svg";
import MySQL from "../images/MySQL.svg";
import NodeJS from "../images/NodeJS.svg";
import Discord from "../images/Discord.svg";
import YouTube from "../images/YouTube.svg";

export default function About() {
    return (
        <Paper sx={mainAboutContainer} elevation={0}>
            <div className="papers">
                <Box className="left-side">
                    <Grow in={true} timeout={{ enter: 1000 }}>
                        <Paper className="fe-paper" elevation={3}>
                            <Box className="fe-box">
                                <CodeIcon className="code-icon" />
                                <Typography className="fe-title" variant="h2">
                                    FRONTEND
                                </Typography>
                                <Box className="tech-box">
                                    <TechRoles image={TypescriptSVG} title="Typescript" />
                                    <TechRoles image={JavascriptSVG} title="Javascript" />
                                    <TechRoles image={ReactSVG} title="React" />
                                    <TechRoles image={FlutterSVG} title="Flutter" />
                                    <TechRoles image={DartSVG} title="Dart" />
                                </Box>
                            </Box>
                        </Paper>
                    </Grow>
                    <Grow in={true} timeout={{ enter: 1000 }}>
                        <Paper className="be-paper" elevation={3}>
                            <Box className="be-box">
                                <SettingsIcon className="settings-icon" />
                                <Typography className="be-title" variant="h2">
                                    BACKEND
                                </Typography>
                                <Box className="tech-box">
                                    <TechRoles image={NodeJS} title="Node.JS" />
                                    <TechRoles image={Cpp} title="C / C++" />
                                    <TechRoles image={PostgreSQL} title="PostgreSQL" />
                                    <TechRoles image={MongoDB} title="MongoDB" />
                                    <TechRoles image={MySQL} title="MySQL" />
                                    <TechRoles image={Discord} title="Discord.JS" />
                                    <TechRoles image={YouTube} title="YouTube API" />
                                </Box>
                            </Box>
                        </Paper>
                    </Grow>
                </Box>
                <Box className="right-side">
                    <Fade in={true} timeout={{ enter: 2000 }}>
                        <Paper className="cloud-boxes">
                            <Box id="title-paper" className="middle-paper">
                                <CloudQueueIcon className="icon" />
                                <Typography className="clouds-title">Cloud Platforms</Typography>
                            </Box>
                            <Zoom in={true} timeout={{ enter: 500 }}>
                                <Box>
                                    <BigButton
                                        title="GCP"
                                        icon={<FilterDramaIcon />}
                                        link="https://cloud.google.com/"
                                        colorPattern={references.google}
                                    />
                                </Box>
                            </Zoom>
                            <Zoom in={true} timeout={{ enter: 1500 }}>
                                <Box>
                                    <BigButton
                                        title="Heroku"
                                        icon={HerokuIcon}
                                        link="https://heroku.com/"
                                        colorPattern={references.heroku}
                                    />
                                </Box>
                            </Zoom>
                            <Zoom in={true} timeout={{ enter: 2000 }}>
                                <Box>
                                    <BigButton
                                        title="Firebase"
                                        icon={FirebaseIcon}
                                        link="https://firebase.google.com/"
                                        colorPattern={references.firebase}
                                    />
                                </Box>
                            </Zoom>
                        </Paper>
                    </Fade>
                </Box>
            </div>
        </Paper>
    );
}
