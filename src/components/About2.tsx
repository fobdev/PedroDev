import { Typography, Container, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Aboutee() {
    const [elevation, setElevation] = useState(4);

    return (
        <Container
            sx={{
                backgroundColor: "#f8f9fa",
                height: "100vh",
            }}
            maxWidth={false}
            disableGutters
        >
            <Typography variant="h2" fontWeight="200" textAlign="left" paddingTop=".5em">
                Projects and Technologies
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    columnGap: "2em",
                    justifyItems: "center",
                    padding: "2em 0 2em 0",
                }}
            >
                <Paper
                    sx={{
                        width: "40vw",
                        borderTopRightRadius: "1em",
                        borderBottomRightRadius: "1em",
                    }}
                    elevation={3}
                >
                    <Typography fontWeight="200" variant="h2" textAlign="center">
                        Lorem ipsum dolor sit amet.
                    </Typography>
                </Paper>

                <Paper
                    sx={{
                        width: "100vw",
                        borderTopLeftRadius: "1em",
                        borderBottomLeftRadius: "1em",
                    }}
                    variant="outlined"
                >
                    <Typography fontWeight="200" variant="h2" textAlign="center">
                        Lorem ipsum dolor sit amet.
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
}
