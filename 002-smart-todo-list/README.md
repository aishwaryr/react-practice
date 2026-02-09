## Smart Todo List (No Persistence)

### Requirements

- Display an input to add a new todo
- Add a todo on:
  - Button click, or
  - Pressing Enter
- Each todo item must include:
  - Text
  - Completed / not completed state
- Allow the user to:
  - Toggle a todo as completed
  - Delete a todo
- Display counts:
  - Total todos
  - Completed todos
  - Remaining todos

### Behavior Requirements

- Do not add empty or whitespace-only todos
- Toggling one todo must not affect other todos
- Deleting a todo must not break list order
- Counts must always be correct (derive from the todo list; no manual syncing)

### Constraints

- No external libraries
- No routing
- No persistence (no localStorage)
- Do not store derived state separately (counts must be derived)

### Refactor Requirement

- After it works, extract one custom hook (todo logic or list operations)

### Edge Cases

- Rapid add/delete operations
- Toggling the same item multiple times
- Deleting a completed item updates counts correctly
