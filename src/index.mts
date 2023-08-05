import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";
import { getUserInput } from "./utils.mjs";
import { Currencies, currency_rates } from "./utils.mjs";

(async function () {
  try {
    figlet.text(
      "Currency Converter",
      {
        font: "3-D",
        horizontalLayout: "fitted",
        verticalLayout: "fitted",
        width: 100,
        whitespaceBreak: true,
      },
      function (err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        } else {
          console.log(data);
          console.log();
        }
      }
    );
    //
    setTimeout(async () => {
        try{
          let isQuit: boolean = true;
          const currencies = Object.values(Currencies); 
          while(isQuit) {
            const currency_to_exchange: string = await getUserInput("list", "Choose Your Currency" ,"currency_to_exchange", currencies);
            const resultant_currency: string = await getUserInput("list", "Choose Your Currency" ,"resultant_currency", currencies);
            let {is_confirm} = await inquirer.prompt({
              type: "confirm",
              message: "Do you want to continue?",
              name: "is_confirm"
            })
            isQuit = is_confirm;
            //
          }
        }catch(err){
          console.log(err);
          throw err;
        }
    }, 3000);
  } catch (err) {
    console.log(err);
    throw err;
  }
})();
