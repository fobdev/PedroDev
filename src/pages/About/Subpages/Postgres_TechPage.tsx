import { Typography } from "@mui/material";
import { Project } from "./components";
import { useEffect } from "react";

interface Props {
    image: any;
}

export const POSTGRESPage: React.FC<Props> = ({ image }) => {
    useEffect(() => {
        document.title = "PedroDev: PostgreSQL Projects";
    }, []);
    return (
        <Project title="PostgreSQL Projects" image={image}>
            <Typography padding="1em">
                This page is currently under development, please come back later.
            </Typography>
        </Project>
    );
};
