import { CreateTodoItemRequest } from "@/types/todo-item";
import TodoItem from "../models/TodoItem";

export async function getAllItems() {
  return await TodoItem.find({});
}

export async function completeItem(id: string) {
  await TodoItem.findByIdAndUpdate(id, { completed: true });
}

/* Define your server functions to create an item below */


export async function createItem(item: CreateTodoItemRequest) {
  return await TodoItem.create(item);
}