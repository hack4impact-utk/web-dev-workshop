'use client' // make this a client rendered component
import HomeView from "@/components/views/HomeView";
import zTodoItem, { TodoItem, TodoItemResponse, zGetAllTodoItemsResponse, zTodoItemResponse } from "@/types/todo-item";
import { useEffect, useState } from "react";
import { z } from "zod";

async function getTodoItems(): Promise<TodoItemResponse[]> {
  const response = await fetch('/api/items');
  if (response.status !== 200) {
    return []
  }
  const data = await response.json();

  const validationResult = zGetAllTodoItemsResponse.safeParse(data);
  if (validationResult.success) {
    return validationResult.data;
  }
  console.error(validationResult.error)
  return [];
}

export default function Home() {
  const [items, setItems] = useState<TodoItemResponse[]>([] as TodoItemResponse[]);

  useEffect(() => {
    getTodoItems().then((ti) => {
      console.log(ti)
      setItems(ti);
    })
  }, [])


  const onComplete = (item: TodoItem) => {
    const newItems = items.map((todoItem) => {
      if (todoItem.name === item.name) {
        return {
          ...todoItem,
          completed: !todoItem.completed
        }
      } else {
        return todoItem;
      }
    });

    setItems(newItems);
  }

  const addItem = (item: TodoItem) => {
    const newItem = {
      _id: "temp",
      ...item
    }
    setItems([...items, newItem]);
  }

  return (
    <HomeView todoItems={items} onComplete={onComplete} addItem={addItem} />
  );
}
