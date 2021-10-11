import { Box, Typography } from "@mui/material";
import Project from "../subcomponents/Project";

interface Props {
    growIn: boolean;
    image: any;
}

export const MUIPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <Project title="Material UI Projects" image={image} growIn={growIn}>
            <Box>
                <Typography variant="h2" fontWeight="200">
                    Material UI + React + Typescript
                </Typography>
                <Typography variant="subtitle1">
                    This entire website was made in React + Typescript + Material UI, all the source
                    code can be found in its GitHub repository.
                </Typography>
            </Box>
        </Project>
    );
};
export default MUIPage;
