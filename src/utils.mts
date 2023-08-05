import inquirer from "inquirer";
import chalk from "chalk";

export enum Currencies {
  USD = "usd",
  CAD = "cad",
  AUD = "aud",
  PKR = "pkr",
  HKD = "hkd",
  PHP = "php",
}

export const currency_rates: {
  rates: { [x: string]: number };
} = {
  rates: {
    usd: 1.0,
    cad: 1.33,
    hkd: 7.86,
    pkr: 300,
    aud: 1.46,
    php: 50.0,
  },
};

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

export async function confirmationPrompt(): Promise<
  boolean | undefined
> {
  try {
    let { is_confirm } = await inquirer.prompt({
      type: "confirm",
      message: "Do you wish to continue?",
      name: "is_confirm",
    });
    return is_confirm == undefined
      ? false
      : is_confirm;
  } catch (err) {
    console.log(err);
    return false;
  }
}
