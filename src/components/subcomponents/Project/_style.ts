import { SxProps, Theme } from "@mui/system";

export const style: SxProps<Theme> = {
    maxWidth: "65em",
    ".outside-paper": {
        display: "flex",
        position: "relative",
        background: "linear-gradient(360deg, #eee, #fff)",
        borderRadius: "2em",
        border: "3px solid #fff",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        objectFit: "cover",
        ".outside-title": {
            display: "flex",
            justifyContent: "right",
            padding: "2em 2em 0 0",
            columnGap: "1em",
            img: {
                position: "absolute",
                width: "20em",
                borderRadius: "3em",
                left: "-50px",
                top: "-50px",
                "@keyframes rotate": {
                    from: {
                        transform: "rotate(0deg)",
                    },
                    to: {
                        transform: "rotate(360deg)",
                    },
                },
                animationName: "rotate",
                animationDuration: "60s",
                animationIterationCount: "infinite",
                animationTimingFunction: "linear",
            },
        },
    },

    "@media (max-width: 780px)": {
        ".outside-paper": {
            borderRadius: "0",
            width: "100vw",
        },
        ".outside-title": {
            fontSize: ".5em",
            img: {
                display: "none",
            },
        },
    },

    ".inside-paper": {
        zIndex: "1200",
        margin: "2em",
    },
};
