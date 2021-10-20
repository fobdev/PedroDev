import { SxProps, Theme } from "@mui/system";

export const repoMainBoxStyling = (side: any) => {
    let dir: any = side === "right" ? "rtl" : "ltr";

    const dirChange: SxProps<Theme> = {
        direction: dir,
        ul: {
            textAlign: side,
        },
    };

    const mainStyle: SxProps<Theme> = {
        display: "flex",
        textAlign: "left",

        ".repobox-image, .repobox-text": {
            width: "100%",
        },

        "@media (max-width: 780px)": {
            ".repobox-image": {
                display: "none",
            },
        },

        ".repobox-text": {
            margin: "2em",
        },

        ".repo-title": {
            fontWeight: "500",
        },

        ".repo-description": {
            fontWeight: "300",
            ul: {
                listStyle: "none",
                padding: 0,
            },
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

    return { ...dirChange, ...mainStyle };
};

export default repoMainBoxStyling;
