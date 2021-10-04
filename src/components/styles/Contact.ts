import { SxProps, Theme } from "@mui/system";
const main_color = "#49a6e9";

export const mainContactContainer: SxProps<Theme> = {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    columnGap: "10em",

    ".dev-box": {
        ".MuiTypography-root": {
            fontFamily: "Roboto",
            fontWeight: "200",
            textAlign: "center",
        },
    },

    "@media only screen and (max-width: 780px)": {
        ".dev-box": {
            display: "none",
        },
    },

    ".contact-box": {
        padding: "2em 3em 2em 3em",
        ".email": {
            borderColor: main_color,
            gridArea: "em",
        },
        ".subject": {
            gridArea: "sj",
        },
        ".message": {
            gridArea: "ms",
        },
        ".title": {
            gridArea: "tt",
            fontSize: "3em",
            fontWeight: "200",
        },
        ".loading-button": {
            gridArea: "bs",
            width: "10em",
            borderRadius: "5em",
        },
        backgroundColor: "white",
        display: "grid",
        justifyContent: "center",
        gridGap: "2vh",
        gridTemplateAreas: `"tt tt tt"
                            "em sj sj"
                            "ms ms ms"
                            ". . bs"`,
        "@media only screen and (max-width: 780px)": {
            ".title": {
                fontSize: "2.5em",
                fontWeight: "200",
            },
        },
    },
};
