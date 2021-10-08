import { SxProps, Theme } from "@mui/system";

export const mainTSPContainer: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "1em",

    ".outside-paper": {
        position: "relative",
    },
    ".outside-title": {
        display: "flex",
        columnGap: "1em",
        margin: "1em 0 1em 3em",
        maxWidth: "70vw",
        img: {
            width: "5em",
        },
    },

    ".inside-paper": {
        padding: "1em",
        alignSelf: "center",
        margin: "0 1em 0 1em",
        maxWidth: "50vw",
    },
};
