import { Box, Typography } from "@mui/material";
import Project from "../subcomponents/Project";

interface Props {
    growIn: boolean;
    image: any;
}

export const REACTPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <Project title="React Projects" image={image} growIn={growIn}>
            <Box>
                <Typography variant="h2" fontWeight="200">
                    React + Typescript, Material UI + JSS (Sass / PostCSS)
                </Typography>
                <Typography variant="subtitle1">
                    This entire website was made inside of the React Typescript package, where SASS
                    is built-in with PostCSS and used in JSS, the entire source code can be found in
                    my GitHub repository.
                </Typography>
            </Box>
        </Project>
    );
};
export default REACTPage;
