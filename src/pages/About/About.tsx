// MUI
import { Slide, Grow, Paper, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box } from "@mui/system";

// React
import { Link, useRouteMatch, Route } from "react-router-dom";
import { useRef } from "react";

// Styles
import { style } from "./_style";

// Components
import { TechRole } from "./Subpages/components";
import * as svgBank from "../../images";

import {
    POSTGRESPage,
    REACTPage,
    JSPage,
    TSPage,
    NODEJSPage,
    CPage,
    MongoDBPage,
    CSharpPage,
} from "./Subpages";
import { REACTNATIVEPage } from "./Subpages/ReactNative_TechPage";

interface Props {}
export const About: React.FC<Props> = () => {
    let match = useRouteMatch();

    // menu transition
    const insideContainer = useRef(null);

    return (
        <Box sx={style}>
            <Box className="papers">
                <Box className="main-box">
                    <Grow in={true} timeout={{ enter: 1000 }}>
                        <Paper className="main-title-paper" elevation={1}>
                            <Box className="main-title-box" ref={insideContainer} overflow="hidden">
                                <Box className="display-box">
                                    <Link
                                        to={`${match.path}/frontend/react`}
                                        style={{ textDecoration: "none", color: "black" }}
                                    >
                                        <Paper elevation={2} className="techselector-paper">
                                            <CodeIcon className="code-icon" />
                                            <Typography className="main-title" variant="h2">
                                                Frontend
                                            </Typography>
                                        </Paper>
                                    </Link>
                                    <Link
                                        to={`${match.path}/backend/csharp`}
                                        style={{ textDecoration: "none", color: "black" }}
                                    >
                                        <Paper elevation={2} className="techselector-paper">
                                            <SettingsIcon className="code-icon" />
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
                                        <Box className="stack-techbox">
                                            <Link
                                                to={`${match.url}/frontend/react`}
                                                style={{ textDecoration: "none", color: "black" }}
                                            >
                                                <TechRole image={svgBank.ReactSVG} title="React" />
                                            </Link>
                                            <Link
                                                to={`${match.url}/frontend/reactnative`}
                                                style={{ textDecoration: "none", color: "black" }}
                                            >
                                                <TechRole
                                                    image={svgBank.ReactSVG}
                                                    title="React Native"
                                                />
                                            </Link>
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
                                        <Box className="stack-techbox">
                                            <Link
                                                to={`${match.url}/backend/csharp`}
                                                style={{ textDecoration: "none", color: "black" }}
                                            >
                                                <TechRole image={svgBank.CSharpSVG} title="C#" />
                                            </Link>
                                            <Link
                                                to={`${match.url}/backend/cpp`}
                                                style={{ textDecoration: "none", color: "black" }}
                                            >
                                                <TechRole image={svgBank.CppSVG} title="C/C++" />
                                            </Link>
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
                                                to={`${match.url}/backend/mongodb`}
                                                style={{ textDecoration: "none", color: "black" }}
                                            >
                                                <TechRole
                                                    image={svgBank.MongoDBSVG}
                                                    title="MongoDB"
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
                        <Route path={`${match.path}/frontend/reactnative`}>
                            <REACTNATIVEPage image={svgBank.ReactSVG} />
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
};
