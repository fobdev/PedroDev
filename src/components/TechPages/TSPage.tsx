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
                <Typography className="page-maintitle" variant="h2" textAlign="right">
                    Typescript & Discord.JS
                </Typography>
                <Box className="page-mainbox">
                    <Box className="page-repobox">
                        <Repo
                            title="Discord Bot Model in Typescript"
                            repo="https://github.com/fobdev/discordbot-typescript"
                        >
                            This is a simple Discord.JS bot model made in Typescript that can
                            execute basic actions and can be used as a starting point model to a
                            personalized client, with custom commands and more.
                            <br />
                            The client commands are listed above:
                            <ul>
                                Administrative commands:
                                <li>
                                    <a
                                        href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/ban.ts"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>ban</code>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/clear.ts"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>clear</code>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/kick.ts"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>kick</code>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/renameserver.ts"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>renameserver</code>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                Client commands:
                                <li>
                                    <a
                                        href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/bot/help.ts"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>help</code>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/bot/ping.ts"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>ping</code>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                Miscellaneous:
                                <li>
                                    <a
                                        href="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/music/music.ts"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <code>music</code>
                                    </a>
                                </li>
                            </ul>
                            This is not supposed to be a finished client, its just the barebones.{" "}
                            <br /> I already made a finished client in JavaScript with 30+ commands
                            and a complete music engine, check my JavaScript tab for more
                            information about it.
                            <br />
                            You can also go to this repository and fork it:
                        </Repo>
                    </Box>
                    <LargeImageHover
                        side="right"
                        image={DiscordTSIMG}
                        link="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/clear.ts"
                    />
                </Box>
            </Box>
        </Project>
    );
};
export default TSPage;
