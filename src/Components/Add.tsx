import { useAtom } from "jotai";
import { newTodoAtom, addNewTodoAtom } from "../store";

export const Add = () => {
  const [todoItem, setTodoItem] = useAtom(newTodoAtom);
  const [, addNewItem] = useAtom(addNewTodoAtom);

  return (
    <>
      <input
        onChange={(evt) => setTodoItem(evt.target.value)}
        value={todoItem}
        placeholder="Add Item"
      />
      <button onClick={addNewItem}>Add</button>
    </>
  );
};
