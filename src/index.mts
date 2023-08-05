import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";
import { confirmationPrompt, getUserInput } from "./utils.mjs";
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
            //
            switch(currency_to_exchange) {
              case Currencies.USD:
                isQuit = await confirmationPrompt();
              case Currencies.AUD:
                isQuit = await confirmationPrompt();
              case Currencies.CAD:
                isQuit = await confirmationPrompt();
              case Currencies.HKD:
                isQuit = await confirmationPrompt();
              case Currencies.PHP:
                isQuit = await confirmationPrompt();
              case Currencies.PKR:
                isQuit = await confirmationPrompt();
            }
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
