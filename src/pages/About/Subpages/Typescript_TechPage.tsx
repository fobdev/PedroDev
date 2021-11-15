import TSimg from "../../../images/png/discord-typescript.png";
import TSimgMin from "../../../images/png/discord-typescript-min.png";
import { Repo, Page, CodeLink, ItemsList, Paragraph } from "./components";
import { ListItem } from "@mui/material";
import { useEffect } from "react";

interface Props {
    image: any;
}

export const TSPage: React.FC<Props> = ({ image }) => {
    useEffect(() => {
        document.title = "PedroDev: Typescript Projects";
    }, []);
    return (
        <Page image={image} mainTitle="Typescript Projects">
            <Repo
                title="Discord Bot Model in Typescript"
                repoLink="https://github.com/fobdev/discordbot-typescript"
                side="left"
                largeImage={TSimg}
                largeImagePlaceholder={TSimgMin}
                largeImageLink="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/clear.ts"
            >
                <Paragraph>
                    This is a simple Discord.JS bot model made in Typescript that can execute basic
                    actions and can be used as a starting point model to a personalized client, with
                    custom commands and more
                </Paragraph>
                <Paragraph>The client commands are listed below</Paragraph>
                <ItemsList title="Administrative Commands">
                    <ListItem>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/ban.ts">
                            ban
                        </CodeLink>
                    </ListItem>
                    <ListItem>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/clear.ts">
                            clear
                        </CodeLink>
                    </ListItem>
                    <ListItem>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/kick.ts">
                            kick
                        </CodeLink>
                    </ListItem>
                    <ListItem>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/renameserver.ts">
                            renameserver
                        </CodeLink>
                    </ListItem>
                </ItemsList>
                <ItemsList title="Client Commands">
                    <ListItem>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/bot/help.ts">
                            help
                        </CodeLink>
                    </ListItem>
                    <ListItem>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/bot/ping.ts">
                            ping
                        </CodeLink>
                    </ListItem>
                </ItemsList>
                <ItemsList title="Miscellaneous Commands">
                    <ListItem>
                        <CodeLink link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/music/music.ts">
                            music
                        </CodeLink>
                    </ListItem>
                </ItemsList>
                <Paragraph>
                    This is not supposed to be a finished client, its just the barebones
                </Paragraph>
                <Paragraph>
                    I already made a finished client in JavaScript with 30+ commands and a complete
                    music engine, check my JavaScript tab for more information about it.
                </Paragraph>
                <Paragraph>You can also go to this repository and fork it</Paragraph>
            </Repo>
        </Page>
    );
};
