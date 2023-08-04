import inquirer from "inquirer";
import chalk from "chalk";

export async function getUserInput(
  type_inquirer: String,
  message_inquirer: String,
  name_inquirer: String,
  choices: Array<String> = []
) {
  try {
    let userGuess: any;
    if (type_inquirer === "list") {
      userGuess = await inquirer.prompt([
        {
          type: type_inquirer.toLocaleLowerCase(),
          message: chalk.bold.white(
            message_inquirer.toString()
          ),
          name: name_inquirer.toLocaleLowerCase(),
          choices: choices,
        },
      ]);
    } else {
      userGuess = await inquirer.prompt([
        {
          type: type_inquirer.toLocaleLowerCase(),
          message: chalk.bold.white(
            message_inquirer.toString()
          ),
          name: name_inquirer.toLocaleLowerCase(),
        },
      ]);
    }
    return userGuess;
  } catch (e) {
    console.log(chalk.bold.red(e));
  }
}
