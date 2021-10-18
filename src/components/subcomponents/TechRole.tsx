import { Paper, Typography, ButtonBase } from "@mui/material";
import { mainTechRolesContainer } from "./styles/TechRoles";

interface Props {
    image: any;
    title: string;
    onClick?: any;
    selected?: boolean;
}

export const TechRole: React.FC<Props> = ({ image, title, onClick, selected = false }) => {
    return (
        <Paper elevation={5} sx={mainTechRolesContainer(selected)}>
            <ButtonBase disableRipple onClick={onClick}>
                <img className="image" src={image} alt="Technology" />
                <Typography className="title">{title}</Typography>
            </ButtonBase>
        </Paper>
    );
};
export default TechRole;
