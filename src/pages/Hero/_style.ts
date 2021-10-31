import { SxProps, Theme } from "@mui/system";
import { main_color } from "../styles/_globals";

export const style: SxProps<Theme> = {
    "@keyframes backgroundMovement": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
    },

    background: "linear-gradient(270deg, #f1fdff, #fff5fc)",
    backgroundSize: "400% 400%",

    animation: "backgroundMovement 15s ease infinite",

    // Buttons Styling
    ".left-side": {
        ".hero-button": {
            borderRadius: "5em",
            border: "2px solid white",
            background: "white",
            color: main_color,
            fontSize: "1em",
            padding: "1em 4em 1em 4em",
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
