import { SxProps, Theme } from "@mui/system";

export const mainTechRolesContainer: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    padding: ".7em",
    borderRadius: "1em",
    columnGap: "1em",
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
