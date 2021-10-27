import { Box } from "@mui/system";
import { Paper, Typography, Grow } from "@mui/material";
import { style } from "./_style";

interface Props {
    children: JSX.Element | JSX.Element[];
    title: string;
    image: string;
}

export const Project: React.FC<Props> = ({ children, title, image }) => {
    return (
        <Grow in={true} timeout={{ enter: 500, exit: 0 }} unmountOnExit mountOnEnter>
            <Box sx={style}>
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
