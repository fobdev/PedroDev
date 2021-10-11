import { Box } from "@mui/material";
import { largeImageHoverMainBox } from "./styles/LargeImageHover";

interface Props {
    image: any;
    link: string;
}

export const LargeImageHover: React.FC<Props> = ({ image, link }) => {
    return (
        <Box sx={largeImageHoverMainBox}>
            <a href={link} rel="noreferrer" target="_blank">
                <img src={image} alt="" className="bigImage" />
            </a>
        </Box>
    );
};
export default LargeImageHover;
