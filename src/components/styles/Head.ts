import { SxProps, Theme } from "@mui/system";
import { main_color } from "./_globals";

export const mainHeadBox: SxProps<Theme> = {
    backgroundColor: "rgba(255,255,255,0.70)",
    backdropFilter: "blur(20px)",

    ".main-container": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        ".title-box": {
            margin: "1em",
            ".title-link": {
                display: "flex",
                textDecoration: "none",
            },
            img: {
                width: "24px",
            },

            ".title": {
                fontFamily: "Roboto",
                userSelect: "none",
                color: "black",
                fontSize: "1.5em",

                span: {
                    color: main_color,
                },
            },
        },

        ".right-box": {
            ".info-box, .links-box": {
                display: "none",
            },

            ".menu": {
                display: "flex",
                color: main_color,
            },
        },

        "@media only screen and (min-width: 720px)": {
            ".right-box": {
                display: "inline-flex",
                columnGap: "2em",
                ".menu": {
                    display: "none",
                },
                ".info-box, .links-box": {
                    display: "flex",
                    alignContent: "center",
                    ".router-home, .router-projects, .router-contact": {
                        textDecoration: "none",
                        color: "black",

                        "&:hover": {
                            color: main_color,
                        },
                    },
                },

                ".whatsapp-button, .linkedin-button, .github-button": {
                    color: main_color,
                },
            },
        },
    },
};
