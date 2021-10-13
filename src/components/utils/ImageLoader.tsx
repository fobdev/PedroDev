import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";

interface Props {
    src: any;
    placeholder: any;
    alt?: string;
    className?: string;
}

export const ImageLoader: React.FC<Props> = React.memo(
    ({ src, placeholder, alt = "", className }) => {
        const [loading, setLoading] = useState(true);
        const [currentSrc, updateSrc] = useState(placeholder);

        useEffect(() => {
            const imageToLoad = new Image();
            imageToLoad.src = src;
            imageToLoad.onload = () => {
                setLoading(false);
                updateSrc(src);
            };
        }, [src]);

        return (
            <img
                className={className}
                src={currentSrc}
                style={{
                    opacity: loading ? 0.3 : 1,
                }}
                alt={alt}
            />
        );
    }
);

export default ImageLoader;
