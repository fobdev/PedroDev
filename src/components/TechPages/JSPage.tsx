import { Box, Typography } from "@mui/material";
import Project from "../subcomponents/Project";

interface Props {
    growIn: boolean;
    image: any;
}

export const JSPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <Project title="Javascript Projects" image={image} growIn={growIn}>
            <Box>
                <Typography variant="h2" fontWeight="200">
                    Javascript + Discord.JS
                </Typography>
                <Typography variant="subtitle1">
                    I have a Discord bot entirely made with Javascript, with a music module that
                    makes usage of the YouTube API, more info in it's GitHub repository.
                </Typography>
                <Typography variant="h2" fontWeight="200" sx={{ paddingTop: "1em" }}>
                    Javascript + Express.JS and Bootstrap
                </Typography>
                <Typography variant="subtitle1">
                    I made a simple website with Javascript and Express.js for the backend and
                    Bootstrap for the frontend, for a college project. It's a chat with text
                    channels that can host several users simultaneously.
                </Typography>
            </Box>
        </Project>
    );
};
export default JSPage;
