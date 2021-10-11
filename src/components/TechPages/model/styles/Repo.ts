import { SxProps, Theme } from "@mui/system";

export const repoMainBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    margin: "1em",
    textAlign: "left",

    ".repo-title": {
        fontWeight: "500",
    },
    ".repo-description": {
        fontWeight: "300",
    },
    ".repo-link": {
        marginTop: "1em",
        alignSelf: "center",
        display: "inherit",
        textDecoration: "none",
        color: "black",

        ".goto-repo": {
            fontWeight: "200",
            alignSelf: "center",
            fontSize: "2em",
        },
        ".gh-icon": {
            fontSize: "2em",
        },
    },

    ".page-button": {
        display: "flex",
        transition: ".3s",
        justifyContent: "center",
        padding: "1em",
        columnGap: "1em",
        borderRadius: "1em",
        userSelect: "none",
        cursor: "pointer",
        "&:hover": {
            transition: ".3s",
            background: "#eee",
        },
        "&:active": {
            transition: ".05s",
            boxShadow: "1px 1px 1px 0 #000",
        },
    },
};

export default repoMainBox;
