import { SxProps, Theme } from "@mui/system";

export const mainTSPContainer: SxProps<Theme> = {
    maxWidth: "65em",
    ".outside-paper": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        ".outside-title": {
            display: "flex",
            justifyContent: "left",
            padding: "2em 0 0 4em",
            columnGap: "1em",

            img: {
                width: "4em",
            },
        },
    },
    ".inside-paper": {
        margin: "2em",
        padding: "1.2em",
    },
};
