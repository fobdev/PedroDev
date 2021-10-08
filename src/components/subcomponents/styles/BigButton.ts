import { SxProps, Theme } from "@mui/system";

export const mainBigButtonContainer = (colorPattern: string) => {
    const Style: SxProps<Theme> = {
        ".paper-content": {
            display: "flex",
            justifyContent: "center",
            padding: "1em 2em 1em 2em",
            background: colorPattern,
            ".icon": {
                fontSize: "1.6em",
                alignSelf: "center",
            },
            ".button-title": {
                padding: ".5em 0 .5em 0",
                fontWeight: "200",
                fontSize: "2em",
            },
            a: {
                textDecoration: "none",
                color: "black",
                borderRadius: "5em",
            },
            ".wrapper": {
                transition: ".5s",
                cursor: "pointer",
                display: "flex",
                columnGap: "1em",
                padding: "0 3em 0 3em",
                boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, .4)",
                backgroundColor: "white",
                borderRadius: "5em",
            },
            ".wrapper:active": {
                transition: ".06s",
                boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, .4)",
            },
            ".wrapper:hover": {
                transition: ".5s",
                background: "#eff",
            },
        },
    };
    return Style;
};
