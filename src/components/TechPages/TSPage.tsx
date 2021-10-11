import { Box, Typography } from "@mui/material";
import Project from "../subcomponents/Project";
import DiscordTSIMG from "../../images/discord-typescript.png";
import Repo from "./model/Repo";
import LargeImageHover from "./model/LargeImageHover";
import { globalPageStyle } from "./styles/global";

interface Props {
    growIn: boolean;
    image: any;
}

export const TSPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <Project title="Typescript Projects" image={image} growIn={growIn}>
            <Box sx={globalPageStyle}>
                <Typography className="page-maintitle" variant="h2">
                    Typescript & Discord.JS
                </Typography>
                <Box className="page-mainbox">
                    <Box className="page-repobox">
                        <Repo
                            title="Discord Bot model in Typescript"
                            repo="https://github.com/fobdev/discordbot-typescript"
                        >
                            This is a simple Discord.JS bot model made in typescript, that can
                            execute several basic actions, and can be used as a starting point model
                            to a personalized client, with custom commands and more.
                            <br />
                            The client commands are listed above:
                            <ul>
                                Administrative commands:
                                <li>
                                    <a href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/ban.ts">
                                        <code>ban</code>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/clear.ts">
                                        <code>clear</code>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/kick.ts">
                                        <code>kick</code>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/renameserver.ts">
                                        <code>renameserver</code>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                Client commands:
                                <li>
                                    <a href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/bot/help.ts">
                                        <code>help</code>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/bot/ping.ts">
                                        <code>ping</code>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                Miscellaneous:
                                <li>
                                    <a href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/music/music.ts">
                                        <code>music</code>
                                    </a>
                                </li>
                            </ul>
                            This is not supposed to be a finished client, its just the barebones.{" "}
                            <br /> I already made a finished client in JavaScript with 30+ commands
                            and a complete music engine, check my JavaScript tab for more
                            information about it.
                            <br />
                            You can also go to its repository and fork it:
                        </Repo>
                    </Box>
                    <LargeImageHover
                        image={DiscordTSIMG}
                        link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/clear.ts"
                    />
                </Box>
            </Box>
        </Project>
    );
};
export default TSPage;
