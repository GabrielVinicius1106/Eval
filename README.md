# Calculadora de Expressões Matemáticas

Este mini projeto é uma calculadora de expressões matemáticas interativa para terminal, desenvolvida em Node.js. O usuário pode digitar expressões matemáticas, visualizar o resultado instantaneamente, listar operadores suportados e sair do programa de forma simples.

## Propósito

O objetivo é demonstrar como criar uma aplicação CLI modularizada, que utiliza funções assíncronas e bibliotecas populares para proporcionar uma experiência amigável e colorida ao usuário.

## Funcionamento

- Ao iniciar, o programa exibe um cabeçalho estilizado.
- O usuário digita uma expressão matemática (ex: `2 + 2 * pi`).
- O resultado é exibido em destaque.
- Comando `help` lista todos os operadores e funções disponíveis.
- Comando `exit` encerra o programa.

## Como executar

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Execute o programa:
   ```sh
   npm run main
   ```

## Tecnologias e Bibliotecas Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **@inquirer/prompts**: Para entrada interativa do usuário.
- **chalk**: Para estilização colorida do terminal.
- **math-expression-evaluator**: Para avaliação das expressões matemáticas.

## Conhecimentos Aplicados

- **Modularização**: O código está dividido em arquivos, facilitando manutenção e reutilização de código.
- **Funções Assíncronas**: Uso de `async/await` para lidar com entradas do usuário de forma não bloqueante.
- **Uso de Bibliotecas**: Integração de bibliotecas externas para entrada, avaliação de expressões e estilização.
- **CLI Interativo**: Construção de uma interface amigável no terminal.

## Estrutura dos Arquivos

- [`main.js`](main.js): Ponto de entrada e lógica principal.
- [`src/colorTheme.js`](src/colorTheme.js): Temas de cores para estilização.
- [`src/printCalculator.js`](src/printCalculator.js): Função para exibir o cabeçalho.
- [`src/listOperators.js`](src/listOperators.js): Função para listar operadores e comandos.

---

Sinta-se à vontade para explorar, modificar e expandir este projeto!