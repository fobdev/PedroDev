import { SxProps, Theme } from "@mui/system";
import { main_color } from "./_globals";

export const mainContactContainer: SxProps<Theme> = {
    alignItems: "center",
    margin: "2em auto",
    display: "flex",
    justifyContent: "center",
    columnGap: "10em",
    padding: "5em 0 3em 0",
    ".dev-box": {
        ".cuteface": {
            userSelect: "none",
            "span:after": {
                content: '"(づ ◕‿◕ )づ"',
            },

            "span:hover:after": {
                content: '"ლ(◕‿◕ ლ)"',
            },
        },
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
        "@media only screen and (max-width: 500px)": {
            gridTemplateAreas: `"tt tt tt "
                                "em em em"
                                "sj sj sj"
                                "ms ms ms"
                                ". . bs"`,
        },
    },
};
