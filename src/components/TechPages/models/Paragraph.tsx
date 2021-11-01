import { Typography } from "@mui/material";
interface Props {
    children: any;
}

export const Paragraph: React.FC<Props> = ({ children }) => {
    return (
        <Typography variant="body1" fontWeight="300">
            {children}
        </Typography>
    );
};
