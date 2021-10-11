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
                <Typography padding="1em">
                    This page is currently under development, please come back later.
                </Typography>
            </Box>
        </Project>
    );
};
export default JSPage;
