import { useState } from "react";
import { IconButton, Slide } from "@mui/material";
import { Box, SxProps, Theme } from "@mui/system";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function BackToTop() {
    const [scrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        return document.documentElement.scrollTop > 20 ? setScrolled(true) : setScrolled(false);
    };

    const style: SxProps<Theme> = {
        display: "flex",
        position: "fixed",
        bottom: "0",
        left: "0",
        margin: "0 0 2em 2em",
        ".arrow": {
            width: "2em",
            height: "2em",
        },
    };

    const handleClick = () => {
        return window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Box sx={style}>
            <Slide direction="up" in={scrolled}>
                <IconButton onClick={handleClick}>
                    <ArrowUpwardIcon className="arrow" />
                </IconButton>
            </Slide>
        </Box>
    );
}
