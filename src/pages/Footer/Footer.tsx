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
                Pedro Henrique - 2023
            </Typography>
            <Typography className="footer-title" fontWeight="100">
                Last Update: June 09 of 2023
            </Typography>
        </Box>
    );
};
