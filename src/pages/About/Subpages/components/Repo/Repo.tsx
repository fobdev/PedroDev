import { Paper, Box, Typography, Slide } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { repoMainBoxStyling } from "./_styles";
import { largeImageHoverMainBox } from "./_imagehoverStyles";
import { ImageLoader } from "../../../../../utils";

interface Props {
    title: string;
    children: any;
    repoLink: string;
    side: string;
    largeImageLink: string;
    largeImage: any;
    largeImagePlaceholder: any;
}

export const Repo: React.FC<Props> = ({
    title,
    children,
    repoLink,
    side,
    largeImageLink,
    largeImage,
    largeImagePlaceholder,
}) => {
    return (
        <Slide direction="up" in={true} timeout={{ enter: 1000, exit: 0 }}>
            <Box sx={repoMainBoxStyling(side)}>
                <Box className="repobox-text">
                    <Typography className="repo-title" variant="h4">
                        {title}
                        <Typography className="repo-description" sx={{ direction: "ltr" }}>
                            {children}
                        </Typography>
                    </Typography>
                    <a className="repo-link" href={repoLink} rel="noreferrer" target="_blank">
                        <Paper className="page-button" elevation={2}>
                            <GitHubIcon className="gh-icon" />
                            <Typography variant="h3" className="goto-repo">
                                Go to repository
                            </Typography>
                        </Paper>
                    </a>
                </Box>
                <Box className="repobox-image">
                    <Box sx={largeImageHoverMainBox(side)}>
                        <a href={largeImageLink} rel="noreferrer" target="_blank">
                            <ImageLoader
                                src={largeImage}
                                placeholder={largeImagePlaceholder}
                                className="bigImage"
                            />
                        </a>
                    </Box>
                </Box>
            </Box>
        </Slide>
    );
};
