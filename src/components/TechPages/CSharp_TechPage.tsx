import { CodeLink, Page, Repo } from "./models";
import bankapi from "../../images/png/bankapi.png";
import bankapi_min from "../../images/png/bbmain-min.png";
import { Paper } from "@mui/material";
interface Props {
    image: any;
}

export const CSharpPage: React.FC<Props> = ({ image }) => {
    return (
        <Page image={image} mainTitle="C# Projects" largeTitle=".NET MVC WebAPI & MongoDB">
            <Repo
                title="bank-dotnet-webapi"
                repoLink="https://github.com/fobdev/bank-dotnet-webapi"
                side="right"
                largeImage={bankapi}
                largeImagePlaceholder={bankapi_min}
                largeImageLink="https://github.com/fobdev/bank-dotnet-webapi/blob/master/Bank.Api/Controllers/TransactionController.cs"
            >
                This is a project that I made as a test for a company, where I needed to prove my
                skills with back-end development, and the architecture that I had to use was{" "}
                <CodeLink link="https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio">
                    ASP.NET Core
                </CodeLink>
                . <br />
                This is a scaffhold for a banking system with user creation, transaction system and
                complete{" "}
                <CodeLink link="https://github.com/fobdev/bank-dotnet-webapi/tree/master/Bank.UnitTests">
                    Unit Testing
                </CodeLink>{" "}
                coverage from all the controllers endpoints. <br />
                In the project's{" "}
                <CodeLink link="https://github.com/fobdev/bank-dotnet-webapi#readme">
                    README.md
                </CodeLink>{" "}
                is the complete documentation with architecture, endpoints and{" "}
                <CodeLink link="https://hub.docker.com/r/fobenga/bank">Docker</CodeLink> usage guide
                <br />I used <CodeLink link="https://www.mongodb.com/">MongoDB</CodeLink> as the{" "}
                <CodeLink link="https://en.wikipedia.org/wiki/Document-oriented_database">
                    Document-oriented Database
                </CodeLink>{" "}
                for this project, with the official{" "}
                <CodeLink link="https://hub.docker.com/_/mongo">MongoDB Docker Image</CodeLink>.{" "}
                <br />
                This is a list of the{" "}
                <CodeLink link="https://www.nuget.org/">NuGet Packages</CodeLink> used in this
                project:
                <ul>
                    NuGet Packages Used
                    <li>
                        <CodeLink link="https://www.nuget.org/packages/MongoDB.Driver/2.14.0-beta1">
                            MongoDB.Driver
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.nuget.org/packages/Swashbuckle.AspNetCore/">
                            Swashbuckle.AspNetCore
                        </CodeLink>
                    </li>
                    <li>
                        <CodeLink link="https://www.nuget.org/packages/AspNetCore.HealthChecks.MongoDb/">
                            HealthChecks.MongoDb
                        </CodeLink>
                    </li>
                </ul>
                This is the architectural model of the ASP.NET MVC WebAPI, with more information in
                the repository:
                <br />
                <Paper
                    elevation={5}
                    sx={{
                        zIndex: "9999",
                        margin: "1em 0 1em 0",
                        transition: "all .5s",
                        img: {
                            width: "100%",
                        },
                        "&:hover": {
                            transform: "scale(1.5)",
                            transformOrigin: "bottom right",
                        },
                    }}
                >
                    <a
                        href="https://github.com/fobdev/bank-dotnet-webapi"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img
                            src="https://raw.githubusercontent.com/fobdev/bank-dotnet-webapi/master/APIModel.png"
                            alt=""
                        />
                    </a>
                </Paper>
                The startup contains the dependency injection of the Database to the DTO content,
                and data serialization of some types that could not be handled out of the box by the
                MongoDB.Driver <br />
                Feel free to clone, fork, or make your own project out of this repository!
            </Repo>
        </Page>
    );
};
