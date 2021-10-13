import { Paper, Typography, ButtonBase } from "@mui/material";
import { useEffect } from "react";
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
            <ButtonBase disableRipple onClick={onClick}>
                <img className="image" src={image} alt="Technology" />
                <Typography className="title">{title}</Typography>
            </ButtonBase>
        </Paper>
    );
};
export default TechRole;
