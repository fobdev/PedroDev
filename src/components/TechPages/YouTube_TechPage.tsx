import { Typography } from "@mui/material";
import { Project } from "../subcomponents";

interface Props {
    image: any;
}

export const YOUTUBEPage: React.FC<Props> = ({ image }) => {
    return (
        <Project title="Youtube API Projects" image={image}>
            <Typography padding="1em">
                This page is currently under development, please come back later.
            </Typography>
        </Project>
    );
};