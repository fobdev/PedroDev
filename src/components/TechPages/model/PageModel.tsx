import { Box, Typography } from "@mui/material";
import Project from "../../subcomponents/Project";
import { globalPageStyle } from "../styles/global";

interface Props {
    largeTitle?: string;
    mainTitle: string;
    growIn: boolean;
    image: any;
    children: any;
}

export const PageModel: React.FC<Props> = ({ mainTitle, growIn, image, largeTitle, children }) => {
    return (
        <Project title={mainTitle} image={image} growIn={growIn}>
            <Box sx={globalPageStyle}>
                <Typography className="page-maintitle" variant="h2" textAlign="right">
                    {largeTitle}
                </Typography>
                <Box className="page-mainbox">
                    <Box className="page-repobox">{children}</Box>
                </Box>
            </Box>
        </Project>
    );
};
export default PageModel;
