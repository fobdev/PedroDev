import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IconButton, Slide } from "@mui/material";

export default function BackToTop() {
    const main_color = "#49a6e9";
    const [scrolled, setScrolled] = useState(false);
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 20) {
            setScrolled(true);
        } else setScrolled(false);
    };
    return (
        <div
            style={{
                display: "flex",
                position: "fixed",
                bottom: "0",
                left: "0",
                margin: "0 0 2em 2em",
            }}
        >
            <Slide direction="up" in={scrolled}>
                <IconButton
                    onClick={() =>
                        window.scrollBy({
                            top: -999,
                            left: 0,
                            behavior: "smooth",
                        })
                    }
                    sx={{}}
                >
                    <ArrowUpwardIcon
                        sx={{
                            width: "2em",
                            height: "2em",
                        }}
                    />
                </IconButton>
            </Slide>
        </div>
    );
}
