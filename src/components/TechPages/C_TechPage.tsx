import { Typography } from "@mui/material";
import { Project } from "../subcomponents";

interface Props {
    image: any;
}

export const CPage: React.FC<Props> = ({ image }) => {
    return (
        <Project title="C/C++ Projects" image={image}>
            <Typography padding="1em">
                This page is currently under development, please come back later.
            </Typography>
        </Project>
    );
};
export default CPage;
