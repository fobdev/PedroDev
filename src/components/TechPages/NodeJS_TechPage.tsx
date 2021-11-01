import { Typography } from "@mui/material";
import { Project } from "../subcomponents";
import { useEffect } from "react";

interface Props {
    image: any;
}

export const NODEJSPage: React.FC<Props> = ({ image }) => {
    useEffect(() => {
        document.title = "PedroDev: Node.JS Projects";
    }, []);
    return (
        <Project title="Node.JS Projects" image={image}>
            <Typography padding="1em">
                This page is currently under development, please come back later.
            </Typography>
        </Project>
    );
};
