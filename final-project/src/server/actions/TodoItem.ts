import TodoItem from "../models/TodoItem";

export async function getAllItems() {
  return await TodoItem.find({});
}

export async function completeItem(id: string) {
  await TodoItem.findByIdAndUpdate(id, { completed: true });
}

/* Define your server functions to create an item below */