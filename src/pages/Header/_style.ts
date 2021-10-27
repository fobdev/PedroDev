import { main_color } from "../styles/_globals";
import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

export const style: SxProps<Theme> = {
    backgroundColor: "rgba(255,255,255,0.70)",
    backdropFilter: "blur(20px)",
    a: { color: `${main_color}` },
    img: { width: "24px" },
    ".link": {
        textDecoration: "none",
        color: "black",
        div: { transition: "all .3s", "&:hover": { color: `${main_color}` } },
    },
    ".title": {
        display: "inherit",
        columnGap: 0.2,
        alignItems: "end",
        ".title-name": {
            span: { color: `${main_color}` },
        },
    },
    ".mobile-menu": {
        display: "none",
        color: main_color,
        margin: 1.1,
    },
    "@media (max-width: 560px)": {
        justifyContent: "space-between",
        ul: {
            display: "none",
        },
        ".mobile-menu": {
            display: "inherit",
        },
    },
};
