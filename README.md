# AmigoSecreto
Projeto Amigo Secreto - Oracle ONE

Esse projeto foi realizado com o intuíto de colocar em prática os aprendizados do curso da Oracle ONE - Alura

Para o projeto foram realizadas as seguintes etapas no app.js --> JavaScript:

*Array para armazenar os nomes
*Função para atualizar a lista
*Função para sortear um amigo e exibir
*Função para exibir o resultado do sorteio

:::Resumo do Código:::

Este código implementa uma funcionalidade para adicionar amigos a uma lista e sortear um nome aleatório entre eles, exibindo os resultados na interface do usuário.

:::Funcionalidades e código:::

Array para armazenar os nomes

    Usado para armazenar os nomes dos amigos adicionados pelo usuário

Função para adicionar amigo na lista e atualizar a interface

    Captura o valor do input, valida se não está vazio, adiciona à lista e atualiza a interface
    Obtém o campo de input
    Remove espaços extras
    Verifica se o nome está vazio
    Evita nomes duplicados na lista
    Adiciona o nome ao array
    Atualiza a interface
    Limpa o campo de input

Função para atualizar a lista na interface

    Percorre o array de amigos e exibe na interface em uma lista
    Obtém a lista no HTML
    Limpa a lista antes de atualizar
    Percorre o array de amigos
    Cria um elemento de lista
    Define o nome do amigo no elemento
    Adiciona o elemento na lista

Função para sortear um amigo e exibir na interface

    Escolhe um amigo aleatoriamente e exibe na interface
    Garante que haja pelo menos dois amigos na lista
    Gera um índice aleatório
    Obtém o nome correspondente ao índice
    Chama a função para exibir o sorteado

Função para exibir o resultado do sorteio na interface

    Exibe o nome do amigo sorteado na lista de resultados
    Obtém a lista de resultados no HTML
    Limpa os resultados anteriores
    Cria um elemento de lista
    Define o texto do sorteado
    Adiciona o resultado à interface

Melhorias Implementadas:
✔ Prevenção de entrada vazia com alerta.
✔ Garantia de que um nome não seja adicionado duas vezes.
✔ Uso de for para percorrer e atualizar a lista de amigos.
✔ Exibição clara do amigo sorteado.
