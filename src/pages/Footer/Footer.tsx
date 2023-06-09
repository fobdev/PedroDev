// MUI
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

// Styles
import { style } from "./_style";

interface Props {}
export const Footer: React.FC<Props> = () => {
    return (
        <Box sx={style}>
            <Typography className="title" fontWeight="300">
                Pedro Henrique - 2022
            </Typography>
            <Typography className="footer-title" fontWeight="100">
                Last Update: 28/08/2022
            </Typography>
        </Box>
    );
};
