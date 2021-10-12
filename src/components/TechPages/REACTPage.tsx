import ReactIMG from "../../images/reactcode.png";
import Repo from "./model/Repo";
import PageModel from "./model/PageModel";
import { CodeLink } from "./model/CodeLink";

interface Props {
    growIn: boolean;
    image: any;
}

export const REACTPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <PageModel
            image={image}
            growIn={growIn}
            mainTitle="React / Material UI / Sass Projects"
            largeTitle="React & Typescript / Mui + Sass"
        >
            <Repo
                repoLink="https://github.com/fobdev/PedroDev"
                title="PedroDev"
                side="left"
                largeImageLink="https://github.com/fobdev/PedroDev/blob/main/src/App.tsx"
                largeImage={ReactIMG}
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
        </PageModel>
    );
};
export default REACTPage;
