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

export const mainAboutContainer: SxProps<Theme> = {
    backgroundColor: "#eee",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "100vh",
    padding: "2em 1em 2em 1em",

    ".papers-title": {
        backgroundColor: "red",
        paddingBottom: "1em",
        fontWeight: "200",
        textAlign: "center",
    },

    ".papers": {
        display: "flex",
        alignContent: "center",
        columnGap: "10vw",
        justifyContent: "center",

        ".left-side": {
            display: "flex",
            alignSelf: "center",
            marginBottom: "20vh",
            flexDirection: "column",
            rowGap: "2em",
            width: "30vw",

            ".tech-box": {
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1em",
                padding: 0,
                marginTop: "2em",
            },

            ".fe-paper, .be-paper": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
                columnGap: "1em",

                ".fe-box, .be-box": {
                    display: "flex",
                    flexWrap: "wrap",
                    padding: "1em 2em 1em 2em",
                    justifyContent: "center",
                    columnGap: "2em",

                    ".fe-title, .be-title": {
                        fontSize: "3em",
                        alignSelf: "center",
                        fontWeight: "200",
                        color: "black",
                    },

                    ".code-icon, .settings-icon": {
                        fontSize: "3rem",
                        backgroundColor: "white",
                        borderRadius: "5em",
                        boxShadow: "3px 3px 3px 1px rgba(0, 0, 0, .2)",
                    },
                },
            },
        },

        ".right-side": {
            alignSelf: "center",
            marginBottom: "20vh",
            ".cloud-boxes": {
                userSelect: "none",
                borderRadius: "1em",
                display: "flex",
                rowGap: "2em",
                padding: "2em",
                flexDirection: "column",
                ".middle-paper": {
                    display: "flex",
                    justifyContent: "center",
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
    },
};
