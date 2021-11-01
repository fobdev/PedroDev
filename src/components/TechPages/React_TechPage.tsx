import ReactIMG from "../../images/png/reactcode.png";
import ReactIMGMin from "../../images/png/reactcode-min.png";
import bbStandings from "../../images/png/bbstandings.png";
import { Repo, Page, CodeLink, Paragraph, ItemsList } from "./models";
import { ListItem } from "@mui/material";

interface Props {
    image: any;
}

export const REACTPage: React.FC<Props> = ({ image }) => {
    const listItemMapper = (title: string, array: Array<string>) => {
        return (
            <ItemsList title={title}>
                {array.map((element) => (
                    <ListItem>
                        <CodeLink link={`https://www.npmjs.com/package/${element}`}>
                            {element}
                        </CodeLink>
                    </ListItem>
                ))}
            </ItemsList>
        );
    };

    return (
        <Page image={image} mainTitle="React Projects">
            <Repo
                repoLink="https://github.com/fobdev/PedroDev"
                title="PedroDev"
                side="left"
                largeImageLink="https://github.com/fobdev/PedroDev/blob/main/src/App.tsx"
                largeImage={ReactIMG}
                largeImagePlaceholder={ReactIMGMin}
            >
                <Paragraph>
                    My personal portfolio, made completely in React in junction with Typescript.
                    This project is still under development and I push commits to it daily.
                </Paragraph>
                {listItemMapper("React Dependencies", [
                    "@types/react",
                    "@types/react-dom",
                    "@types/react-router-dom",
                ])}
                {listItemMapper("Other Typescript Dependencies", ["@types/lodash", "@types/node"])}
                {listItemMapper("Other Dependencies", [
                    "@mui/material",
                    "@mui/icons-material",
                    "@mui/lab",
                    "@mui/styles",
                    "firebase",
                    "i18next",
                    "emailjs-com",
                ])}
                <Paragraph>
                    If you want to help me develop my website, feel free to send requests to this
                    repository.
                </Paragraph>
            </Repo>
            <Repo
                largeImage={bbStandings}
                largeImageLink="https://github.com/fobdev/standings/blob/master/src/pages/Home.tsx"
                largeImagePlaceholder={ReactIMGMin}
                repoLink="https://github.com/fobdev/standings/"
                side="right"
                title="standings-fetch"
            >
                <Paragraph>
                    This is a project that I made as a test for a company, where they wanted me to
                    fetch the contents of a public API that contains{" "}
                    <CodeLink link="https://github.com/azharimm/football-standings-api">
                        Football Standings
                    </CodeLink>{" "}
                    from several Leagues, and my job was to show the content in a table, for each of
                    the leagues available. I mainly used{" "}
                    <CodeLink link="https://www.npmjs.com/package/axios">axios</CodeLink> for the
                    fetch requests and made a Typescript fetcher using interfaces to get the JSON
                    objects.
                </Paragraph>
                {listItemMapper("React Dependencies", [
                    "@types/react",
                    "@types/react-dom",
                    "@types/react-router-dom",
                ])}
                {listItemMapper("Other Typescript Dependencies", ["@types/node"])}
                {listItemMapper("Other Dependencies", [
                    "@mui/icons-material",
                    "@mui/material",
                    "@mui/lab",
                    "axios",
                ])}
                <Paragraph>
                    Feel free to check it, I created a fetch system with axios that is completely
                    modular, and I use it basically all my projects that I need API fetching:
                </Paragraph>
            </Repo>
        </Page>
    );
};
