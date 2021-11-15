import { Page, Repo, Paragraph, CodeLink, ItemsList } from "./components";
import { useEffect } from "react";
import RNimg from "../../../images/png/rnmain.png";
import RNimg_min from "../../../images/png/bbmain-min.png";
import { Button, ListItem } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

interface Props {
    image: any;
}

export const REACTNATIVEPage: React.FC<Props> = ({ image }) => {
    useEffect(() => {
        document.title = "PedroDev: React Native Projects";
    }, []);

    const listItemMapper = (title: string, array: Array<string>) => {
        return (
            <ItemsList title={title}>
                {array.map((element) => (
                    <ListItem>
                        <CodeLink link={`https://www.npmjs.com/package/${element}`}>
                            {element}
                        </CodeLink>
                    </ListItem>
                ))}
            </ItemsList>
        );
    };

    return (
        <Page image={image} mainTitle="React Native Projects">
            <Repo
                title="standings-fetch mobile"
                repoLink="https://github.com/fobdev/reactnative-standings"
                side="left"
                largeImage={RNimg}
                largeImagePlaceholder={RNimg_min}
                largeImageLink="https://github.com/fobdev/discordbot-typescript/blob/master/src/commands/admin/clear.ts"
            >
                <Paragraph>
                    This is the first mobile project that I made with React Native, made as a
                    challange.
                </Paragraph>
                <Paragraph>
                    The API consuming part of it is identical as the{" "}
                    <CodeLink link="https://pedrodev.net/projects/frontend/react">
                        standings-fetch React Project
                    </CodeLink>
                    , I just ported it with small changes, and using the React Native
                    navigation/routing module.
                </Paragraph>
                <Paragraph>
                    Made with <CodeLink link="https://expo.dev/client">Expo</CodeLink>, you can run
                    it by accessing the Expo Project Page:
                </Paragraph>
                <Button
                    href="https://expo.dev/@fobenga/reactnative-standings"
                    rel="noreferrer"
                    target="_blank"
                    disableRipple
                    sx={{
                        display: "flex",
                        padding: "1em",
                        margin: "1em",
                        borderRadius: "5em",
                    }}
                    startIcon={<PhoneAndroidIcon />}
                >
                    Go to Expo Project Page
                </Button>
                <Paragraph>
                    Parts of the project were made using the{" "}
                    <CodeLink link="https://callstack.github.io/react-native-paper/">
                        React Native Paper
                    </CodeLink>{" "}
                    component library, like the Table component.
                </Paragraph>
                {listItemMapper("React Dependencies", [
                    "react",
                    "react-native",
                    "react-native-paper",
                    "@react-navigation/native",
                    "@react-navigation/stack",
                ])}
                {listItemMapper("Other Dependencies", ["axios", "expo"])}
                <Paragraph>
                    I don't maintain this project, was only a one-time project made just to display
                    my skills in React Native, and many other projects related to React Native are
                    on the way!
                </Paragraph>
                <Paragraph>
                    You can still check the repository, fork it, or do whatever you want!
                </Paragraph>
            </Repo>
        </Page>
    );
};
