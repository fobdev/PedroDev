import { SxProps, Theme } from "@mui/system";
import { main_color, pallete } from "../styles/_globals";

export const style: SxProps<Theme> = {
    backgroundColor: pallete.white.backgroundAccent,

    // Buttons Styling
    ".left-side": {
        ".btn-contact, .btn-work": {
            borderRadius: "5em",
            border: "2px solid white",
            background: "white",
            color: main_color,
            fontSize: "1em",
            padding: "1em 4em 1em 4em",
        },

        ".btn-work": {
            "@keyframes gradient": {
                "0%": { backgroundPosition: "left" },
                "100%": { backgroundPosition: "right" },
            },

            background:
                "linear-gradient(270deg, #fff, #fff, #defffe, #c9fffe, #f8e0ff, #f6d9ff, #d1feff, #fff, #fff)",
            backgroundSize: "1200%",
            animationName: "gradient",
            animationDuration: "5s",
            animationTimingFunction: "ease",
            animationIterationCount: "infinite",
        },
    },

    // Hero image
    ".right-side": {
        img: {
            width: "30em",
            borderRadius: "5em",
            alignSelf: "center",
        },
    },

    // Media querys for mobile
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
