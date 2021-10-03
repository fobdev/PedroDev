import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { mainAboutContainer } from "./styles/About";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { useStyles } from "./utils/animations";

export default function About() {
    const { float } = useStyles();

    return (
        <Container sx={mainAboutContainer} maxWidth={false}>
            <Typography className="title" variant="h2">
                Stacks and Technologies
            </Typography>
            <div className="papers">
                <Paper className="left-paper" elevation={3}>
                    <Box className="left-box">
                        <CodeIcon className="code-icon" />
                        <Typography className="title-fe" variant="h2">
                            Front-end
                        </Typography>
                    </Box>
                </Paper>
                <div className={`${float}`}>
                    <Paper className="middle-paper" elevation={0}>
                        <Box className="middle-box">
                            <CloudQueueIcon className="cloud-icon" />
                            <Typography className="title-cd" variant="h2">
                                The Cloud
                            </Typography>
                        </Box>
                    </Paper>
                </div>
                <Paper className="right-paper" elevation={3}>
                    <Box className="right-box">
                        <SettingsIcon className="settings-icon" />
                        <Typography className="title-be" variant="h2">
                            Back-end
                        </Typography>
                    </Box>
                </Paper>
            </div>
        </Container>
    );
}
