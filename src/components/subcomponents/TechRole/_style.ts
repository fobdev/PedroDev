import { SxProps, Theme } from "@mui/system";

export const style = (selected: boolean) => {
    let bgSelection = selected ? "#eef" : "#fff";

    const Style: SxProps<Theme> = {
        borderRadius: "1em",
        alignItems: "center",
        button: {
            transition: ".5s",
            background: bgSelection,
            display: "flex",
            padding: ".7em",
            columnGap: "1em",
            color: "inherit",
            border: "none",
            font: "inherit",
            cursor: "pointer",
            outline: "inherit",
            borderRadius: "1em",
        },
        "button:hover": {
            transition: ".5s",
            background: "#eef",
        },
        ".image": {
            width: "24px",
            height: "24px",
        },
        ".MuiTypography-root": {
            alignSelf: "center",
            padding: 0,
            fontWeight: "400",
        },

        userSelect: "none",
        cursor: "pointer",
        "&:active": {
            transition: ".06s",
            boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, .4)",
        },
    };
    return Style;
};
