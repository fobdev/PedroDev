import { CodeLink, Page, Repo } from "./models";
import bankapi from "../../images/png/bankapi.png";
import bankapi_min from "../../images/png/bbmain-min.png";
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
                            AspNetCore.HealthChecks.MongoDb
                        </CodeLink>
                    </li>
                </ul>
            </Repo>
        </Page>
    );
};
