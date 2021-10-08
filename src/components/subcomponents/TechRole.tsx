import { Paper, Typography } from "@mui/material";
import { mainTechRolesContainer } from "./styles/TechRoles";

interface Props {
    image: any;
    title: string;
    onClick?: any;
    selected: boolean;
}

export const TechRole: React.FC<Props> = ({ image, title, onClick, selected }) => {
    return (
        <Paper elevation={5} sx={mainTechRolesContainer(selected)}>
            <button onClick={onClick}>
                <img className="image" src={image} alt="Javascript" />
                <Typography className="title">{title}</Typography>
            </button>
        </Paper>
    );
};
export default TechRole;
