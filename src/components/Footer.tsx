import { Container, Paper, Typography } from "@mui/material";

export default function Footer() {
    return (
        <div>
            <Container
                sx={{
                    display: "flex",
                    "@media only screen and (max-width: 780px)": { display: "none" },
                }}
            >
                <Paper
                    square={true}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        position: "fixed",
                        padding: "0 2em 0 2em",
                        zIndex: "999",
                        ".sub-left, .sub-right": {
                            fontFamily: "Roboto",
                            fontWeight: "300",
                        },
                    }}
                >
                    <Typography className="sub-left" variant="subtitle2">
                        🛠️ This website is currently under development, but thank you for stopping
                        by!
                    </Typography>

                    <Typography className="sub-right" variant="subtitle2">
                        Made by Pedro Henrique
                    </Typography>
                </Paper>
            </Container>
        </div>
    );
}
