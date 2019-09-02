
const chalk = require("chalk");
const boxen = require("boxen");


const data = {
    name: chalk.white("             EVELETTE dylan"),
    work: chalk.white("developpeur junior"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~pucerontriton"),
    github: chalk.gray("https://github.com/EVELETTE") + chalk.green("EVELETTE"),
    linkedin: chalk.gray("https://linkedin.com/in/dylan-evelette") + chalk.blue("dylan-evelette"),
    labelWork: chalk.white.bold("       Work:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green(
        boxen(
            [
                `${data.name}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,

                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                EMPTYLINE,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
); //by @leny