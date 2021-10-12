import DiscordTSIMG from "../../images/discord-typescript.png";
import CodeLink from "./model/CodeLink";
import { PageModel } from "./model/PageModel";
import Repo from "./model/Repo";

interface Props {
    growIn: boolean;
    image: any;
}

export const TSPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <PageModel
            image={image}
            growIn={growIn}
            mainTitle="Typescript Projects"
            largeTitle="Typescript & Discord.JS"
        >
            <Repo
                title="Discord Bot Model in Typescript"
                repoLink="https://github.com/fobdev/discordbot-typescript"
                side="right"
                largeImage={DiscordTSIMG}
                largeImageLink="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/clear.ts"
            >
                This is a simple Discord.JS bot model made in Typescript that can execute basic
                actions and can be used as a starting point model to a personalized client, with
                custom commands and more.
                <br />
                The client commands are listed above:
                <ul>
                    Administrative commands:
                    <li>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/ban.ts">
                            ban
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/clear.ts">
                            clear
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/kick.ts">
                            kick
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/renameserver.ts">
                            renameserver
                        </CodeLink>
                    </li>
                </ul>
                <ul>
                    Client commands:
                    <li>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/bot/help.ts">
                            help
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/bot/ping.ts">
                            ping
                        </CodeLink>
                    </li>
                </ul>
                <ul>
                    Miscellaneous:
                    <li>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/music/music.ts">
                            music
                        </CodeLink>
                    </li>
                </ul>
                This is not supposed to be a finished client, its just the barebones. <br /> I
                already made a finished client in JavaScript with 30+ commands and a complete music
                engine, check my JavaScript tab for more information about it.
                <br />
                You can also go to this repository and fork it:
            </Repo>
        </PageModel>
    );
};
export default TSPage;
