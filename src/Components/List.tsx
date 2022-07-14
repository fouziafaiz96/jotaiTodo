import { useAtom } from "jotai";
import {
  Todo,
  todosAtoms,
  updateTodoAtom,
  deleteTodoAtom,
  toggleTodoAtom,
} from "../store";
import { Add } from "./Add";
import { FlexRow, Maincontainer } from "./style";

export const List = () => {
  const [list] = useAtom(todosAtoms);
  const [, updateTodoItem] = useAtom(updateTodoAtom);
  const [, deleteTodoItem] = useAtom(deleteTodoAtom);
  const [, toggleTodoItem] = useAtom(toggleTodoAtom);

  return (
    <Maincontainer>
      <Add />
      {list.map((item: Todo) => (
        <FlexRow key={item.id}>
          <input
            type="checkbox"
            checked={item.done}
            onClick={() => toggleTodoItem({ id: item.id })}
          />
          <input
            type="text"
            value={item.text}
            onChange={(evt) =>
              updateTodoItem({ id: item.id, name: evt.target.value })
            }
          />
          <button onClick={() => deleteTodoItem({ id: item.id })}>
            Delete
          </button>
        </FlexRow>
      ))}
    </Maincontainer>
  );
};
