import { input } from "@inquirer/prompts"

import { theme } from "./colorTheme.js"

export async function listOperators(){
    console.clear()
    console.log(theme.header("\n <<< OPERADORES >>> \n"))

    console.log(theme.info(" help >> LISTAR OPERADORES"))
    console.log(theme.info(" exit >> SAIR"))

    console.log()

    console.log(theme.info(" pi >> CONSTANTE PI"))

    console.log()

    console.log(theme.info(` + >> SOMA`))
    console.log(theme.info(` - >> SUBTRAÇÃO`))
    console.log(theme.info(` / >> DIVISÃO`))
    console.log(theme.info(` * >> MULTIPLICAÇÃO`))

    console.log();

    console.log(theme.info(` ${"^".padEnd(4, " ")} >> POTENCIAÇÃO`))
    console.log(theme.info(` ${"root".padEnd(1, " ")} >> RADICIAÇÃO`))
    console.log(theme.info(` ${"log".padEnd(4, " ")} >> LOGARITMO 10`))
    console.log(theme.info(` ${"ln".padEnd(4, " ")} >> LOGARITMO e`))
    console.log(theme.info(` ${"!".padEnd(4, " ")} >> FATORIAL`))

    console.log(theme.header("\n <<< TRIGONOMÉTRICAS >>> \n")) 

    console.log(theme.info(" sin() >> SENO"))
    console.log(theme.info(" cos() >> COSSENO"))
    console.log(theme.info(" tan() >> TANGENTE"))

    let enter = await input({
        message: theme.input('\n ENTER para retornar >>'),
        theme: {
            prefix: ''
        }
    })
}