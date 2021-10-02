import {
    Button,
    Container,
    Dialog,
    TextField,
    Typography,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import emailJS from "emailjs-com";
import React, { useState } from "react";
import { Box } from "@mui/system";

interface userInfo {
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const main_color = "#49a6e9";
    emailJS.init("user_d1mS4JOxBA5704aYP1SJ4");

    const [form, setForm] = useState<userInfo>({
        email: "",
        subject: "",
        message: "",
    });

    let emailObject = {
        email: "",
        subject: "",
        message: "",
    };

    const [popup, setPopup] = useState(false);
    const [popup_error, setPopup_error] = useState(false);
    const [loading, setLoading] = useState(false);

    const handlePopup = (state: string) => {
        switch (state) {
            case "send_success":
                setPopup(true);
                break;
            case "closing":
                setPopup(false);
                setPopup_error(false);
                break;
            case "error":
                setPopup_error(true);
                break;
            default:
                break;
        }
    };

    const handleChange = (prop: keyof userInfo) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [prop]: event.target.value });
    };

    const handleEmailSending = () => {
        setLoading(true);
        emailObject.email = form.email;
        emailObject.subject = form.subject;
        emailObject.message = form.message;

        emailJS.send("default_service", "template_tis81xk", emailObject).then(
            function (response) {
                setLoading(false);
                handlePopup("send_success");
            },
            function (error) {
                setLoading(false);
                handlePopup("error");
                console.log("FAILED...", error);
            }
        );
    };

    return (
        <Container
            sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                height: "100vh",
                columnGap: "10em",
                "@media only screen and (max-width: 780px)": {
                    ".dev-container": {
                        display: "none",
                    },
                },

                backgroundColor: "white",
            }}
        >
            <Box
                sx={{
                    ".email": {
                        gridArea: "em",
                    },
                    ".subject": {
                        gridArea: "sj",
                    },
                    ".message": {
                        gridArea: "ms",
                    },
                    ".title": {
                        gridArea: "tt",
                        fontSize: "3em",
                        fontWeight: "200",
                    },
                    ".subtitle": {
                        fontWeight: "100",
                        gridArea: "if",
                        alignSelf: "center",
                    },
                    ".loading-button": {
                        borderRadius: "5em",
                        gridArea: "bs",
                        color: main_color,
                        borderColor: "main_color",
                    },
                    backgroundColor: "white",
                    display: "grid",
                    justifyContent: "center",
                    gridGap: "1em",
                    gridTemplateAreas: `"tt tt"
                                        "em sj"
                                        "ms ms"
                                        "if  bs"`,
                    "@media only screen and (max-width: 780px)": {
                        ".title": {
                            fontSize: "2.5em",
                            fontWeight: "200",
                        },
                    },
                }}
            >
                <Typography className="title" sx={{}}>
                    Contact Me
                </Typography>
                <TextField
                    className="email"
                    onChange={handleChange("email")}
                    value={form.email}
                    id="email"
                    variant="outlined"
                    label="E-mail"
                />

                <TextField
                    className="subject"
                    onChange={handleChange("subject")}
                    value={form.subject}
                    id="subject-field"
                    variant="outlined"
                    label="Subject"
                />
                <TextField
                    className="message"
                    value={form.message}
                    onChange={handleChange("message")}
                    multiline
                    rows={4}
                    id="message-field"
                    variant="outlined"
                    label="Say something..."
                />
                <Typography className="subtitle" variant="subtitle2">
                    You'll be sending a e-mail to silvapedro55@gmail.com
                </Typography>

                <Dialog
                    open={popup}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"E-mail sent!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Thank you for contacting me, I will respond you soon :3
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handlePopup("closing")} autoFocus>
                            You're Welcome!
                        </Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={popup_error}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Oops... Something happened :("}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            An error occurred trying to send the e-mail.
                            <br />
                            Check the e-mail field, maybe it's spelled incorrectly.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handlePopup("closing")} autoFocus>
                            Okay...
                        </Button>
                    </DialogActions>
                </Dialog>

                <LoadingButton
                    className="loading-button"
                    loading={loading}
                    variant="outlined"
                    loadingIndicator="Sending..."
                    onClick={handleEmailSending}
                >
                    Send
                </LoadingButton>
            </Box>
            <Box className="dev-container" alignSelf="center">
                <Typography
                    variant="h3"
                    sx={{ fontFamily: "Roboto", fontWeight: "100", textAlign: "center" }}
                >
                    {"¯\\_(ツ)_/¯"}
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: "Roboto",
                        fontWeight: "200",
                        textAlign: "center",
                        marginTop: "1em",
                    }}
                >
                    Sorry, nothing to see here... yet!
                </Typography>
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontFamily: "Roboto",
                        fontWeight: "300",
                        textAlign: "center",
                    }}
                >
                    My website is under development, but the mailbox on the left is working fine!
                    <br />
                    Feel free to message me :^)
                </Typography>
            </Box>
        </Container>
    );
}
