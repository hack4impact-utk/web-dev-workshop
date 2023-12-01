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

async function completeItem(item: TodoItemResponse) {
  const response = await fetch(`/api/items/${item._id}/complete`, {
    method: 'POST',
  });

  if (response.status !== 200) {
    console.error(response);
  }
}

export default function Home() {
  const [items, setItems] = useState<TodoItemResponse[]>([] as TodoItemResponse[]);

  useEffect(() => {
    getTodoItems().then((ti) => {
      console.log(ti)
      setItems(ti);
    })
  }, [])


  const onComplete = async (item: TodoItemResponse) => {
    await completeItem(item);
    const newItems = items.map((todoItem) => {
      if (todoItem.name === item.name) {
        return {
          ...todoItem,
          completed: true
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
