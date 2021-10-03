import { SxProps, Theme } from "@mui/system";
const main_color = "#49a6e9";

export const mainAboutContainer: SxProps<Theme> = {
    height: "100vh",
    backgroundColor: "white",

    ".title": {
        paddingTop: ".5em",
        paddingBottom: ".5em",
        fontWeight: "200",
        textAlign: "center",
    },

    ".papers": {
        display: "flex",
        columnGap: "6em",
        justifyContent: "center",

        ".title-fe, .title-be": {
            fontWeight: "200",
            color: "black",
        },

        ".left-paper, .right-paper": {
            backgroundColor: "#eee",
            display: "flex",
            columnGap: "1em",

            ".code-icon, .settings-icon": {
                fontSize: "5em",
                backgroundColor: "white",
                borderRadius: "5em",
                boxShadow: "12px 12px 5px 1px rgba(0, 0, 255, .2)",
            },
        },

        ".middle-paper": {
            display: "flex",

            ".middle-box": {
                display: "flex",
                backgroundColor: "white",
                padding: "2em",
                columnGap: "1em",
                ".cloud-icon": {
                    fontSize: "2em",
                },

                ".title-cd": {
                    fontWeight: "200",
                    fontSize: "2em",
                },
            },
        },

        ".left-box, .right-box": {
            display: "flex",
            padding: "1em 2em 1em 2em",
            justifyContent: "center",
            columnGap: "2em",
        },
    },
};
