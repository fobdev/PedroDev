// import CloudQueueIcon from "@mui/icons-material/CloudQueue";
// import FirebaseIcon from "../images/firebase-icon.svg";
// import HerokuIcon from "../images/heroku-icon.svg";
// import FilterDramaIcon from "@mui/icons-material/FilterDrama";
// import BigButton from "./subcomponents/BigButton";

import { Slide, Grow, Paper, Typography, ButtonBase } from "@mui/material";
import { update, mapValues } from "lodash";
import { mainTechRolesContainer } from "./subcomponents/styles/TechRoles";
import { Box } from "@mui/system";
import { mainAboutContainer } from "./styles/About";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import { TechRole } from "./subcomponents";

import * as svgBank from "../images";

import {
    POSTGRESPage,
    REACTPage,
    JSPage,
    TSPage,
    YOUTUBEPage,
    NODEJSPage,
    CPage,
    DISCORDPage,
    MYSQLPage,
} from "./TechPages";

import { useState, useRef } from "react";
export default function About() {
    // menu transition
    const [frontEnd, setFrontEnd] = useState(true);
    const [backEnd, setBackEnd] = useState(false);

    // paper switch
    const [paperState, setPaperState] = useState({
        typescript: false,
        javascript: false,
        react: true,
        mui: false,
        sass: false,
        cpp: false,
        mysql: false,
        postgres: false,
        nodejs: false,
        discord: false,
        youtube: false,
    });

    // paper switch handler
    const handlePaperState = (tech: string) => {
        let newState = paperState;
        newState = mapValues(newState, () => false); // reset the obj
        update(newState, tech, (value) => (value = true)); // turns only the selected key
        return setPaperState(newState); // return into the hook
    };

    const summonPage = (value: boolean, element: JSX.Element) => {
        return value ? element : null;
    };

    const handleClick = (value: string) => {
        handlePaperState(value);
    };

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
                                    <ButtonBase
                                        disableRipple
                                        onClick={() => {
                                            if (!frontEnd) {
                                                handlePaperState("react");
                                                setFrontEnd(true);
                                                setBackEnd(false);
                                            }
                                        }}
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
                                    </ButtonBase>
                                    <ButtonBase
                                        disableRipple
                                        onClick={() => {
                                            if (!backEnd) {
                                                handlePaperState("nodejs");
                                                setBackEnd(true);
                                                setFrontEnd(false);
                                            }
                                        }}
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
                                    </ButtonBase>
                                </Box>
                                <Slide
                                    in={frontEnd}
                                    direction="up"
                                    timeout={{ enter: 500, exit: 0 }}
                                    container={insideContainer.current}
                                    mountOnEnter
                                    unmountOnExit
                                >
                                    <Box className="frontend-techbox">
                                        <Paper
                                            elevation={5}
                                            sx={mainTechRolesContainer(paperState.react)}
                                        >
                                            <ButtonBase
                                                disableRipple
                                                onClick={() => handleClick("react")}
                                            >
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
                                        </Paper>
                                        <TechRole
                                            image={svgBank.TypescriptSVG}
                                            title="Typescript"
                                            selected={paperState.typescript}
                                            onClick={() => handleClick("typescript")}
                                        />
                                        <TechRole
                                            image={svgBank.JavascriptSVG}
                                            title="JavaScript"
                                            selected={paperState.javascript}
                                            onClick={() => handleClick("javascript")}
                                        />
                                    </Box>
                                </Slide>
                                <Slide
                                    in={backEnd}
                                    direction="up"
                                    timeout={{ enter: 500, exit: 0 }}
                                    container={insideContainer.current}
                                    mountOnEnter
                                    unmountOnExit
                                >
                                    <Box className="backend-techbox">
                                        <TechRole
                                            image={svgBank.NodeJSSVG}
                                            title="Node.JS"
                                            selected={paperState.nodejs}
                                            onClick={() => handleClick("nodejs")}
                                        />
                                        <TechRole
                                            image={svgBank.PostgreSQLSVG}
                                            title="Postgres"
                                            selected={paperState.postgres}
                                            onClick={() => handleClick("postgres")}
                                        />
                                        <TechRole
                                            image={svgBank.CppSVG}
                                            title="C/C++"
                                            selected={paperState.cpp}
                                            onClick={() => handleClick("cpp")}
                                        />
                                        <TechRole
                                            image={svgBank.MySQLSVG}
                                            title="MySQL"
                                            selected={paperState.mysql}
                                            onClick={() => handleClick("mysql")}
                                        />
                                        <TechRole
                                            image={svgBank.DiscordSVG}
                                            title="Discord.JS"
                                            selected={paperState.discord}
                                            onClick={() => handleClick("discord")}
                                        />
                                        <TechRole
                                            image={svgBank.YouTubeSVG}
                                            title="YouTube API"
                                            selected={paperState.youtube}
                                            onClick={() => handleClick("youtube")}
                                        />
                                    </Box>
                                </Slide>
                            </Box>
                        </Paper>
                    </Grow>
                    <Box className="description-box">
                        {/* Frontend */}
                        {summonPage(
                            paperState.react,
                            <REACTPage image={svgBank.ReactSVG} growIn={paperState.react} />
                        )}
                        {summonPage(
                            paperState.javascript,
                            <JSPage image={svgBank.JavascriptSVG} growIn={paperState.javascript} />
                        )}
                        {summonPage(
                            paperState.typescript,
                            <TSPage image={svgBank.TypescriptSVG} growIn={paperState.typescript} />
                        )}

                        {/* Backend */}
                        {summonPage(
                            paperState.mysql,
                            <MYSQLPage image={svgBank.MySQLSVG} growIn={paperState.mysql} />
                        )}
                        {summonPage(
                            paperState.youtube,
                            <YOUTUBEPage image={svgBank.YouTubeSVG} growIn={paperState.youtube} />
                        )}
                        {summonPage(
                            paperState.postgres,
                            <POSTGRESPage
                                image={svgBank.PostgreSQLSVG}
                                growIn={paperState.postgres}
                            />
                        )}
                        {summonPage(
                            paperState.discord,
                            <DISCORDPage image={svgBank.DiscordSVG} growIn={paperState.discord} />
                        )}
                        {summonPage(
                            paperState.nodejs,
                            <NODEJSPage image={svgBank.NodeJSSVG} growIn={paperState.nodejs} />
                        )}
                        {summonPage(
                            paperState.cpp,
                            <CPage image={svgBank.CppSVG} growIn={paperState.cpp} />
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
