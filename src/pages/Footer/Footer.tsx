// MUI
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
            <Box className="icons">
                <a href="https://github.com/fobdev/" rel="noreferrer" target="_blank">
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                </a>
                <a
                    href="https://www.linkedin.com/in/pedro-henrique-799755173/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                </a>
            </Box>
        </Box>
    );
};
