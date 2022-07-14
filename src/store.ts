import { atom } from "jotai";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
const updateTodo = (todos: Todo[], id: number, text: string): Todo[] => {
  return todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));
};

const removeTodo = (todos: Todo[], id: number): Todo[] => {
  return todos.filter((todo) => todo.id !== id);
};

const toggleTodo = (todos: Todo[], id: number): Todo[] => {
  return todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));
};

const addTodo = (todos: Todo[], text: string): Todo[] => {
  return [
    ...todos,
    {
      id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
      text: text,
      done: false,
    },
  ];
};

export const newTodoAtom = atom<string>("");
export const todosAtoms = atom<Todo[]>([]);
export const addNewTodoAtom = atom(
  () => "",
  (get, set) => {
    set(todosAtoms, addTodo(get(todosAtoms), get(newTodoAtom)));
    set(newTodoAtom, "");
  }
);
export const updateTodoAtom = atom(
  () => "",
  (get, set, { id, name }: { id: number; name: string }) => {
    set(todosAtoms, updateTodo(get(todosAtoms), id, name));
  }
);
export const deleteTodoAtom = atom(
  () => "",
  (get, set, { id }: { id: number }) => {
    set(todosAtoms, removeTodo(get(todosAtoms), id));
  }
);

export const toggleTodoAtom = atom(
  () => "",
  (get, set, { id }: { id: number }) => {
    set(todosAtoms, toggleTodo(get(todosAtoms), id));
  }
);
