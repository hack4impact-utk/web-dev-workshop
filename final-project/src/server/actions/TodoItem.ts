import TodoItem from "../models/TodoItem";

export async function getAllItems() {
  return await TodoItem.find({});
}

/* Define your server functions to create and complete an item below */