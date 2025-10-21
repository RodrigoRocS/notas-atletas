📊 Calculadora de Média de Atletas - Ginástica Artística
📋 Sobre o Projeto
Esta aplicação JavaScript foi desenvolvida para calcular a média de notas de atletas em competições de ginástica artística, seguindo as regras específicas da competição onde as notas mais alta e mais baixa são descartadas.

🎯 Objetivo
Criar uma solução que recebe o nome e as notas de atletas, calcula a média válida (desconsiderando a maior e menor nota) e apresenta os resultados de forma organizada.

⚙️ Funcionalidades
✅ Recebe dados de múltiplos atletas

✅ Ordena as notas para identificar maiores e menores

✅ Calcula média baseada nas notas centrais

✅ Apresenta resultados formatados

✅ Mantém a lista original de notas para exibição

🏗️ Especificações Técnicas
Regras da Competição
Cada atleta é avaliado por 5 jurados

Notas variam de 1 a 10

A média considera apenas as 3 notas do meio

Maior e menor notas são descartadas

**_Entrada de Dados_**

let atletas = [
{
nome: "Cesar Abascal",
notas: [10, 9.34, 8.42, 10, 7.88]
},
// ... mais atletas
];

Tecnologias Utilizadas
JavaScript ES6+

Métodos de array: sort(), slice(), reduce(), map(), join()

Template Strings para formatação

Arrow Functions

🔧 Métodos JavaScript Utilizados
Array.sort()
Ordena as notas em ordem crescente

Permite identificar facilmente maior e menor nota

Array.slice(1, -1)
Remove o primeiro e último elemento do array

Descarta automaticamente maior e menor nota após ordenação

Array.reduce()
Soma todas as notas válidas

Utilizado para cálculo da média

Array.map()
Processa cada atleta individualmente

Retorna array com resultados formatados

Array.join()
Formata a lista de notas para exibição

Adiciona quebras de linha entre atletas

💡 Lógica do Cálculo
Ordenação: notas.sort((a, b) => a - b)

Filtragem: slice(1, -1) (remove primeiro e último)

Cálculo: Soma das notas ÷ quantidade de notas

Formatação: Template strings para saída organizada

📝 Exemplo de Processamento
Para o atleta Cesar Abascal:

Notas originais: [10, 9.34, 8.42, 10, 7.88]

Ordenadas: [7.88, 8.42, 9.34, 10, 10]

Notas válidas: [8.42, 9.34, 10]

Média: (8.42 + 9.34 + 10) / 3 = 9.253333...

🎯 Possíveis Melhorias
Formatação de casas decimais

Validação de entrada de dados

Interface gráfica (HTML/CSS)

Armazenamento em banco de dados

Exportação de resultados

👨‍💻 Desenvolvido por
Rodrigo Rocha Silva

Projeto desenvolvido como solução para cálculo de médias em competições esportivas, demonstrando aplicação prática de métodos de array em JavaScript.

Este projeto simula um sistema real de avaliação esportiva, aplicando conceitos fundamentais de programação JavaScript.
