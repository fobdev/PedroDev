import { SxProps, Theme } from "@mui/system";

export const globalPageStyle: SxProps<Theme> = {
    ".page-maintitle": {
        fontWeight: "200",
        padding: ".3em",
    },
    ".page-mainbox": {
        display: "flex",
        justifyContent: "space-between",

        ".page-repobox": {
            display: "flex",
            flexDirection: "column",
            rowGap: "2em",
            width: "80%",
            a: {
                textDecoration: "none",
                color: "black",

                code: {
                    background: "#eef",
                },
            },
        },
    },
};

export default globalPageStyle;
