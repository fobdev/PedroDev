import { SxProps, Theme } from "@mui/system";
const main_color = "#49a6e9";

export const mainHeadBox: SxProps<Theme> = {
    backgroundColor: "rgba(255,255,255,0.70)",
    backdropFilter: "blur(20px)",

    ".MuiButton-root": {
        borderRadius: 0,
        color: "black",
        "&:hover": {
            color: main_color,
        },
    },

    ".mainContainer": {
        display: "flex",
        justifyContent: "space-between",

        ".title-box": {
            padding: "1em",
            a: {
                display: "flex",
                textDecoration: "none",
            },
            img: {
                width: "24px",
            },

            ".title": {
                marginLeft: "0.2em",
                fontFamily: "Roboto",
                userSelect: "none",
                color: "black",
                fontSize: "1.5em",
            },

            div: {
                display: "flex",
                width: "10%",
            },

            span: {
                color: main_color,
            },
        },

        ".right-box": {
            display: "flex",
            ".menu": {
                display: "none",
                marginRight: "1em",
                color: main_color,
            },

            "@media only screen and (max-width: 780px)": {
                ".menu": {
                    display: "inherit",
                },
                ".info-box, .links-box": {
                    display: "none",
                },
            },

            ".info-box": {
                padding: 0,
                display: "inherit",
                justifyContent: "right",
                columnGap: "1em",
                listStyle: "none",
                alignItems: "center",
                margin: 0,
                Button: {
                    padding: 0,
                },
            },

            ".links-box": {
                padding: "0 1em 0 2em",
                margin: 0,
                display: "flex",
                listStyle: "none",
                li: {
                    alignSelf: "center",
                },

                ".translate-button": {
                    color: main_color,
                    marginRight: "1em",
                },

                ".MuiIconButton-root": {
                    color: main_color,
                    textDecoration: "none",
                },
                ".discord-button": {
                    width: "24px",
                    height: "24px",
                },
            },
        },
    },
};
