import { CodeLink, Repo, Page, Paragraph, ItemsList } from "./models";
import BBMain from "../../images/png/bbmain.png";
import YTmain from "../../images/png/ytmain.png";
import YTmainMin from "../../images/png/bbmain.png";
import BBMainMin from "../../images/png/bbmain-min.png";
import Box from "@mui/material/Box";
import { ListItem, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/system";

interface Props {
    image: any;
}

export const JSPage: React.FC<Props> = ({ image }) => {
    const commandListWrapper = (
        dir: string,
        title: string,
        commands: Array<string>,
        moreAmount: number = 0
    ) => {
        return (
            <ItemsList title={title}>
                {commands.map((command) => (
                    <ListItem>
                        <CodeLink
                            link={`https://github.com/fobdev/BogueBot/blob/master/commands/${dir}/${command}.js`}
                        >
                            {command}
                        </CodeLink>
                    </ListItem>
                ))}
                {moreAmount > 0 ? (
                    <ListItem>
                        <CodeLink
                            link={`https://github.com/fobdev/BogueBot/blob/master/commands/${dir}/`}
                        >
                            more (+{moreAmount})
                        </CodeLink>
                    </ListItem>
                ) : null}
            </ItemsList>
        );
    };

    const packageListWrapper = (pkgArray: Array<string>, title: string = "") => {
        return pkgArray.map((pkg) => (
            <ItemsList title={title}>
                <ListItem>
                    <CodeLink link={`https://www.npmjs.com/package/${pkg}`}>{pkg}</CodeLink>
                </ListItem>
            </ItemsList>
        ));
    };

    const gridStying: SxProps<Theme> = {
        display: "grid",
        marginTop: ".5em",
        boxSizing: "border-box",
        gridTemplateColumns: "auto auto",
        gridRow: "auto auto",
        span: {
            fontWeight: "bold",
        },
    };

    return (
        <Page image={image} mainTitle="Javascript Projects">
            <Repo
                title="BogueBot"
                repoLink="https://github.com/fobdev/BogueBot"
                side="right"
                largeImage={BBMain}
                largeImagePlaceholder={BBMainMin}
                largeImageLink="https://github.com/fobdev/BogueBot/blob/master/BogueBot.js"
            >
                <Paragraph>
                    This is a large scale Discord.JS bot project named{" "}
                    <CodeLink link="https://github.com/fobdev/BogueBot/">BogueBot</CodeLink>, a
                    general porpuse Discord Bot with full support to music via the{" "}
                    <CodeLink link="https://developers.google.com/youtube/v3">YouTube API</CodeLink>
                    , with a queue system and a dynamic per-server configuration system made
                    possible with <CodeLink link="https://www.postgresql.org/">PostgreSQL</CodeLink>{" "}
                    and <CodeLink link="https://www.heroku.com/">Heroku</CodeLink>, done by me with
                    a local helper debugging tool made by{" "}
                    <CodeLink link="https://github.com/FranciscoRamon">FranciscoRamon</CodeLink>.
                </Paragraph>
                <Paragraph>
                    On the left is a chunk of the main JavaScript file of the client, clicking on it
                    will take you to the file inside the repository. The entirety of the back-end
                    was made with{" "}
                    <CodeLink link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">
                        JavaScript Maps
                    </CodeLink>{" "}
                    and{" "}
                    <CodeLink link="https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files">
                        Discord.JS Listeners
                    </CodeLink>
                </Paragraph>
                <Paragraph>Some of the client commands are listed below</Paragraph>
                <Box sx={gridStying}>
                    {commandListWrapper(
                        "admin",
                        "Admin Commands",
                        ["ban", "clear", "report", "kick"],
                        7
                    )}
                    {commandListWrapper(
                        "bot",
                        "Client Commands",
                        ["feedback", "help", "invite", "prefix"],
                        3
                    )}
                    {commandListWrapper("user", "User Commands", ["avatar", "couple"])}
                    {commandListWrapper(
                        "fun",
                        "Fun Commands",
                        ["imagesearch", "bigtext", "dice", "roll"],
                        6
                    )}
                </Box>
                <Typography variant="h4" fontWeight="bold" marginTop=".5em">
                    npm modules
                </Typography>
                <Paragraph>
                    This is a list of all the packages used in the core backend of the client, with
                    packages like{" "}
                    <CodeLink link="https://www.npmjs.com/package/i18n">i18n</CodeLink> and{" "}
                    <CodeLink link="https://www.npmjs.com/package/uws">uws</CodeLink> not being used
                    anymore, but still listed in it's{" "}
                    <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/package.json">
                        package.json
                    </CodeLink>
                </Paragraph>
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
                    {packageListWrapper(["discord.js", "g-i-s", "i18n", "lunicode", "merge-img"])}
                    {packageListWrapper(["ms", "number-to-words", "numeral", "uws", "pg"])}
                </Box>
            </Repo>
            <Repo
                title="BogueBot Music Module"
                side="left"
                repoLink="https://github.com/fobdev/BogueBot/tree/master/commands/music"
                largeImage={YTmain}
                largeImagePlaceholder={YTmainMin}
                largeImageLink="https://github.com/fobdev/BogueBot/blob/master/commands/music/music.js"
            >
                <Paragraph>
                    This is the music module of the BogueBot, a complete player made possible with
                    the{" "}
                    <CodeLink link="https://www.npmjs.com/package/simple-youtube-api">
                        simple-youtube-api
                    </CodeLink>{" "}
                    package, that is a simplified/cutted-out version of the{" "}
                    <CodeLink link="https://www.npmjs.com/package/googleapis">googleapis</CodeLink>{" "}
                    package, only used for getting video information, while the audio streaming is
                    dealt by the{" "}
                    <CodeLink link="https://www.npmjs.com/package/ytdl-core">ytdl-core</CodeLink>{" "}
                    package. This is all the packages that the BogueBot Music System uses
                </Paragraph>
                {packageListWrapper(
                    ["simple-youtube-api", "ytdl-core", "m3u8stream", "node-fetch", "node-opus"],
                    ""
                )}
                <Paragraph>
                    The music system contains a mapset of asynchronous Discord.JS listeners that
                    receive all the requests from users in a single server while maintaining
                    multi-server syncronization and personalization via PostgreSQL. <br />
                    As an attempt to save resources from{" "}
                    <CodeLink link="https://www.heroku.com/dynos">Heroku Dynos</CodeLink>, without
                    the usage of database architectures like{" "}
                    <CodeLink link="https://medium.com/@jeeyoungk/how-sharding-works-b4dec46b3f6">
                        sharding
                    </CodeLink>
                    , the client in it's lifespan was only able to hold 100 servers at once before
                    shutdown in December of 2020, and after that, no longer being maintained by
                    myself.
                </Paragraph>
                <Paragraph>
                    This is the list of all the available{" "}
                    <CodeLink link="https://github.com/fobdev/BogueBot/blob/master/commands/music/music.js">
                        music subcommands
                    </CodeLink>
                </Paragraph>
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
                    {commandListWrapper("/music/subcommands/", "Music Subcommands", [
                        "queue",
                        "nowplaying",
                        "pause",
                        "repeat",
                        "skip",
                        "earrape",
                        "leave",
                    ])}
                </Box>
                <Paragraph>
                    You can check the repository on GitHub, but with a warning:
                    <Paragraph>
                        <span style={{ backgroundColor: "#fed" }}>
                            The Discord.JS version of the client is old, and a lot of changes to the
                            main code must be done before it can run in the current Discord.JS API
                            Version, while it's not maintained anymore, a lot of the logic related
                            to the commands are still valid and completely usable whitin a new Bot
                            Client.
                        </span>{" "}
                    </Paragraph>
                </Paragraph>
                <Paragraph>Check my Typescript Bot Model for more information.</Paragraph>
            </Repo>
        </Page>
    );
};
export default JSPage;
