import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Project from "../subcomponents/Project";

interface Props {
    growIn: boolean;
    image: any;
}

export const NODEJSPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <Project title="Node.JS Projects" image={image} growIn={growIn}>
            <Box>
                <Typography variant="h2" fontWeight="200">
                    Node.JS + Discord.JS API
                </Typography>
                <Typography variant="subtitle1">
                    I developed varius Discord Bots that can be found in my GitHub, and one of them
                    even went to 100+ guilds, where I was maintaining it for several months.
                </Typography>
                <Typography variant="h2" fontWeight="200" sx={{ paddingTop: "1em" }}>
                    Node.JS + React
                </Typography>
                <Typography variant="subtitle1">
                    I made this website entirely in React + Material UI, all the source code can be
                    found in my GitHub, I still maintain this website and edit the style of is to
                    this day.
                </Typography>
            </Box>
        </Project>
    );
};
export default NODEJSPage;
