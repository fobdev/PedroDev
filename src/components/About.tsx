import { Slide, Grow, Paper, Typography, ButtonBase } from "@mui/material";
import { update, mapValues } from "lodash";
import { mainTechRolesContainer } from "./subcomponents/styles/TechRoles";
import { Box } from "@mui/system";
import { mainAboutContainer } from "./styles/About";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
// import CloudQueueIcon from "@mui/icons-material/CloudQueue";
// import FirebaseIcon from "../images/firebase-icon.svg";
// import HerokuIcon from "../images/heroku-icon.svg";
// import FilterDramaIcon from "@mui/icons-material/FilterDrama";
// import BigButton from "./subcomponents/BigButton";
import TechRole from "./subcomponents/TechRole";

import {
    TypescriptSVG,
    JavascriptSVG,
    ReactSVG,
    MUISVG,
    SassSVG,
    CppSVG,
    PostgreSQLSVG,
    MySQLSVG,
    NodeJSSVG,
    DiscordSVG,
    YouTubeSVG,
} from "../images/_importHandler";

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
} from "./TechPages/_importHandler";

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
        setPaperState(newState); // return into the hook
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
                                                onClick={() => handlePaperState("react")}
                                            >
                                                <img className="image" src={ReactSVG} alt="React" />
                                                <img className="image" src={MUISVG} alt="MUI" />
                                                <img className="image" src={SassSVG} alt="SASS" />
                                                <Typography className="title">
                                                    React / MUI / Sass
                                                </Typography>
                                            </ButtonBase>
                                        </Paper>
                                        <TechRole
                                            image={TypescriptSVG}
                                            title="Typescript"
                                            selected={paperState.typescript}
                                            onClick={() => handlePaperState("typescript")}
                                        />
                                        <TechRole
                                            image={JavascriptSVG}
                                            title="JavaScript"
                                            selected={paperState.javascript}
                                            onClick={() => handlePaperState("javascript")}
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
                                            image={NodeJSSVG}
                                            title="Node.JS"
                                            selected={paperState.nodejs}
                                            onClick={() => handlePaperState("nodejs")}
                                        />
                                        <TechRole
                                            image={PostgreSQLSVG}
                                            title="Postgres"
                                            selected={paperState.postgres}
                                            onClick={() => handlePaperState("postgres")}
                                        />
                                        <TechRole
                                            image={CppSVG}
                                            title="C/C++"
                                            selected={paperState.cpp}
                                            onClick={() => handlePaperState("cpp")}
                                        />
                                        <TechRole
                                            image={MySQLSVG}
                                            title="MySQL"
                                            selected={paperState.mysql}
                                            onClick={() => handlePaperState("mysql")}
                                        />
                                        <TechRole
                                            image={DiscordSVG}
                                            title="Discord.JS"
                                            selected={paperState.discord}
                                            onClick={() => handlePaperState("discord")}
                                        />
                                        <TechRole
                                            image={YouTubeSVG}
                                            title="YouTube API"
                                            selected={paperState.youtube}
                                            onClick={() => handlePaperState("youtube")}
                                        />
                                    </Box>
                                </Slide>
                            </Box>
                        </Paper>
                    </Grow>
                    <Box className="description-box">
                        {/* Frontend */}
                        <TSPage image={TypescriptSVG} growIn={paperState.typescript} />
                        <JSPage image={JavascriptSVG} growIn={paperState.javascript} />
                        <REACTPage image={ReactSVG} growIn={paperState.react} />

                        {/* Backend */}
                        <NODEJSPage image={NodeJSSVG} growIn={paperState.nodejs} />
                        <DISCORDPage image={DiscordSVG} growIn={paperState.discord} />
                        <POSTGRESPage image={PostgreSQLSVG} growIn={paperState.postgres} />
                        <YOUTUBEPage image={YouTubeSVG} growIn={paperState.youtube} />
                        <CPage image={CppSVG} growIn={paperState.cpp} />
                        <MYSQLPage image={MySQLSVG} growIn={paperState.mysql} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
