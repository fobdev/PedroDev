import { SxProps, Theme } from "@mui/system";

export const globalPageStyle: SxProps<Theme> = {
    ".page-maintitle": {
        display: "flex",
        justifyContent: "right",
        gap: ".5em",
        padding: ".5em .5em 0 0",
        img: {
            width: "1.5em",
            height: "1.5em",
        },
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
        "@media (max-width: 600px)": {
            width: "100%",
            fontSize: ".8em",
        },
    },
    "@media (max-width: 780px)": {
        ".page-maintitle": {
            fontSize: "2em",
            fontWeight: "200",
            padding: ".3em",
        },
    },
};

export default globalPageStyle;
