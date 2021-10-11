import { Box, Typography } from "@mui/material";
import Project from "../subcomponents/Project";

interface Props {
    growIn: boolean;
    image: any;
}

export const TSPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <Project title="Typescript Projects" image={image} growIn={growIn}>
            <Box>
                <Typography variant="h2" fontWeight="200">
                    Typescript + React
                </Typography>
                <Typography variant="subtitle1">
                    This entire website was made using Typescript React, all the source code can be
                    found in my GitHub
                </Typography>
                <Typography variant="h2" fontWeight="200" sx={{ paddingTop: "1em" }}>
                    Typescript + Discord.JS
                </Typography>
                <Typography variant="subtitle1">
                    I made a Discord Bot entirely using the '@types/discordjs' module from the
                    Discord API, that can be found in my GitHub
                </Typography>
            </Box>
        </Project>
    );
};
export default TSPage;
