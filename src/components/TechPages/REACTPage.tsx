import { Box, Typography } from "@mui/material";
import Project from "../subcomponents/Project";
import ReactIMG from "../../images/reactcode.png";
import Repo from "./model/Repo";
import LargeImageHover from "./model/LargeImageHover";
import { globalPageStyle } from "./styles/global";

interface Props {
    growIn: boolean;
    image: any;
}

export const REACTPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <Project title="React / Material UI / Sass Projects" image={image} growIn={growIn}>
            <Box sx={globalPageStyle}>
                <Typography className="page-maintitle" variant="h2">
                    React & Typescript / Mui + Sass
                </Typography>
                <Box className="page-mainbox">
                    <Box className="page-repobox">
                        <Repo repo="https://github.com/fobdev/PedroDev" title="PedroDev">
                            My personal portfolio, made completely in React in junction with
                            Typescript. This project is still under development and I push commits
                            to it daily.
                            <ul>
                                React Typescript modules used:
                                <li>
                                    <a
                                        href="https://www.npmjs.com/package/@types/react"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>@types/react</code>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.npmjs.com/package/@types/react-dom"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>@types/react-dom</code>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.npmjs.com/package/@types/react-router-dom"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>@types/react-router-dom</code>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                Other Typescript modules:
                                <li>
                                    <a
                                        href="https://www.npmjs.com/package/@types/lodash"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>@types/lodash</code>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.npmjs.com/package/@types/node"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>@types/node</code>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                Other modules:
                                <li>
                                    <a
                                        href="https://www.npmjs.com/package/@mui/material"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>@mui/material</code>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.npmjs.com/package/@mui/icons-material"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>@mui/icons-material</code>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.npmjs.com/package/@mui/lab"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>@mui/lab</code>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.npmjs.com/package/@mui/styles"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>@mui/styles</code>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.npmjs.com/package/firebase"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>firebase</code>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.npmjs.com/package/i18next"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>i18next</code>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.npmjs.com/package/emailjs-com"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>emailjs-com</code>
                                    </a>
                                </li>
                            </ul>
                            If you want to help me develop my website, feel free to send requests to
                            this repository.
                        </Repo>
                    </Box>
                    <LargeImageHover
                        side="right"
                        image={ReactIMG}
                        link="https://github.com/fobdev/PedroDev/blob/main/src/App.tsx"
                    />
                </Box>
            </Box>
        </Project>
    );
};
export default REACTPage;
