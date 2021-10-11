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
                <Typography padding="1em">
                    This page is currently under development, please come back later.
                </Typography>
            </Box>
        </Project>
    );
};
export default NODEJSPage;
