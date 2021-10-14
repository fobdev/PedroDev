import { SxProps, Theme } from "@mui/system";

export const globalPageStyle: SxProps<Theme> = {
    ".page-maintitle": {
        fontWeight: "200",
        padding: ".3em",
    },
    ".page-mainbox": {
        ".page-repobox": {
            display: "flex",
            flexDirection: "column",
            rowGap: "2em",
            a: {
                textDecoration: "none",
                color: "black",
                code: {
                    transition: "all .2s",
                    "&:hover": {
                        boxShadow: "4px 4px 4px #aaa",
                    },
                    background: "#eef",
                },
            },
        },
    },
};

export default globalPageStyle;
