import {
    Button,
    Container,
    Dialog,
    Paper,
    TextField,
    Typography,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import emailJS from "emailjs-com";
import { Box } from "@mui/system";
import { mainContactContainer } from "./styles/Contact";
import React, { useState, useRef } from "react";
import { StandardTextFieldProps } from "@mui/material/TextField";

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
    const emailRef = useRef<StandardTextFieldProps>(null);
    const messageRef = useRef<StandardTextFieldProps>(null);
    const subjectRef = useRef<StandardTextFieldProps>(null);

    const [popup, setPopup] = useState(false);
    const [popup_error, setPopup_error] = useState(false);
    const [popup_emptyFields, setPopup_emptyFields] = useState(false);
    const [loading, setLoading] = useState(false);
    const [buttonEnabled, setButtonEnabled] = useState(false);

    const handlePopup = (state: string) => {
        switch (state) {
            case "send_success":
                setPopup(true);
                break;
            case "error":
                setPopup_error(true);
                break;
            case "emptyfields":
                setPopup_emptyFields(true);
                break;
            case "closing":
                setPopup_emptyFields(false);
                setPopup(false);
                setPopup_error(false);
                break;
            default:
                break;
        }
    };

    const handleChange = (prop: keyof userInfo) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [prop]: e.target.value });
        if (prop === "email") {
            if (emailRegex.test(e.target.value)) setButtonEnabled(true);
            else setButtonEnabled(false);
        }
    };

    const handleEmailSending = () => {
        setLoading(true);
        emailObject.email = form.email;
        emailObject.subject = form.subject;
        emailObject.message = form.message;

        if (!emailObject.email || !emailObject.subject || !emailObject.message) {
            setLoading(false);
            handlePopup("emptyfields");
        } else {
            emailJS.send("default_service", "template_tis81xk", emailObject).then(
                function (response) {
                    console.log(response);
                    handlePopup("send_success");

                    // @ts-ignore
                    messageRef.current.value = "";
                    // @ts-ignore
                    subjectRef.current.value = "";

                    setLoading(false);
                },
                function (error) {
                    console.log(error);
                    setLoading(false);
                    handlePopup("error");
                    console.log(error);
                }
            );
        }
    };

    return (
        <Container sx={mainContactContainer} disableGutters>
            <Box className="dev-box" alignSelf="center">
                <Typography variant="h3" className="cuteface">
                    <span />
                </Typography>
                <Typography variant="h5" marginTop="1em">
                    Mail me something
                </Typography>
                <Typography variant="subtitle2">I will respond you as soon as possible.</Typography>
            </Box>
            <Paper className="contact-box" elevation={4}>
                <Typography className="title">Contact Me</Typography>
                <TextField
                    className="email"
                    onChange={handleChange("email")}
                    inputRef={emailRef}
                    defaultValue={form.email}
                    type="email"
                    id="email"
                    variant="outlined"
                    required={true}
                    label="E-mail"
                />
                <TextField
                    className="subject"
                    onChange={handleChange("subject")}
                    inputRef={subjectRef}
                    defaultValue={form.subject}
                    id="subject-field"
                    variant="outlined"
                    label="Subject"
                />
                <TextField
                    className="message"
                    defaultValue={form.message}
                    inputRef={messageRef}
                    onChange={handleChange("message")}
                    multiline
                    rows={4}
                    label="Say something"
                    id="message-field"
                    variant="outlined"
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
                <Dialog open={popup}>
                    <DialogTitle id="alert-dialog-title">{"Thank you!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            I'll be reading your e-mail soon.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handlePopup("closing")} autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={popup_emptyFields}>
                    <DialogTitle id="alert-dialog-title">
                        {"Please fill all the fields."}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Looks like one or more fields is empty, please fill all of them.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handlePopup("closing")} autoFocus>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={popup_error}>
                    <DialogTitle id="alert-dialog-title">
                        {"Oops... Something went wrong."}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            An error occurred trying to send the e-mail.
                            <br />
                            Check the e-mail field, or maybe one of the text fields is blank.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handlePopup("closing")} autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Paper>
        </Container>
    );
}
