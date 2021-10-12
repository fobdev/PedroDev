import PageModel from "./model/PageModel";
import Repo from "./model/Repo";
import bbmusic from "../../images/bbmusic.png";
import { CodeLink } from "./model/CodeLink";

interface Props {
    growIn: boolean;
    image: any;
}

export const JSPage: React.FC<Props> = ({ growIn, image }) => {
    return (
        <PageModel
            image={image}
            growIn={growIn}
            mainTitle="Javascript Projects"
            largeTitle="JavaScript & Discord.JS"
        >
            <Repo
                title="BogueBot"
                repoLink="https://github.com/fobdev/BogueBot"
                side="right"
                largeImage={bbmusic}
                largeImageLink="https://github.com/fobdev/BogueBot/blob/master/commands/music/music.js"
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
                On the right is the complete main source engine of the music system, with the entire
                back-end based on{" "}
                <CodeLink link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">
                    JavaScript Maps
                </CodeLink>{" "}
                and{" "}
                <CodeLink link="https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files">
                    Discord.JS Listeners
                </CodeLink>
            </Repo>
        </PageModel>
    );
};
export default JSPage;
