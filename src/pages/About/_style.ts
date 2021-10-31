import { SxProps, Theme } from "@mui/system";

export const style: SxProps<Theme> = {
    background: "linear-gradient(90deg, rgba(241,253,255,1) 0%, rgba(255,238,250,1) 100%)",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: "2em 0 5em 0",

    ".papers-title": {
        paddingBottom: "1em",
        fontWeight: "200",
        textAlign: "center",
    },

    ".papers": {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",

        ".main-box": {
            display: "flex",
            flexDirection: "column",
            rowGap: "2em",
            alignItems: "center",
            ".main-title-paper": {
                borderRadius: "1em",
                "@media (max-width: 780px)": {
                    width: "100%",
                    borderRadius: 0,
                },

                ".display-box": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    columnGap: "2em",
                    padding: 0,

                    button: {
                        border: 0,
                        background: "none",
                        borderRadius: "1em",
                        fontSize: "1em",
                    },
                    ".techselector-paper": {
                        display: "flex",
                        transition: ".33s",
                        borderRadius: "1em",
                        padding: ".5em 1em .5em 1em",
                        columnGap: "1em",
                        cursor: "pointer",
                        userSelect: "none",
                        ".code-icon": {
                            boxShadow: "3px 3px 3px 1px rgba(0, 0, 0, .4)",
                        },
                        "&:hover": {
                            transition: ".10s",
                            backgroundColor: "#f5f5ff",
                        },
                        "&:active": {
                            transition: ".06s",
                            boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, .4)",
                            ".code-icon": {
                                boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, .4)",
                            },
                        },
                    },
                },
                ".main-title-box": {
                    padding: "1em 4em 1em 4em",
                    ".main-title": {
                        fontSize: "3em",
                        alignSelf: "center",
                        fontWeight: "200",
                        color: "black",
                    },

                    ".code-icon, .settings-icon": {
                        fontSize: "3em",
                        backgroundColor: "white",
                        borderRadius: "5em",
                    },
                },
            },

            ".stack-techbox": {
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                rowGap: "1em",
                columnGap: "2em",
                padding: 0,
                marginTop: "2em",
            },
        },
    },

    "@media (max-width: 780px)": {
        ".stack-techbox": {
            fontSize: ".4em",
        },

        ".techselector-paper": {
            fontSize: ".6em",
        },
    },

    "@media (max-width: 500px)": {
        ".display-box": {
            flexDirection: "column",
            rowGap: "1em",
            marginBottom: "2em",
        },
    },
};
