import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Project from "../subcomponents/Project";

interface Props {
    image: any;
}

export const NODEJSPage: React.FC<Props> = ({ image }) => {
    return (
        <Project title="Node.JS Projects" image={image}>
            <Box>
                <Typography padding="1em">
                    This page is currently under development, please come back later.
                </Typography>
            </Box>
        </Project>
    );
};
export default NODEJSPage;
