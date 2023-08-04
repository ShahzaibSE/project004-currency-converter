import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";
import { getUserInput } from "./utils.mjs";

enum Currencies {
  USD = "usd",
  CAD = "cad",
  QUID = "quid",
  PKR = "pkr",
  EUR = "eur",
  RIYAL = "riyal"
}

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
          let isQuit: boolean = false;
          const currencies = Object.values(Currencies); 
          while(!isQuit) {
            const currency_options: string = await getUserInput("check", "Choose Your Currency" ,"currency1", currencies);
            //
            switch(currency_options) {
              case Currencies.USD:
                console.log("USD")
              case Currencies.EUR:
                console.log("EUR");
              case Currencies.CAD:
                console.log("CAD");
              case Currencies.PKR:
                console.log("PKR");
              case Currencies.QUID:
                console.log("QUID");
              case Currencies.RIYAL:
                console.log("RIYAL");
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
