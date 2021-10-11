import { Box, Typography } from "@mui/material";
import Project from "../subcomponents/Project";
import ReactIMG from "../../images/reactcode.png";
import Repo from "./model/Repo";
import LargeImageHover from "./model/LargeImageHover";

interface Props {
    growIn: boolean;
    image: any;
}

export const REACTPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <Project title="React Projects" image={image} growIn={growIn}>
            <Box>
                <Typography className="page-maintitle" variant="h2" fontWeight="200" padding=".3em">
                    React & Typescript / Mui + Sass
                </Typography>
                <Box
                    className="page-mainbox"
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: "2em",
                            width: "80%",
                        }}
                    >
                        <Repo repo="https://github.com/fobdev/PedroDev" title="PedroDev">
                            My personal portfolio, made completely in React in junction with
                            Typescript. This project is still under development and I push commits
                            to it daily.
                            <br />
                            If you want to help me develop my website, feel free to send requests to
                            this repository.
                            <ul>
                                React Typescript modules used:
                                <li>
                                    <code style={{ background: "#eef" }}>@types/react</code>
                                </li>
                                <li>
                                    <code style={{ background: "#eef" }}>@types/react-dom</code>
                                </li>
                                <li>
                                    <code style={{ background: "#eef" }}>
                                        @types/react-router-dom
                                    </code>
                                </li>
                            </ul>
                            <ul>
                                Other Typescript modules:
                                <li>
                                    <code style={{ background: "#eef" }}>@types/lodash</code>
                                </li>
                                <li>
                                    <code style={{ background: "#eef" }}>@types/node</code>
                                </li>
                            </ul>
                        </Repo>
                    </Box>
                    <LargeImageHover
                        image={ReactIMG}
                        link="https://github.com/fobdev/PedroDev/blob/main/src/App.tsx"
                    />
                </Box>
            </Box>
        </Project>
    );
};
export default REACTPage;
