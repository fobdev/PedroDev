import { SxProps, Theme } from "@mui/system";

export const largeImageHoverMainBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    rowGap: "2em",
    alignContent: "space-around",
    marginBottom: "2em",

    ".bigImage": {
        maxWidth: "100%",
        objectFit: "contain",
        transition: "0.3s",
        borderTopLeftRadius: "2em",
        borderBottomLeftRadius: "2em",
        "&:hover": {
            transition: "0.3s",
            boxShadow: "-5px -5px 10px #999",
            transform: "translate(5px, 5px)",
        },
    },
};

export default largeImageHoverMainBox;
