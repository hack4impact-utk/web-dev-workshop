import { z } from 'zod';

const zTodoItem = z.object({
  name: z.string(),
  completed: z.boolean().default(false),
  desc: z.string().optional(),
});

export const zTodoItemEntity = zTodoItem.extend({
  _id: z.string(),
});

export type TodoItem = z.infer<typeof zTodoItem>;
export type TodoItemEntity = z.infer<typeof zTodoItemEntity>;

export default zTodoItem;
