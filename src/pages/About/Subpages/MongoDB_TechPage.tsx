import { Typography } from "@mui/material";
import { Project } from "./components";
import { useEffect } from "react";

interface Props {
    image: any;
}

export const MongoDBPage: React.FC<Props> = ({ image }) => {
    useEffect(() => {
        document.title = "PedroDev: MongoDB Projects";
    }, []);
    return (
        <Project title="MongoDB Projects" image={image}>
            <Typography padding="1em">
                This page is currently under development, please come back later.
            </Typography>
        </Project>
    );
};
