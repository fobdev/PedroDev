import { Box } from "@mui/material";
import Project from "../../subcomponents/Project/Project";
import { globalPageStyle } from "./styles/_global";
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
