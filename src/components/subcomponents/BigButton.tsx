import { Box, Paper, Typography, Zoom } from "@mui/material";
import { mainBigButtonContainer } from "./styles/BigButton";

interface Props {
    outElevation?: number;
    inElevation?: number;
    title: string;
    icon: any;
    link: string;
    colorPattern: string;
}

export const BigButton: React.FC<Props> = ({
    outElevation = 5,
    inElevation = 0,
    title,
    icon,
    link,
    colorPattern,
}) => {
    let imgtype;
    if (typeof icon === "string") imgtype = <img src={icon} alt="" />;
    else imgtype = icon;

    return (
        <Box sx={mainBigButtonContainer(colorPattern)}>
            <Zoom in={true} timeout={{ enter: 1000 }}>
                <Paper elevation={outElevation} className="main-paper">
                    <Paper elevation={inElevation} className="paper-content">
                        <a href={link} rel="noreferrer" target="_blank">
                            <div className="wrapper">
                                <div className="icon">{imgtype}</div>
                                <Typography className="button-title">{title}</Typography>
                            </div>
                        </a>
                    </Paper>
                </Paper>
            </Zoom>
        </Box>
    );
};

export default BigButton;
