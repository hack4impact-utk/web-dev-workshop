'use client' // make this a client rendered component
import HomeView from "@/components/views/HomeView";
import { TodoItem } from "@/types/todo-item";
import { useState } from "react";

const itemList: TodoItem[] = [ // items to dynamically render
  {
    name: "Finish project",
    desc: "complete the project for COSC 102",
    completed: false
  },
  {
    name: "Complete lab report",
    desc: "lab report for EF 157. This should be completed by next wednesday",
    completed: false
  },
];

export default function Home() {
  const [items, setItems] = useState(itemList);

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
    setItems([...items, item]);
  }

  return (
    <HomeView todoItems={items} onComplete={onComplete} addItem={addItem} />
  );
}
