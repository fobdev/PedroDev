import { Box, Typography } from "@mui/material";
import Project from "../../subcomponents/Project";
import { globalPageStyle } from "../styles/global";

interface Props {
    largeTitle?: string;
    mainTitle: string;
    image: any;
    children: any;
}

export const PageModel: React.FC<Props> = ({ mainTitle, image, largeTitle, children }) => {
    return (
        <Project title={mainTitle} image={image}>
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
