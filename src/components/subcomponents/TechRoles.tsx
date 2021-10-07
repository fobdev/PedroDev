import { Paper, Typography } from "@mui/material";
import { mainTechRolesContainer } from "./styles/TechRoles";

interface Props {
    image: any;
    title: string;
}

export const TechRoles: React.FC<Props> = ({ image, title }) => {
    return (
        <Paper elevation={5} sx={mainTechRolesContainer}>
            <img className="image" src={image} alt="Javascript" />
            <Typography className="title">{title}</Typography>
        </Paper>
    );
};
export default TechRoles;
