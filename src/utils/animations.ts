import { makeStyles } from "@mui/styles";

export const animations = makeStyles({
    "@keyframes colorChange": {
        "0%": {
            color: "#ee6055",
        },
        "25%": {
            color: "#60d394",
        },
        "50%": {
            color: "#aaf683",
        },
        "75%": {
            color: "#ffd97d",
        },
        "100%": {
            color: "#ff9b85",
        },
    },

    "@keyframes float": {
        "0%": {
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translatey(0px)",
        },
        "50%": {
            boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
            transform: "translatey(-20px)",
        },
        "100%": {
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translatey(0px)",
        },
    },
    "@keyframes float-alt": {
        "0%": {
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.2)",
            transform: "translatey(0px)",
        },
        "50%": {
            boxShadow: "0 10px 15px 0px rgba(0,0,0,0.2)",
            transform: "translatey(-10px)",
        },
        "100%": {
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.2)",
            transform: "translatey(0px)",
        },
    },
    colorChange: {
        animationName: "$colorChange",
        animationDuration: "5s",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
        animationTimingFunction: "linear",
    },
    float: {
        animationName: "$float",
        animationDuration: "8s",
        animationIterationCount: "infinite",
        animationTimingFunction: "ease-in-out",
    },
    float_alt: {
        animationName: "$float-alt",
        animationDuration: "8s",
        animationIterationCount: "infinite",
        animationTimingFunction: "ease-in-out",
    },
});
