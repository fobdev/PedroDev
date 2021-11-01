import { List, Typography } from "@mui/material";
interface Props {
    title: string;
    children: any;
}

export const ItemsList: React.FC<Props> = ({ title, children }) => {
    return (
        <div>
            <Typography variant="h6">{title}</Typography>
            <List dense>{children}</List>
        </div>
    );
};
