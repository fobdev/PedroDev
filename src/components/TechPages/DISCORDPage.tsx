import { Typography } from "@mui/material";
import Project from "../subcomponents/Project";

interface Props {
    growIn: boolean;
    image: any;
}

export const DISCORDPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <Project title="Discord.JS Projects" image={image} growIn={growIn}>
            <Typography padding="1em">
                This page is currently under development, please come back later.
            </Typography>
        </Project>
    );
};
export default DISCORDPage;
