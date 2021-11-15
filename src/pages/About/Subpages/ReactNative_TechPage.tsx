import { Typography } from "@mui/material";
import { Project } from "./components";
import { useEffect } from "react";

interface Props {
    image: any;
}

export const REACTNATIVEPage: React.FC<Props> = ({ image }) => {
    useEffect(() => {
        document.title = "PedroDev: React Native Projects";
    }, []);

    return (
        <Project title="React Native Projects" image={image}>
            <Typography padding="1em">
                This page is currently under development, please come back later.
            </Typography>
        </Project>
    );
};
