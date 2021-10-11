import { SxProps, Theme } from "@mui/system";

export let largeImageHoverMainBox = (side: string) => {
    const RightStyle: SxProps<Theme> = {
        display: "flex",
        flexDirection: "column",
        rowGap: "2em",
        alignContent: "space-around",
        marginBottom: "2em",
        marginTop: "3em",

        ".bigImage": {
            maxWidth: "100%",
            objectFit: "contain",
            transition: "0.3s",
            borderTopLeftRadius: "2em",
            borderBottomLeftRadius: "2em",
            "&:hover": {
                transition: "0.3s",
                boxShadow: "-2px -2px 10px #aaa",
                transform: "translate(5px, 5px)",
            },
        },
    };

    const LeftStyle: SxProps<Theme> = {
        display: "flex",
        flexDirection: "column",
        rowGap: "2em",
        alignContent: "space-around",
        marginBottom: "2em",
        marginTop: "3em",

        ".bigImage": {
            maxWidth: "100%",
            objectFit: "contain",
            transition: "0.3s",
            borderTopRightRadius: "2em",
            borderBottomRightRadius: "2em",
            "&:hover": {
                transition: "0.3s",
                boxShadow: "-2px -2px 10px #aaa",
                transform: "translate(5px, 5px)",
            },
        },
    };

    if (side === "right") return RightStyle;
    if (side === "left") return LeftStyle;
};

export default largeImageHoverMainBox;
