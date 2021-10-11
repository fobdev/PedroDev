import { Box } from "@mui/system";
import { Paper, Typography, Grow } from "@mui/material";
import { mainTSPContainer } from "./styles/Project";

interface Props {
    children: JSX.Element | JSX.Element[];
    title: string;
    image: string;
    growIn: boolean;
}

export const Project: React.FC<Props> = ({ children, title, image, growIn }) => {
    return (
        <Grow in={growIn} timeout={{ enter: 500, exit: 0 }} unmountOnExit mountOnEnter>
            <Box sx={mainTSPContainer}>
                <Paper className="outside-paper" elevation={2}>
                    <Box className="outside-title">
                        <img src={image} alt="Content" />
                        <Typography variant="h4" fontWeight="300" alignSelf="center">
                            {title}
                        </Typography>
                    </Box>
                    <Paper className="inside-paper" elevation={5}>
                        {children}
                    </Paper>
                </Paper>
            </Box>
        </Grow>
    );
};
export default Project;
