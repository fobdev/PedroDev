import { Typography } from "@mui/material";
import Project from "../subcomponents/Project";

interface Props {
    growIn: boolean;
    image: any;
}

export const CPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <Project title="C/C++ Projects" image={image} growIn={growIn}>
            <Typography>
                This page is currently under development, please come back later.
            </Typography>
        </Project>
    );
};
export default CPage;
