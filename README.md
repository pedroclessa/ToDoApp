# TodoApp

Um aplicativo simples de lista de tarefas (TodoApp) desenvolvido com **HTML**, **CSS (Tailwind)** e **JavaScript**. Ele permite gerenciar suas tarefas com funcionalidades como criar, editar, excluir e marcar como concluídas. As tarefas são armazenadas no `localStorage`, garantindo persistência de dados após recarregar a página.

---

## 🚀 Funcionalidades

- **Adicionar Tarefa**: Adicione novas tarefas digitando no campo de entrada e clicando no botão "Adicionar" ou pressionando `Enter`.
- **Marcar como Concluída**: Clique no texto da tarefa para alternar entre os estados "concluído" e "pendente".
- **Editar Tarefa**: Clique no botão "Editar" para alterar o texto de uma tarefa.
- **Excluir Tarefa**: Remova uma tarefa clicando no botão "Excluir".
- **Persistência de Dados**: As tarefas permanecem salvas no `localStorage`, mesmo após o fechamento ou recarregamento do navegador.

---

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura básica da aplicação.
- **CSS (Tailwind)**: Estilização moderna e responsiva utilizando classes utilitárias.
- **JavaScript**: Lógica da aplicação, implementada de forma modular com o uso de uma classe.
- **LocalStorage**: Para armazenamento local das tarefas.

---

## 🖥️ Como Executar
Clone o repositório ou baixe o código-fonte:

bash
Copiar código
git clone https://github.com/seu-usuario/todoapp.git
cd todoapp
Abra o arquivo index.html em um navegador:

Clique duas vezes no arquivo index.html, ou
Use uma extensão de servidor local no VSCode, como a Live Server.
Use o aplicativo:

Adicione, edite, marque ou exclua tarefas diretamente na interface.

## 📝 Como o Projeto Foi Desenvolvido

## HTML
Estrutura da página com um campo de entrada (<input>), um botão (<button>) e uma lista (<ul>).
Uso de IDs específicos para facilitar a interação com JavaScript.

## CSS com Tailwind
Utilização de classes utilitárias para:
Layout responsivo (flex, justify-between, items-center).
Estilização visual (bg-gray-50, shadow-md, rounded-md).
Estados interativos (hover:text-purple-700, hover:shadow-md).

## JavaScript
Implementado com uma classe TodoApp para modularidade e organização:
addTask: Adiciona uma nova tarefa ao array de tarefas.
renderTasks: Atualiza a interface, exibindo a lista de tarefas.
createTaskElement: Cria os elementos HTML para cada tarefa.
loadTasksFromLocalStorage e saveTasksToLocalStorage: Garantem que as tarefas sejam armazenadas e recuperadas do localStorage.

## LocalStorage
Utilizado para salvar o estado das tarefas, permitindo que elas permaneçam disponíveis mesmo após o fechamento do navegador.
