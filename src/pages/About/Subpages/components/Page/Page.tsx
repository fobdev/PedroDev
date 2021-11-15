import { Box } from "@mui/material";
import { Project } from "..";
import { globalPageStyle } from "../_globalStyles";

interface Props {
    mainTitle: string;
    image: any;
    children: any;
}

export const Page: React.FC<Props> = ({ mainTitle, image, children }) => {
    return (
        <Project title={mainTitle} image={image}>
            <Box sx={globalPageStyle}>
                <Box className="page-mainbox">
                    <Box className="page-repobox">{children}</Box>
                </Box>
            </Box>
        </Project>
    );
};
