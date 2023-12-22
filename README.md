# Todo App
- [DEMO LINK](https://katya-suvorova.github.io/todo-app/)
- Technologies: React, TS, HTML, SCSS, JS;
- Description:
1. TodoTable component has an input field to create new todos on submit (Enter). Each item has`id`, title - the text of a todo, completed - current status.
2. The application shows the number of not completed todos ;
3. TodoList component displays a list of todos;
4. TodoItem component has the ability to toggle the completed status using a checkbox.
5. The application has the ability to toggle the completed status of all the todos with the toggleAll checkbox.
6. TodosFilter component to switch between All`/`Active`/`Completed todos
7. Todo can  be removed using the destroy button (`X`).
8. Using the Clear completed button can remove all completed items from the list; the button is visible if there is at least 1 completed item in the list.
9.Everything is hidden except the input to add a new todo if there are no todos, but not if todos are just filtered out.
10. Each TODO item has inline editing:
    - double click on the TODO title makes it editable
    - Enter saves changes
    - Ecs cancels editing
    - If a user presses Enter when the title is empty, this todo is removed.
    - changes are saved onBlur
11.The todos are saved in the API.
12. All the todos are loaded from `/todos` and filter by `userId` to show only user's todos in the App.
13. The new todos are save by sending POST request to `/todos`.
14. The todo is deleted by sending DELETE request to `/todos/:todoId`.
15. The completed status or rename the todo is toggled by sending `PATCH` request to the `/todos/:todoId`.
