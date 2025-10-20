import { confirm, input } from "@inquirer/prompts"
import Mexp from "math-expression-evaluator"

import { theme } from "./src/colorTheme.js"
import { printCalculator } from "./src/printCalculator.js"
import { listOperators } from "./src/listOperators.js"

const mexp = new Mexp()

async function main(){

        while(true){

            printCalculator()

            let expression = await input({
                message: `${theme.input(" >>")}`,
                theme: {
                    prefix: ''
                }
            })

            while(expression == ""){
                printCalculator()
                expression = await input({
                    message: `${theme.input(" >>")}`,
                    theme: {
                        prefix: ''
                    }
                })
            }

            if(expression == "exit"){
                printCalculator()
                console.log(theme.info(`   Até mais... `))

                return 0
            }

            if(expression == "help"){
                await listOperators()
                continue
            }
                
            let value

            try{
                value = theme.result(mexp.eval(expression))
            } catch(error){
                value = theme.error(`Não foi possível realizar a operação!`)
            } finally {
                console.log(theme.input(`\n  >> ${value}`))
            }

            let enter = await input({
                message: theme.input(`\n Press ENTER >>`),
                theme: {
                    prefix: ''
                }
            })
        }

}

await main()