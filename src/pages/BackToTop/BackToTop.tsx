// MUI
import { IconButton, Slide } from "@mui/material";
import { Box } from "@mui/system";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// Styles
import { style } from "./_style";

// React
import { useState } from "react";

interface Props {}
export const BackToTop: React.FC<Props> = () => {
    const [scrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        return document.documentElement.scrollTop > 20 ? setScrolled(true) : setScrolled(false);
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
};
