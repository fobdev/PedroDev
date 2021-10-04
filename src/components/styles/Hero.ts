import { SxProps, Theme } from "@mui/system";
const main_color = "#49a6e9";

export const mainHeroContainer: SxProps<Theme> = {
    display: "flex",
    height: "100vh",
    justifyContent: "space-between",
    paddingBottom: "10vh",
    alignItems: "center",

    "@media only screen and (max-height: 580px)": {
        ".hello-text": {
            fontSize: "2em",
        },
        ".the-big-name": {
            fontSize: "3em",
        },
    },
    ".the-big-name, .description, .subtitle, .hello-text": {
        fontFamily: "Roboto",
        fontWeight: "200",
        textAlign: "left",
    },

    ".hello-text": {
        fontWeight: "bold",
    },

    ".description": {
        fontSize: "2em",

        span: {
            textShadow: "0px 0px 2px #000",
        },
    },

    ".subtitle": {
        fontSize: "1.2em",
    },

    ".buttons-box": {
        display: "flex",
        marginTop: "3em",
        justifyContent: "left",
        columnGap: "5em",

        ".work-button, .contact-button": {
            padding: "1em 4em",
            borderRadius: "5em",
            backgroundColor: "white",
            color: main_color,

            ".router-projects": {
                textDecoration: "none",
                color: main_color,
            },
        },
    },
    ".box-image": {
        img: {
            width: "500px",
            borderRadius: "5em",
        },
    },
    "@media only screen and (max-width: 780px)": {
        height: "100vh",

        ".box-image": {
            display: "none",
        },

        ".hello-text, .the-big-name, .description, .subtitle": {
            textAlign: "center",
        },

        ".buttons-box": {
            display: "flex",
            flexDirection: "column",
            rowGap: "1em",
            marginTop: "3em",
            alignItems: "center",

            ".work-button, .contact-button": {
                width: "15rem",
                borderRadius: "5em",
            },
        },
    },
};
