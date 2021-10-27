import { SxProps, Theme } from "@mui/system";

export const style: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    ".MuiLink-root": {
        margin: 0,
        padding: 0,
    },

    ".MuiTypography-root": {
        alignSelf: "center",
        paddingTop: ".5em",
        fontSize: "1em",
    },
    ".icons": {
        display: "flex",
        justifyContent: "center",
    },
};
