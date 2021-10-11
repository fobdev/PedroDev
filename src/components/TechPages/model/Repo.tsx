import { Paper, Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { repoMainBox } from "./styles/Repo";

interface Props {
    title: string;
    children: any;
    repo: string;
}

export const Repo: React.FC<Props> = ({ title, children, repo }) => {
    return (
        <Box sx={repoMainBox}>
            <Typography className="repo-title" variant="h4">
                {title}
            </Typography>
            <Typography className="repo-description">{children}</Typography>
            <a className="repo-link" href={repo} rel="noreferrer" target="_blank">
                <Paper className="page-button" elevation={5}>
                    <GitHubIcon className="gh-icon" />
                    <Typography variant="h3" className="goto-repo">
                        Go to repository
                    </Typography>
                </Paper>
            </a>
        </Box>
    );
};
export default Repo;
