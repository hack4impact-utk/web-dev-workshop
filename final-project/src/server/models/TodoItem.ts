import { TodoItemEntity } from '@/types/todo-item';
import { Model, Schema, model, models } from 'mongoose';

const TodoItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export interface TodoItemDocument
  extends Document,
    Omit<TodoItemEntity, '_id'> {}

export default (models.TodoItem as Model<TodoItemDocument>) ||
  model<TodoItemDocument>('TodoItem', TodoItemSchema, 'todo_items');
