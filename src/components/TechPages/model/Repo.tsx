import { Paper, Box, Typography, Slide } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { repoMainBoxStyling } from "./styles/Repo";
import { largeImageHoverMainBox } from "./styles/LargeImageHover";
import ImageLoader from "../../utils/ImageLoader";

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
                <Box className="repobox-leftside">
                    <Typography className="repo-title" variant="h4">
                        {title}
                    </Typography>
                    <Typography className="repo-description">{children}</Typography>
                    <a className="repo-link" href={repoLink} rel="noreferrer" target="_blank">
                        <Paper className="page-button" elevation={5}>
                            <GitHubIcon className="gh-icon" />
                            <Typography variant="h3" className="goto-repo">
                                Go to repository
                            </Typography>
                        </Paper>
                    </a>
                </Box>
                <Box className="repobox-rightside">
                    <Box sx={largeImageHoverMainBox(side)}>
                        <a href={largeImageLink} rel="noreferrer" target="_blank">
                            <ImageLoader
                                src={largeImage}
                                placeholder={largeImagePlaceholder}
                                className="bigImage"
                            />
                            {/* <img src={largeImage} alt="Content" className="bigImage" /> */}
                            {/* <video autoPlay muted loop className="bigImage">
                                <source src={largeImage} />
                            </video> */}
                        </a>
                    </Box>
                </Box>
            </Box>
        </Slide>
    );
};
export default Repo;
