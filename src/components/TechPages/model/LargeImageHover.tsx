import { Box } from "@mui/material";
import { largeImageHoverMainBox } from "./styles/LargeImageHover";

interface Props {
    image: any;
    link: string;
    side: string;
}

export const LargeImageHover: React.FC<Props> = ({ image, link, side }) => {
    return (
        <Box sx={largeImageHoverMainBox(side)}>
            <a href={link} rel="noreferrer" target="_blank">
                <img src={image} alt="" className="bigImage" />
            </a>
        </Box>
    );
};
export default LargeImageHover;
