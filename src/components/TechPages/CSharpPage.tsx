import { Typography } from "@mui/material";
import Project from "../subcomponents/Project";

interface Props {
    image: any;
}

export const CSharpPage: React.FC<Props> = ({ image }) => {
    return (
        <Project title="C# Projects" image={image}>
            <Typography padding="1em">
                This page is currently under development, please come back later.
            </Typography>
        </Project>
    );
};
export default CSharpPage;
