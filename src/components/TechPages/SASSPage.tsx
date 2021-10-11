import { Box, Typography } from "@mui/material";
import Project from "../subcomponents/Project";

interface Props {
    growIn: boolean;
    image: any;
}

export const SASSPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <Project title="SASS Projects" image={image} growIn={growIn}>
            <Box>
                <Typography variant="h2" fontWeight="200">
                    React + JSS
                </Typography>
                <Typography variant="subtitle1">
                    The core engine of this website is React + TSS, where SASS is included inside of
                    TSS + PostCSS in the React package.
                </Typography>
            </Box>
        </Project>
    );
};
export default SASSPage;
