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
import { mainContainer } from "./styles/Contact";

const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface userInfo {
    email: string;
    subject: string;
    message: string;
}
export default function Contact() {
    emailJS.init("user_d1mS4JOxBA5704aYP1SJ4");

    let emailObject = {
        email: "",
        subject: "",
        message: "",
    };

    const [form, setForm] = useState<userInfo>(emailObject);
    const [popup, setPopup] = useState(false);
    const [popup_error, setPopup_error] = useState(false);
    const [loading, setLoading] = useState(false);
    const [buttonEnabled, setButtonEnabled] = useState(false);

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
        if (prop === "email") {
            if (emailRegex.test(event.target.value)) setButtonEnabled(true);
            else setButtonEnabled(false);
        }

        setForm({ ...form, [prop]: event.target.value });
    };

    const handleEmailSending = () => {
        setLoading(true);
        emailObject.email = form.email;
        emailObject.subject = form.subject;
        emailObject.message = form.message;

        emailJS.send("default_service", "template_tis81xk", emailObject).then(
            function (response) {
                console.log(response);
                handlePopup("send_success");
                setLoading(false);
            },
            function (error) {
                console.log(error);
                setLoading(false);
                handlePopup("error");
                console.log(error);
            }
        );
    };

    return (
        <Container sx={mainContainer}>
            <Box className="dev-box" alignSelf="center">
                <Typography variant="h3">{"¯\\_(ツ)_/¯"}</Typography>
                <Typography variant="h5" marginTop="1em">
                    Sorry, nothing to see here... yet!
                </Typography>
                <Typography variant="subtitle2">
                    ...but the e-mail form on the right is working fine, feel free to use it!
                </Typography>
            </Box>
            <Box className="contact-box">
                <Typography className="title">Contact Me</Typography>
                <TextField
                    className="email"
                    onChange={handleChange("email")}
                    value={form.email}
                    type="email"
                    id="email"
                    variant="outlined"
                    required={true}
                    label="E-mail"
                />
                <TextField
                    className="subject"
                    onChange={handleChange("subject")}
                    value={form.subject}
                    id="subject-field"
                    variant="outlined"
                    required={true}
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
                    required={true}
                />
                <LoadingButton
                    className="loading-button"
                    loading={loading}
                    disabled={!buttonEnabled}
                    variant="outlined"
                    loadingIndicator="Sending..."
                    onClick={handleEmailSending}
                >
                    Send
                </LoadingButton>
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
            </Box>
        </Container>
    );
}
