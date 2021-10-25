// import CloudQueueIcon from "@mui/icons-material/CloudQueue";
// import FirebaseIcon from "../images/firebase-icon.svg";
// import HerokuIcon from "../images/heroku-icon.svg";
// import FilterDramaIcon from "@mui/icons-material/FilterDrama";
// import BigButton from "./subcomponents/BigButton";

import { Slide, Grow, Paper, Typography, ButtonBase } from "@mui/material";
// import { update, mapValues } from "lodash";
import { mainTechRolesContainer } from "./subcomponents/styles/TechRoles";
import { Box } from "@mui/system";
import { mainAboutContainer } from "./styles/About";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import { TechRole } from "./subcomponents";
import { Link, useRouteMatch, Route } from "react-router-dom";
import * as svgBank from "../images";
import { useRef } from "react";
import {
    POSTGRESPage,
    REACTPage,
    JSPage,
    TSPage,
    YOUTUBEPage,
    NODEJSPage,
    CPage,
    MongoDBPage,
    CSharpPage,
} from "./TechPages";
import { useState } from "react";

export default function About() {
    let match = useRouteMatch();

    // menu transition
    const [frontEnd, setFrontEnd] = useState(false);
    const [backEnd, setBackEnd] = useState(false);

    const insideContainer = useRef(null);

    const feSelection = frontEnd ? "#eef" : "#fff";
    const beSelection = backEnd ? "#eef" : "#fff";
    const feSelectionBoxShadow = !frontEnd
        ? "3px 3px 3px 1px rgba(0, 0, 0, .4)"
        : "1px 1px 1px 1px rgba(0, 0, 0, .4)";
    const beSelectionBoxShadow = !backEnd
        ? "3px 3px 3px 1px rgba(0, 0, 0, .4)"
        : "1px 1px 1px 1px rgba(0, 0, 0, .4)";

    return (
        <Box sx={mainAboutContainer}>
            <Box className="papers">
                <Box className="main-box">
                    <Grow in={true} timeout={{ enter: 1000 }}>
                        <Paper className="main-title-paper" elevation={3}>
                            <Box className="main-title-box" ref={insideContainer} overflow="hidden">
                                <Box className="display-box">
                                    <Link
                                        to={`${match.path}/frontend/react`}
                                        style={{ textDecoration: "none", color: "black" }}
                                        // onClick={() => tech("frontend")}
                                    >
                                        <Paper
                                            elevation={3}
                                            className="techselector-paper"
                                            sx={{
                                                background: feSelection,
                                                ".code-icon": {
                                                    transition: ".33s",
                                                    boxShadow: feSelectionBoxShadow,
                                                },
                                            }}
                                        >
                                            <CodeIcon className="code-icon" />
                                            <Typography className="main-title" variant="h2">
                                                Frontend
                                            </Typography>
                                        </Paper>
                                    </Link>
                                    <Link
                                        to={`${match.path}/backend/nodejs`}
                                        style={{ textDecoration: "none", color: "black" }}
                                        // onClick={() => tech("backend")}
                                    >
                                        <Paper
                                            elevation={3}
                                            className="techselector-paper"
                                            sx={{
                                                background: beSelection,

                                                ".settings-icon": {
                                                    transition: ".33s",
                                                    boxShadow: beSelectionBoxShadow,
                                                },
                                            }}
                                        >
                                            <SettingsIcon className="settings-icon" />
                                            <Typography className="main-title" variant="h2">
                                                Backend
                                            </Typography>
                                        </Paper>
                                    </Link>
                                </Box>
                                <Route path={`${match.path}/frontend/`}>
                                    <Slide
                                        in={true}
                                        direction="up"
                                        timeout={{ enter: 500, exit: 0 }}
                                        container={insideContainer.current}
                                        mountOnEnter
                                        unmountOnExit
                                    >
                                        <Box className="frontend-techbox">
                                            <Paper elevation={5} sx={mainTechRolesContainer(false)}>
                                                <Link
                                                    to={`${match.url}/frontend/react`}
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black",
                                                    }}
                                                >
                                                    <ButtonBase disableRipple>
                                                        <img
                                                            className="image"
                                                            src={svgBank.ReactSVG}
                                                            alt="React"
                                                        />
                                                        <img
                                                            className="image"
                                                            src={svgBank.MUISVG}
                                                            alt="MUI"
                                                        />
                                                        <img
                                                            className="image"
                                                            src={svgBank.SassSVG}
                                                            alt="SASS"
                                                        />
                                                        <Typography className="title">
                                                            React / MUI / Sass
                                                        </Typography>
                                                    </ButtonBase>
                                                </Link>
                                            </Paper>
                                            <Link
                                                to={`${match.url}/frontend/typescript`}
                                                style={{ textDecoration: "none", color: "black" }}
                                            >
                                                <TechRole
                                                    image={svgBank.TypescriptSVG}
                                                    title="Typescript"
                                                />
                                            </Link>
                                            <Link
                                                to={`${match.url}/frontend/javascript`}
                                                style={{ textDecoration: "none", color: "black" }}
                                            >
                                                <TechRole
                                                    image={svgBank.JavascriptSVG}
                                                    title="JavaScript"
                                                />
                                            </Link>
                                        </Box>
                                    </Slide>
                                </Route>
                                <Route path={`${match.path}/backend/`}>
                                    <Slide
                                        in={true}
                                        direction="up"
                                        timeout={{ enter: 500, exit: 0 }}
                                        container={insideContainer.current}
                                        mountOnEnter
                                        unmountOnExit
                                    >
                                        <Box className="backend-techbox">
                                            <Link
                                                to={`${match.url}/backend/nodejs`}
                                                style={{ textDecoration: "none", color: "black" }}
                                            >
                                                <TechRole
                                                    image={svgBank.NodeJSSVG}
                                                    title="Node.JS"
                                                />
                                            </Link>
                                            <Link
                                                to={`${match.url}/backend/postgres`}
                                                style={{ textDecoration: "none", color: "black" }}
                                            >
                                                <TechRole
                                                    image={svgBank.PostgreSQLSVG}
                                                    title="Postgres"
                                                />
                                            </Link>
                                            <Link
                                                to={`${match.url}/backend/cpp`}
                                                style={{ textDecoration: "none", color: "black" }}
                                            >
                                                <TechRole image={svgBank.CppSVG} title="C/C++" />
                                            </Link>
                                            <Link
                                                to={`${match.url}/backend/csharp`}
                                                style={{ textDecoration: "none", color: "black" }}
                                            >
                                                <TechRole image={svgBank.CSharpSVG} title="C#" />
                                            </Link>
                                            <Link
                                                to={`${match.url}/backend/mongodb`}
                                                style={{ textDecoration: "none", color: "black" }}
                                            >
                                                <TechRole
                                                    image={svgBank.MongoDBSVG}
                                                    title="MongoDB"
                                                />
                                            </Link>
                                            <Link
                                                to={`${match.url}/backend/youtubeapi`}
                                                style={{ textDecoration: "none", color: "black" }}
                                            >
                                                <TechRole
                                                    image={svgBank.YouTubeSVG}
                                                    title="YouTube API"
                                                />
                                            </Link>
                                        </Box>
                                    </Slide>
                                </Route>
                            </Box>
                        </Paper>
                    </Grow>
                    <Box className="description-box">
                        {/* Frontend */}
                        <Route path={`${match.path}/frontend/react`}>
                            <REACTPage image={svgBank.ReactSVG} />
                        </Route>
                        <Route path={`${match.path}/frontend/typescript`}>
                            <TSPage image={svgBank.TypescriptSVG} />
                        </Route>
                        <Route path={`${match.path}/frontend/javascript`}>
                            <JSPage image={svgBank.JavascriptSVG} />
                        </Route>
                        <Route path={`${match.path}/backend/csharp`}>
                            <CSharpPage image={svgBank.CSharpSVG} />
                        </Route>
                        <Route path={`${match.path}/backend/youtubeapi`}>
                            <YOUTUBEPage image={svgBank.YouTubeSVG} />{" "}
                        </Route>
                        <Route path={`${match.path}/backend/postgres`}>
                            <POSTGRESPage image={svgBank.PostgreSQLSVG} />{" "}
                        </Route>
                        <Route path={`${match.path}/backend/mongodb`}>
                            <MongoDBPage image={svgBank.MongoDBSVG} />{" "}
                        </Route>
                        <Route path={`${match.path}/backend/nodejs`}>
                            <NODEJSPage image={svgBank.NodeJSSVG} />{" "}
                        </Route>
                        <Route path={`${match.path}/backend/cpp`}>
                            <CPage image={svgBank.CppSVG} />{" "}
                        </Route>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
