import { SxProps, Theme } from "@mui/system";
import { main_color, page_padding } from "./_globals";

export const mainHeroContainer: SxProps<Theme> = {
    backgroundColor: "#eee",
    display: "flex",
    justifyContent: "center",
    columnGap: "5em",
    padding: page_padding,
    ".left-side": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        maxWidth: "100%",
        ".text": {
            display: "flex",
            flexDirection: "column",
            ".hello": {
                fontSize: "clamp(2em, 5vw, 2.5em)",
                fontWeight: "500",
            },
            ".pedro": {
                fontSize: "clamp(5em, 10vw, 6em)",
                fontWeight: "200",
            },
            ".description": {
                fontSize: "clamp(1em, 5vw ,2em)",
                fontWeight: "200",
                span: {
                    textShadow: "rgb(0 0 0) 0px 0px 2px",
                },
            },
            ".subtitle": {
                fontSize: "clamp(1em, 3vw, 1.3em)",
                fontWeight: "200",
            },
        },
        ".buttons": {
            display: "inherit",
            columnGap: "4em",
            marginTop: "1.5em",
            ".btn-contact, .btn-work": {
                borderRadius: "5em",
                border: "2px solid white",
                background: "white",
                color: main_color,
                fontSize: "1em",
                padding: "1em 4em 1em 4em",

                ".router-projects": {
                    textDecoration: "none",
                    color: main_color,
                },
            },

            ".btn-work": {
                "@keyframes gradient": {
                    "0%": { backgroundPosition: "left" },
                    //"50%": { backgroundPosition: "right" },
                    "100%": { backgroundPosition: "right" },
                },

                background:
                    "linear-gradient(270deg, #fff, #fff, #defffe, #c9fffe, #f8e0ff, #f6d9ff, #d1feff, #fff, #fff)",
                backgroundSize: "1200%",
                animationName: "gradient",
                animationDuration: "5s",
                animationTimingFunction: "ease",
                animationIterationCount: "infinite",

                "&:hover": {},
            },
        },
    },

    ".right-side": {
        display: "flex",
        img: {
            width: "30em",
            borderRadius: "5em",
            alignSelf: "center",
        },
    },

    "@media (max-width: 720px)": {
        ".left-side": {
            textAlign: "center",
            ".text": {
                ".pedro": {
                    lineHeight: "0.9em",
                },
            },
            ".buttons": {
                flexDirection: "column",
                rowGap: "1em",
                width: "60%",
                alignSelf: "center",
            },
        },
        ".right-side": {
            display: "none",
        },
    },

    "@media (max-width: 1000px)": {
        ".right-side": {
            display: "none",
        },
    },
};
