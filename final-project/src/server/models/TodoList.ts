import { TodoListEntity } from '@/types/todo-list';
import { Model, Schema, model, models } from 'mongoose';

const TodoListSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  items: {
    type: Schema.Types.ObjectId,
    ref: 'TodoItem',
  },
});

export interface TodoListDocument
  extends Document,
    Omit<TodoListEntity, '_id'> {}

export default (models.TodoList as Model<TodoListDocument>) ||
  model<TodoListDocument>('TodoList', TodoListSchema, 'todo_lists');
