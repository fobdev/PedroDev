import { Typography } from "@mui/material";
import Project from "../subcomponents/Project";

interface Props {
    growIn: boolean;
    image: any;
}

export const TSPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <Project title="Typescript Projects" image={image} growIn={growIn}>
            <Typography>This page is still under development, please come back later.</Typography>
        </Project>
    );
};
export default TSPage;
