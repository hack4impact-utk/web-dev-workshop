import { z } from 'zod';

const zTodoItem = z.object({
  name: z.string(),
  completed: z.boolean().default(false),
  desc: z.string().optional(),
});

export const zTodoItemEntity = zTodoItem.extend({
  _id: z.string(),
});

export const zTodoItemResponse = zTodoItemEntity;
export const zGetAllTodoItemsResponse = z.array(zTodoItemResponse);

export const zCreateTodoItemRequest = zTodoItem.omit({ completed: true });

export type TodoItem = z.infer<typeof zTodoItem>;
export type TodoItemEntity = z.infer<typeof zTodoItemEntity>;

export type TodoItemResponse = z.infer<typeof zTodoItemResponse>;
export type GetAllTodoItemResponse = z.infer<typeof zGetAllTodoItemsResponse>;

export type CreateTodoItemRequest = z.infer<typeof zCreateTodoItemRequest>;

export default zTodoItem;
