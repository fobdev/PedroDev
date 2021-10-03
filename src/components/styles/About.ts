import { SxProps, Theme } from "@mui/system";

const google_colors = {
    blue: "#4285F4",
    red: "#DB4437",
    yellow: "#F4B400",
    green: "#0F9D58",
};

const firebase_colors = {
    yellow: "#FFCA28",
    ember: "#FFA000",
    orange: "#F57C00",
};

const heroku_colors = {
    indigo: "#211746",
    violet: "#430098",
    lavender: "#7673C0",
};

export const mainAboutContainer: SxProps<Theme> = {
    backgroundColor: "#fff",
    padding: "4em 0 4em 0",

    ".title": {
        paddingBottom: "1em",
        fontWeight: "200",
        textAlign: "center",
    },

    ".papers": {
        display: "flex",
        alignItems: "flex-start",
        alignContent: "flex-start",
        columnGap: "6em",
        justifyContent: "center",

        ".left-paper, .right-paper": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            columnGap: "1em",

            ".left-box, .right-box": {
                display: "flex",
                flexWrap: "wrap",
                padding: "1em 2em 1em 2em",
                justifyContent: "center",
                columnGap: "2em",

                ".title-fe, .title-be": {
                    fontWeight: "200",
                    color: "black",
                },
            },

            ".code-icon, .settings-icon": {
                fontSize: "5em",
                backgroundColor: "white",
                borderRadius: "5em",
                boxShadow: "3px 3px 3px 1px rgba(0, 0, 0, .2)",
            },
        },

        ".middle-floating-boxes": {
            userSelect: "none",
            display: "flex",
            flexDirection: "column",
            rowGap: "4em",
            ".gcp-paper, .firebase-paper, .heroku-paper": {
                a: {
                    textDecoration: "none",
                    color: "black",
                    borderRadius: "5em",
                },
                ".MuiPaper-root": {
                    display: "flex",
                    justifyContent: "center",
                },
                ".wrapper": {
                    cursor: "pointer",
                    display: "flex",
                    columnGap: ".5em",
                    padding: "0 3em 0 3em",
                    boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, .4)",
                    backgroundColor: "white",
                    borderRadius: "5em",
                },
                ".wrapper:active": {
                    transition: ".03s",
                    boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, .4)",
                },
            },

            ".gcp-paper > .MuiPaper-root": {
                background: `linear-gradient(30deg,${google_colors.green} 20px, ${google_colors.blue} 20px, ${google_colors.blue} 40px, ${google_colors.red} 40px, ${google_colors.red} 60px, ${google_colors.yellow} 60px, ${google_colors.yellow} 80px, #fff 80px);`,
            },

            ".firebase-paper > .MuiPaper-root": {
                background: `linear-gradient(30deg, ${firebase_colors.orange} 10px, ${firebase_colors.orange} 30px, ${firebase_colors.ember} 30px, ${firebase_colors.ember} 50px, ${firebase_colors.yellow} 50px, ${firebase_colors.yellow} 70px, #fff 70px);`,
            },

            ".heroku-paper > .MuiPaper-root": {
                background: `linear-gradient(30deg, ${heroku_colors.indigo} 10px, ${heroku_colors.indigo} 30px, ${heroku_colors.lavender} 30px, ${heroku_colors.lavender} 50px, ${heroku_colors.violet} 50px, ${heroku_colors.violet} 70px, #fff 70px);`,
            },

            ".middle-paper": {
                display: "flex",
                justifyContent: "center",
                padding: "1.5em",
                columnGap: "1em",
                ".icon": {
                    fontSize: "2em",
                    alignSelf: "center",
                },
                ".clouds-title": {
                    padding: ".5em 0 .5em 0",
                    fontWeight: "200",
                    fontSize: "2em",
                },
            },
        },
    },
};
