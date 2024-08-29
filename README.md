Initial State:

isTodoEditable is initially false.
The input is readOnly because readOnly={!isTodoEditable} evaluates to true.
The button shows the edit icon (✏️).
First Click on the Button:

The onClick handler is triggered.
if (todo.completed) return;: Since the todo is not completed, we continue.
if (isTodoEditable) { editTodo(); } is not executed because isTodoEditable is false.
else setIsTodoEditable((prev) => !prev); is executed, toggling isTodoEditable to true.
The button now shows the save icon (📁).
