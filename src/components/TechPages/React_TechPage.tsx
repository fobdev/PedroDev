import ReactIMG from "../../images/other/reactcode.png";
import ReactIMGMin from "../../images/other/reactcode-min.png";
import bbStandings from "../../images/other/bbstandings.png";
import { Repo, Page, CodeLink } from "./models";

interface Props {
    image: any;
}

export const REACTPage: React.FC<Props> = ({ image }) => {
    return (
        <Page
            image={image}
            mainTitle="React / Material UI / Sass Projects"
            largeTitle="React & Typescript / Mui + Sass"
        >
            <Repo
                repoLink="https://github.com/fobdev/PedroDev"
                title="PedroDev"
                side="left"
                largeImageLink="https://github.com/fobdev/PedroDev/blob/main/src/App.tsx"
                largeImage={ReactIMG}
                largeImagePlaceholder={ReactIMGMin}
            >
                My personal portfolio, made completely in React in junction with Typescript. This
                project is still under development and I push commits to it daily.
                <ul>
                    React Typescript modules used:
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@types/react">
                            @types/react
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@types/react-dom">
                            @types/react-dom
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@types/react-router-dom">
                            @types/react-router-dom
                        </CodeLink>
                    </li>
                </ul>
                <ul>
                    Other Typescript modules:
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@types/lodash">
                            @types/lodash
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@types/node">
                            @types/node
                        </CodeLink>
                    </li>
                </ul>
                <ul>
                    Other modules:
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@mui/material">
                            @mui/material
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@mui/icons-material">
                            @mui/icons-material
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@mui/lab">@mui/lab</CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@mui/styles">
                            @mui/styles
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/firebase">firebase</CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/i18next">i18next</CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/emailjs-com">
                            emailjs-com
                        </CodeLink>
                    </li>
                </ul>
                If you want to help me develop my website, feel free to send requests to this
                repository.
            </Repo>
            <Repo
                largeImage={bbStandings}
                largeImageLink="https://github.com/fobdev/standings/blob/master/src/pages/Home.tsx"
                largeImagePlaceholder={ReactIMGMin}
                repoLink="https://github.com/fobdev/standings/"
                side="right"
                title="standings-fetch"
            >
                This is a project that I made as a test for a company, where they wanted me to fetch
                the contents of a public API that contains{" "}
                <CodeLink link="https://github.com/azharimm/football-standings-api">
                    Football Standings
                </CodeLink>{" "}
                from several Leagues, and my job was to show the content in a table, for each of the
                leagues available. I mainly used{" "}
                <CodeLink link="https://www.npmjs.com/package/axios">axios</CodeLink> for the fetch
                requests and made a Typescript fetcher using interfaces to get the JSON objects.
                <ul>
                    React Typescript modules used
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@types/react">
                            @types/react
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@types/react-dom">
                            @types/react-dom
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@types/react-router-dom">
                            @types/react-router-dom
                        </CodeLink>
                    </li>
                </ul>
                <ul>
                    Other Typescript modules
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@types/node">
                            @types/node
                        </CodeLink>
                    </li>
                </ul>
                <ul>
                    Other modules
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@mui/icons-material">
                            @mui/icons-material
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@mui/material">
                            @mui/material
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@mui/lab">@mui/lab</CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/axios">axios</CodeLink>
                    </li>
                </ul>
                Feel free to check it, I created a fetch system with axios that is completely
                modular, and I use it basically all my projects that I need API fetching:
            </Repo>
        </Page>
    );
};
export default REACTPage;
