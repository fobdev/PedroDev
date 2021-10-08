import { Slide, Grow, Paper, Typography } from "@mui/material";
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

import TypescriptSVG from "../images/typescript.svg";
import JavascriptSVG from "../images/javascript.svg";
import ReactSVG from "../images/React.svg";
import MUI from "../images/MUI.svg";
import Sass from "../images/Sass.svg";
import Cpp from "../images/C++.svg";
import PostgreSQL from "../images/Postgres.svg";
import MySQL from "../images/MySQL.svg";
import NodeJS from "../images/NodeJS.svg";
import Discord from "../images/Discord.svg";
import YouTube from "../images/YouTube.svg";

import {
    POSTGRESPage,
    SASSPage,
    REACTPage,
    MUIPage,
    JSPage,
    TSPage,
    YOUTUBEPage,
    NODEJSPage,
    CPage,
    DISCORDPage,
    MYSQLPage,
} from "./TechPages/_TechPages";

import { useState, useRef } from "react";

export default function About() {
    // menu transition
    const [frontEnd, setFrontEnd] = useState(true);
    const [backEnd, setBackEnd] = useState(false);

    // frontend papers
    const [TSpaper, setTSpaper] = useState(true);
    const [JSpaper, setJSpaper] = useState(false);
    const [REACTpaper, setREACTpaper] = useState(false);
    const [MUIpaper, setMUIpaper] = useState(false);
    const [SASSpaper, setSASSpaper] = useState(false);

    //backend papers
    const [CPPpaper, setCPPpaper] = useState(false);
    const [MYSQLpaper, setMYSQLpaper] = useState(false);
    const [POSTGRESpaper, setPOSTGRESpaper] = useState(false);
    const [NODEJSpaper, setNODEJSpaper] = useState(false);
    const [DISCORDpaper, setDISCORDpaper] = useState(false);
    const [YOUTUBEpaper, setYOUTUBEpaper] = useState(false);

    let insideContainer = useRef(null);
    let feSelection = frontEnd ? "#eef" : "#fff";
    let beSelection = backEnd ? "#eef" : "#fff";
    let feSelectionBoxShadow = !frontEnd
        ? "3px 3px 3px 1px rgba(0, 0, 0, .4)"
        : "1px 1px 1px 1px rgba(0, 0, 0, .4)";
    let beSelectionBoxShadow = !backEnd
        ? "3px 3px 3px 1px rgba(0, 0, 0, .4)"
        : "1px 1px 1px 1px rgba(0, 0, 0, .4)";

    return (
        <Paper sx={mainAboutContainer} elevation={0}>
            <Box className="papers">
                <Box className="main-box">
                    <Grow in={true} timeout={{ enter: 1000 }}>
                        <Paper className="main-title-paper" elevation={3}>
                            <Box className="main-title-box" ref={insideContainer} overflow="hidden">
                                <Box className="display-box">
                                    <button
                                        onClick={() => {
                                            if (!frontEnd) {
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
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (!backEnd) {
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
                                    </button>
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
                                        <TechRole
                                            image={TypescriptSVG}
                                            title="Typescript"
                                            onClick={() => {
                                                if (!TSpaper) {
                                                    setTSpaper(true);
                                                    setJSpaper(false);
                                                    setREACTpaper(false);
                                                    setSASSpaper(false);
                                                    setMUIpaper(false);
                                                    setCPPpaper(false);
                                                    setMYSQLpaper(false);
                                                    setPOSTGRESpaper(false);
                                                    setNODEJSpaper(false);
                                                    setDISCORDpaper(false);
                                                    setYOUTUBEpaper(false);
                                                }
                                            }}
                                            selected={TSpaper}
                                        />
                                        <TechRole
                                            image={JavascriptSVG}
                                            title="JavaScript"
                                            onClick={() => {
                                                if (!JSpaper) {
                                                    setTSpaper(false);
                                                    setJSpaper(true);
                                                    setREACTpaper(false);
                                                    setSASSpaper(false);
                                                    setMUIpaper(false);
                                                    setCPPpaper(false);
                                                    setMYSQLpaper(false);
                                                    setPOSTGRESpaper(false);
                                                    setNODEJSpaper(false);
                                                    setDISCORDpaper(false);
                                                    setYOUTUBEpaper(false);
                                                }
                                            }}
                                            selected={JSpaper}
                                        />
                                        <TechRole
                                            image={ReactSVG}
                                            title="React"
                                            selected={REACTpaper}
                                            onClick={() => {
                                                if (!REACTpaper) {
                                                    setTSpaper(false);
                                                    setJSpaper(false);
                                                    setREACTpaper(true);
                                                    setSASSpaper(false);
                                                    setMUIpaper(false);
                                                    setCPPpaper(false);
                                                    setMYSQLpaper(false);
                                                    setPOSTGRESpaper(false);
                                                    setNODEJSpaper(false);
                                                    setDISCORDpaper(false);
                                                    setYOUTUBEpaper(false);
                                                }
                                            }}
                                        />
                                        <TechRole
                                            image={MUI}
                                            title="MUI"
                                            selected={MUIpaper}
                                            onClick={() => {
                                                if (!MUIpaper) {
                                                    setTSpaper(false);
                                                    setJSpaper(false);
                                                    setREACTpaper(false);
                                                    setSASSpaper(false);
                                                    setMUIpaper(true);
                                                    setCPPpaper(false);
                                                    setMYSQLpaper(false);
                                                    setPOSTGRESpaper(false);
                                                    setNODEJSpaper(false);
                                                    setDISCORDpaper(false);
                                                    setYOUTUBEpaper(false);
                                                }
                                            }}
                                        />
                                        <TechRole
                                            image={Sass}
                                            title="SASS"
                                            selected={SASSpaper}
                                            onClick={() => {
                                                if (!SASSpaper) {
                                                    setTSpaper(false);
                                                    setJSpaper(false);
                                                    setREACTpaper(false);
                                                    setSASSpaper(true);
                                                    setMUIpaper(false);
                                                    setCPPpaper(false);
                                                    setMYSQLpaper(false);
                                                    setPOSTGRESpaper(false);
                                                    setNODEJSpaper(false);
                                                    setDISCORDpaper(false);
                                                    setYOUTUBEpaper(false);
                                                }
                                            }}
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
                                            image={PostgreSQL}
                                            title="Postgres"
                                            selected={POSTGRESpaper}
                                            onClick={() => {
                                                if (!POSTGRESpaper) {
                                                    setCPPpaper(false);
                                                    setMYSQLpaper(false);
                                                    setPOSTGRESpaper(true);
                                                    setNODEJSpaper(false);
                                                    setDISCORDpaper(false);
                                                    setYOUTUBEpaper(false);
                                                    setTSpaper(false);
                                                    setJSpaper(false);
                                                    setREACTpaper(false);
                                                    setSASSpaper(false);
                                                    setMUIpaper(false);
                                                }
                                            }}
                                        />
                                        <TechRole
                                            image={Cpp}
                                            title="C/C++"
                                            selected={CPPpaper}
                                            onClick={() => {
                                                if (!CPPpaper) {
                                                    setCPPpaper(true);
                                                    setMYSQLpaper(false);
                                                    setPOSTGRESpaper(false);
                                                    setNODEJSpaper(false);
                                                    setDISCORDpaper(false);
                                                    setYOUTUBEpaper(false);
                                                    setTSpaper(false);
                                                    setJSpaper(false);
                                                    setREACTpaper(false);
                                                    setSASSpaper(false);
                                                    setMUIpaper(false);
                                                }
                                            }}
                                        />
                                        <TechRole
                                            image={MySQL}
                                            title="MySQL"
                                            selected={MYSQLpaper}
                                            onClick={() => {
                                                if (!MYSQLpaper) {
                                                    setCPPpaper(false);
                                                    setMYSQLpaper(true);
                                                    setPOSTGRESpaper(false);
                                                    setNODEJSpaper(false);
                                                    setDISCORDpaper(false);
                                                    setYOUTUBEpaper(false);
                                                    setTSpaper(false);
                                                    setJSpaper(false);
                                                    setREACTpaper(false);
                                                    setSASSpaper(false);
                                                    setMUIpaper(false);
                                                }
                                            }}
                                        />
                                        <TechRole
                                            image={NodeJS}
                                            title="Node.JS"
                                            selected={NODEJSpaper}
                                            onClick={() => {
                                                if (!NODEJSpaper) {
                                                    setCPPpaper(false);
                                                    setMYSQLpaper(false);
                                                    setPOSTGRESpaper(false);
                                                    setNODEJSpaper(true);
                                                    setDISCORDpaper(false);
                                                    setYOUTUBEpaper(false);
                                                    setTSpaper(false);
                                                    setJSpaper(false);
                                                    setREACTpaper(false);
                                                    setSASSpaper(false);
                                                    setMUIpaper(false);
                                                }
                                            }}
                                        />
                                        <TechRole
                                            image={Discord}
                                            title="Discord.JS"
                                            selected={DISCORDpaper}
                                            onClick={() => {
                                                if (!DISCORDpaper) {
                                                    setCPPpaper(false);
                                                    setMYSQLpaper(false);
                                                    setPOSTGRESpaper(false);
                                                    setNODEJSpaper(false);
                                                    setDISCORDpaper(true);
                                                    setYOUTUBEpaper(false);
                                                    setTSpaper(false);
                                                    setJSpaper(false);
                                                    setREACTpaper(false);
                                                    setSASSpaper(false);
                                                    setMUIpaper(false);
                                                }
                                            }}
                                        />
                                        <TechRole
                                            image={YouTube}
                                            title="YouTube API"
                                            selected={YOUTUBEpaper}
                                            onClick={() => {
                                                if (!YOUTUBEpaper) {
                                                    setCPPpaper(false);
                                                    setMYSQLpaper(false);
                                                    setPOSTGRESpaper(false);
                                                    setNODEJSpaper(false);
                                                    setDISCORDpaper(false);
                                                    setYOUTUBEpaper(true);
                                                    setTSpaper(false);
                                                    setJSpaper(false);
                                                    setREACTpaper(false);
                                                    setSASSpaper(false);
                                                    setMUIpaper(false);
                                                }
                                            }}
                                        />
                                    </Box>
                                </Slide>
                            </Box>
                        </Paper>
                    </Grow>
                    <Box className="description-box">
                        <TSPage image={TypescriptSVG} growIn={TSpaper} />
                        <JSPage image={JavascriptSVG} growIn={JSpaper} />
                        <REACTPage image={ReactSVG} growIn={REACTpaper} />
                        <MUIPage image={MUI} growIn={MUIpaper} />
                        <SASSPage image={Sass} growIn={SASSpaper} />
                        <POSTGRESPage image={PostgreSQL} growIn={POSTGRESpaper} />
                        <CPage image={Cpp} growIn={CPPpaper} />
                        <MYSQLPage image={MySQL} growIn={MYSQLpaper} />
                        <NODEJSPage image={NodeJS} growIn={NODEJSpaper} />
                        <DISCORDPage image={Discord} growIn={DISCORDpaper} />
                        <YOUTUBEPage image={YouTube} growIn={YOUTUBEpaper} />
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
}
