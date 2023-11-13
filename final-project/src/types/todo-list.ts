import { z } from 'zod';
import zTodoItem, { zTodoItemEntity } from './todo-item';

const zTodoList = z.object({
  name: z.string(),
  items: z.array(zTodoItem),
});

export const zTodoListEntity = zTodoList.extend({
  _id: z.string(),
  items: zTodoItemEntity,
});

export type TodoList = z.infer<typeof zTodoList>;
export type TodoListEntity = z.infer<typeof zTodoListEntity>;

export default zTodoList;
