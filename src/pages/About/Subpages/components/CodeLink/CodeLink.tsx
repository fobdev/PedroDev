interface Props {
    link?: string;
    children: any;
}

export const CodeLink: React.FC<Props> = ({ link, children }) => {
    return (
        <a href={link} rel="noreferrer" target="_blank">
            <code>{children}</code>
        </a>
    );
};
