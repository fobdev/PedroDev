import { CodeLink, ItemsList, Page, Paragraph, Repo } from "./models";
import directxImage from "../../images/png/directx.png";
import directxMinImage from "../../images/png/bbmain-min.png";
import { ListItem, Typography } from "@mui/material";
interface Props {
    image: any;
}

export const CPage: React.FC<Props> = ({ image }) => {
    return (
        <Page image={image} mainTitle="C/C++ Projects">
            <Repo
                title="Snake in DirectX 9"
                repoLink="https://github.com/fobdev/snake-directxAPI"
                side="right"
                largeImage={directxImage}
                largeImagePlaceholder={directxMinImage}
                largeImageLink="https://github.com/fobdev/snake-directxAPI/blob/me/Engine/Game.cpp"
            >
                <Paragraph>
                    This is one of my first projects using actual hardcore C++, with memory
                    allocation, address management, low-level pixel drawing, analictic geometry and
                    trigonometry.
                </Paragraph>
                <Paragraph>
                    The snake rules are the default rules of the main snake game, and when you pass
                    "levels", some obstacles start to show up in{" "}
                    <CodeLink link="https://github.com/fobdev/snake-directxAPI/blob/me/Engine/Board.cpp">
                        The Grid
                    </CodeLink>
                    .
                </Paragraph>
                <Paragraph>
                    This project was made possible because of a framework called{" "}
                    <CodeLink link="https://wiki.planetchili.net/index.php/Chili_Framework">
                        Chili Framework
                    </CodeLink>
                    , a mid level framework used to call drawing functions and a working{" "}
                    <CodeLink link="https://github.com/fobdev/snake-directxAPI/blob/me/Engine/Game.cpp">
                        Game Loop
                    </CodeLink>
                    .
                </Paragraph>
                <Paragraph>
                    <Typography variant="body1" fontWeight="300">
                        These are the game rules and logic, also available in the{" "}
                        <CodeLink link="https://github.com/fobdev/snake-directxAPI/tree/1.0#readme">
                            README.md
                        </CodeLink>{" "}
                        of the project in the GitHub Repository:
                    </Typography>
                </Paragraph>
                <ItemsList title="Game Rules">
                    <ListItem>
                        <Typography variant="subtitle2" fontWeight="400">
                            <b>Catch</b> all the points without hitting walls, obstacles and
                            youself.
                        </Typography>
                    </ListItem>
                </ItemsList>
                <ItemsList title="Game Logic">
                    <ListItem>
                        <Typography variant="subtitle2" fontWeight="400">
                            <b>Food</b> will appear randomly in the grid size of 1 around all the
                            grid.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="subtitle2" fontWeight="400">
                            <b>Level</b> will increase after the Upper score fills completely.
                            Levels can or cannot spawn obstacles, as mentioned below.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="subtitle2" fontWeight="400">
                            <b>Obstacles</b> will spawn with a grid size of 1 in levels based in the
                            formula: <code>{"(level > 0 && level % 2 == 0)"}</code>
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="subtitle2" fontWeight="400">
                            <b>Countdown</b> is the amount of time that the player have to eat
                            another food. The countdown increases at every food eaten in the level,
                            and decreases while the player is moving. When the countdown fills up
                            the entire grid, a new level starts. When the countdown reaches 0, it is
                            declared GAME OVER.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="subtitle2" fontWeight="400">
                            <b>Endgame</b> will happens when the snake hits the wall, the head hits
                            itself or the countdown of the level finishes
                        </Typography>
                    </ListItem>
                </ItemsList>
                <Paragraph>
                    This repository does not have any external dependencies for it's execution and
                    it's a completely offline client. You can freely clone or fork the project and
                    it will be working perfectly fine.
                </Paragraph>
                <Paragraph>
                    Also check out{" "}
                    <CodeLink link="https://github.com/planetchili/chili_framework">
                        Chili Framework Repository
                    </CodeLink>{" "}
                    for more information about the Framework.
                </Paragraph>
            </Repo>
        </Page>
    );
};
export default CPage;
