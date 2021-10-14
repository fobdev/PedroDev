import { SxProps, Theme } from "@mui/system";

export let largeImageHoverMainBox = (side: string) => {
    const mainStyle: SxProps<Theme> = {
        display: "flex",
        flexDirection: "column",
        rowGap: "2em",
        alignContent: "space-around",
        marginBottom: "2em",
        marginTop: "5em",
    };

    const right: SxProps<Theme> = {
        ...mainStyle,
        ".bigImage": {
            maxWidth: "100%",
            objectFit: "contain",
            transition: "0.3s",
            borderTopLeftRadius: "2em",
            borderBottomLeftRadius: "2em",
            "&:hover": {
                transition: "0.3s",
                boxShadow: "2px -2px 10px #aaa",
                transform: "translate(-5px, 5px)",
            },
        },
    };

    const left: SxProps<Theme> = {
        ...mainStyle,
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

    return side === "right" ? left : right;
};

export default largeImageHoverMainBox;
