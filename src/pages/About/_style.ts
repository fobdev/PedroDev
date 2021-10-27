import { SxProps, Theme } from "@mui/system";

const colorPatterns = {
    google_colors: {
        blue: "#4285F4",
        red: "#DB4437",
        yellow: "#F4B400",
        green: "#0F9D58",
    },
    firebase_colors: {
        yellow: "#FFCA28",
        ember: "#FFA000",
        orange: "#F57C00",
    },
    heroku_colors: {
        indigo: "#211746",
        violet: "#430098",
        lavender: "#7673C0",
    },
};

export const references = {
    google: `linear-gradient(30deg,${colorPatterns.google_colors.green} 20px, ${colorPatterns.google_colors.blue} 20px, ${colorPatterns.google_colors.blue} 40px, ${colorPatterns.google_colors.red} 40px, ${colorPatterns.google_colors.red} 60px, ${colorPatterns.google_colors.yellow} 60px, ${colorPatterns.google_colors.yellow} 80px, #fff 80px);`,
    firebase: `linear-gradient(30deg, ${colorPatterns.firebase_colors.orange} 10px, ${colorPatterns.firebase_colors.orange} 30px, ${colorPatterns.firebase_colors.ember} 30px, ${colorPatterns.firebase_colors.ember} 50px, ${colorPatterns.firebase_colors.yellow} 50px, ${colorPatterns.firebase_colors.yellow} 70px, #fff 70px);`,
    heroku: `linear-gradient(30deg, ${colorPatterns.heroku_colors.indigo} 10px, ${colorPatterns.heroku_colors.indigo} 30px, ${colorPatterns.heroku_colors.lavender} 30px, ${colorPatterns.heroku_colors.lavender} 50px, ${colorPatterns.heroku_colors.violet} 50px, ${colorPatterns.heroku_colors.violet} 70px, #fff 70px);`,
};

export const style: SxProps<Theme> = {
    backgroundColor: "#eee",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: "2em 0 5em 0",

    ".papers-title": {
        backgroundColor: "red",
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
                background: "linear-gradient(#eee, #fff)",
                borderRadius: "2em",
                border: "2px solid #fff",
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
                        transition: ".33s",
                        display: "flex",
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
                            backgroundColor: "#eef",
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
                "@media (max-width: 780px)": {
                    borderRadius: "0",
                    width: "100%",

                    ".display-box": {
                        ".techselector-paper": {
                            fontSize: ".6em",
                        },
                    },
                },
                "@media (max-width: 500px)": {
                    display: "none",
                },
            },

            ".frontend-techbox, .backend-techbox": {
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                rowGap: "1em",
                columnGap: "2em",
                padding: 0,
                marginTop: "2em",

                "@media (max-width: 780px)": {
                    fontSize: ".4em",
                },
            },
        },
    },
};
