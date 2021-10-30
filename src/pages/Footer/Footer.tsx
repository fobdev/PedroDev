// MUI
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

// Styles
import { style } from "./_style";

interface Props {}
export const Footer: React.FC<Props> = () => {
    return (
        <Box sx={style}>
            <Typography className="title" fontWeight="300">
                Pedro Henrique
            </Typography>
            <Box className="icons">
                <a href="https://github.com/fobdev/" rel="noreferrer" target="_blank">
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                </a>
                <a
                    href="https://www.linkedin.com/in/pedro-henrique-dev1997/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                </a>
                <a href="https://www.instagram.com/pedrofobs/" rel="noreferrer" target="_blank">
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                </a>
            </Box>
        </Box>
    );
};
