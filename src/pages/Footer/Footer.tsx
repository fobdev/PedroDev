// MUI
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

// Styles
import { style } from "./_style";

interface Props { }
export const Footer: React.FC<Props> = () => {
    return (
        <Box sx={style}>
            <Typography className="title" align="center">
                <Typography fontWeight="300">
                    Webside made by Pedro Henrique using React
                </Typography>
                <Typography fontWeight="300">
                    Last Update: September 02, 2023
                </Typography>
            </Typography>
        </Box>
    );
};
