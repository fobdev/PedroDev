import { CodeLink, Repo, Page } from "./models";
import BBMain from "../../images/png/bbmain.png";
import YTmain from "../../images/png/ytmain.png";
import YTmainMin from "../../images/png/bbmain.png";
import BBMainMin from "../../images/png/bbmain-min.png";
import Box from "@mui/material/Box";

interface Props {
    image: any;
}

export const JSPage: React.FC<Props> = ({ image }) => {
    return (
        <Page image={image} mainTitle="Javascript Projects" largeTitle="JavaScript & Discord.JS">
            <Repo
                title="BogueBot"
                repoLink="https://github.com/fobdev/BogueBot"
                side="right"
                largeImage={BBMain}
                largeImagePlaceholder={BBMainMin}
                largeImageLink="https://github.com/fobdev/BogueBot/blob/master/BogueBot.js"
            >
                This is a large scale Discord.JS bot project named{" "}
                <CodeLink link="https://github.com/fobdev/BogueBot/">BogueBot</CodeLink>, a general
                porpuse Discord Bot with full support to music via the{" "}
                <CodeLink link="https://developers.google.com/youtube/v3">YouTube API</CodeLink>,
                with a queue system and a dynamic per-server configuration system made possible with{" "}
                <CodeLink link="https://www.postgresql.org/">PostgreSQL</CodeLink> and{" "}
                <CodeLink link="https://www.heroku.com/">Heroku</CodeLink>, done by me with a local
                helper debugging tool made by{" "}
                <CodeLink link="https://github.com/FranciscoRamon">FranciscoRamon</CodeLink>. <br />
                On the left is a chunk of the main JavaScript file of the client, clicking on it
                will take you to the file inside the repository. The entirety of the back-end was
                made with{" "}
                <CodeLink link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">
                    JavaScript Maps
                </CodeLink>{" "}
                and{" "}
                <CodeLink link="https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files">
                    Discord.JS Listeners
                </CodeLink>
                <br /> Some of the client commands are listed below
                <Box
                    sx={{
                        display: "grid",
                        boxSizing: "border-box",
                        gridTemplateColumns: "auto auto",
                        gridRow: "auto auto",
                        span: {
                            fontWeight: "bold",
                        },
                    }}
                >
                    <ul>
                        <span>Administrative Commands</span>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/admin/ban.js">
                                ban
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/admin/clear.js">
                                clear
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/admin/report.js">
                                report
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/admin/renameserver.js">
                                kick
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/admin/">
                                more commands (7+)
                            </CodeLink>
                        </li>
                    </ul>
                    <ul>
                        <span>Client Commands</span>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/bot/feedback.js">
                                feedback
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/bot/help.js">
                                help
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/bot/invite.js">
                                invite
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/bot/ping.js">
                                prefix
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/bot/">
                                more commands (+3)
                            </CodeLink>
                        </li>
                    </ul>
                    <ul>
                        <span>User Based Commands</span>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/user/avatar.js">
                                avatar
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/user/couple.js">
                                couple
                            </CodeLink>
                        </li>
                        <span>Game Commands</span>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/games/guess.js">
                                guess
                            </CodeLink>
                        </li>
                    </ul>
                    <ul>
                        <span>Fun Commands</span>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/fun/imagesearch.js">
                                imagesearch
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/fun/bigtext.js">
                                bigtext
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/fun/dice.js">
                                dice
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/fun/roll.js">
                                roll
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/fun/">
                                more commands (+6)
                            </CodeLink>
                        </li>
                    </ul>
                </Box>
                <h2 style={{ lineHeight: "0.2em", marginTop: "1.2em" }}>npm modules</h2>
                This is a list of all the packages used in the core backend of the client, with
                packages like <CodeLink link="https://www.npmjs.com/package/i18n">
                    i18n
                </CodeLink>{" "}
                and <CodeLink link="https://www.npmjs.com/package/uws">uws</CodeLink> not being used
                anymore, but still listed in it's{" "}
                <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/package.json">
                    package.json
                </CodeLink>
                <Box
                    sx={{
                        display: "grid",
                        boxSizing: "border-box",
                        gridTemplateColumns: "auto auto",
                        gridRow: "auto auto",
                        span: {
                            fontWeight: "bold",
                        },
                    }}
                >
                    <ul>
                        <li>
                            <CodeLink link="https://www.npmjs.com/package/discord.js">
                                discord.js
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://www.npmjs.com/package/g-i-s">g-i-s</CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://www.npmjs.com/package/i18n">i18n</CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://www.npmjs.com/package/lunicode">
                                lunicode
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://www.npmjs.com/package/merge-img">
                                merge-img
                            </CodeLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <CodeLink link="https://www.npmjs.com/package/ms">ms</CodeLink>
                        </li>

                        <li>
                            <CodeLink link="https://www.npmjs.com/package/number-to-words">
                                number-to-words
                            </CodeLink>
                        </li>

                        <li>
                            <CodeLink link="https://www.npmjs.com/package/numeral">
                                numeral
                            </CodeLink>
                        </li>

                        <li>
                            <CodeLink link="https://www.npmjs.com/package/uws">uws</CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://www.npmjs.com/package/pg">pg</CodeLink>
                        </li>
                    </ul>
                </Box>
            </Repo>
            <Repo
                title="@boguebot/music"
                side="left"
                repoLink="https://github.com/fobdev/BogueBot/tree/master/commands/music"
                largeImage={YTmain}
                largeImagePlaceholder={YTmainMin}
                largeImageLink="https://github.com/fobdev/BogueBot/blob/master/commands/music/music.js"
            >
                This is the music module of the BogueBot, a complete player made possible with the{" "}
                <CodeLink link="https://www.npmjs.com/package/simple-youtube-api">
                    simple-youtube-api
                </CodeLink>{" "}
                package, that is a simplified/cutted-out version of the{" "}
                <CodeLink link="https://www.npmjs.com/package/googleapis">googleapis</CodeLink>{" "}
                package, only used for getting video information, while the audio streaming is dealt
                by the <CodeLink link="https://www.npmjs.com/package/ytdl-core">ytdl-core</CodeLink>{" "}
                package. This is all the packages that the BogueBot Music System uses
                <ul>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/simple-youtube-api">
                            simple-youtube-api
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/ytdl-core">
                            ytdl-core
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/m3u8stream">
                            m3u8stream
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/node-fetch">
                            node-fetch
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.npmjs.com/package/@discordjs/opus">
                            node-opus (@discordjs/opus)
                        </CodeLink>
                    </li>
                </ul>
                The music system contains a mapset of asynchronous Discord.JS listeners that receive
                all the requests from users in a single server while maintaining multi-server
                syncronization and personalization via PostgreSQL. <br />
                As an attempt to save resources from{" "}
                <CodeLink link="https://www.heroku.com/dynos">Heroku Dynos</CodeLink>, without the
                usage of database architectures like{" "}
                <CodeLink link="https://medium.com/@jeeyoungk/how-sharding-works-b4dec46b3f6">
                    sharding
                </CodeLink>
                , the client in it's lifespan was only able to hold 100 servers at once before
                shutdown in December of 2020, and after that, no longer being maintained by myself.
                <br />
                This is the list of all the available music commands
                <Box
                    sx={{
                        display: "grid",
                        boxSizing: "border-box",
                        gridTemplateColumns: "auto auto",
                        gridRow: "auto auto",
                        span: {
                            fontWeight: "bold",
                        },
                    }}
                >
                    <ul>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/music/music.js">
                                music
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/music/subcommands/queue.js">
                                queue
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/music/subcommands/nowplaying.js">
                                nowplaying
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/music/subcommands/pause.js">
                                pause
                            </CodeLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/music/subcommands/repeat.js">
                                repeat
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/music/subcommands/skip.js">
                                skip
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/music/subcommands/earrape.js">
                                earrape
                            </CodeLink>
                        </li>
                        <li>
                            <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/music/subcommands/leave.js">
                                leave
                            </CodeLink>
                        </li>
                    </ul>
                </Box>
                You can check the repository on GitHub, but with a warning:{" "}
                <span style={{ backgroundColor: "#fed" }}>
                    {" "}
                    The Discord.JS version of the client is old, and a lot of changes to the main
                    code must be done before it can run in the current Discord.JS API Version, while
                    it's not maintained anymore, a lot of the logic related to the commands are
                    still valid and completely usable whitin a new Bot Client.
                </span>{" "}
                Check my Typescript Bot Model for more information.
            </Repo>
        </Page>
    );
};
export default JSPage;
