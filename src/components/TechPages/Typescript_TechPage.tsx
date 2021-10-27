import TSimg from "../../images/other/discord-typescript.png";
import TSimgMin from "../../images/other/discord-typescript-min.png";
import { Repo, Page, CodeLink } from "./models";
import { Box } from "@mui/system";

interface Props {
    image: any;
}

export const TSPage: React.FC<Props> = ({ image }) => {
    return (
        <Page image={image} mainTitle="Typescript Projects" largeTitle="Typescript & Discord.JS">
            <Repo
                title="Discord Bot Model in Typescript"
                repoLink="https://github.com/fobdev/discordbot-typescript"
                side="left"
                largeImage={TSimg}
                largeImagePlaceholder={TSimgMin}
                largeImageLink="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/clear.ts"
            >
                This is a simple Discord.JS bot model made in Typescript that can execute basic
                actions and can be used as a starting point model to a personalized client, with
                custom commands and more
                <br />
                The <span>client commands</span> are listed below
                <Box sx={{ span: { fontWeight: "bold" } }}>
                    <ul>
                        <span>Administrative commands</span>
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
                        <span>Client commands</span>
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
                        <span>Miscellaneous</span>
                        <li>
                            <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/music/music.ts">
                                music
                            </CodeLink>
                        </li>
                    </ul>
                </Box>
                This is not supposed to be a finished client, its just the barebones
                <br /> I already made a finished client in JavaScript with 30+ commands and a
                complete music engine, check my JavaScript tab for more information about it.
                <br />
                You can also go to this repository and fork it
            </Repo>
        </Page>
    );
};
export default TSPage;
