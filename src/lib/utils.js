import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getStoredData(name) {
  const storedData = window.localStorage.getItem(name);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return null;
}

// GEt Single TODo
export function getSingleTodo(name, id) {
  const storedData = JSON.parse(localStorage.getItem(name));
  if (storedData?.length) {
    return storedData?.filter((t) => t.id === id)[0];
  }
  return null;
}

export function setStoredData(name, data) {
  const storedData = JSON.parse(window.localStorage.getItem(name));
  const maxId = storedData?.slice(-1)[0] ? storedData?.slice(-1)[0]?.id + 1 : 1;

  const newData = {
    ...data,
    id: maxId,
    complete: false,
  };

  if (!storedData) {
    window.localStorage.setItem(name, JSON.stringify([newData]));
  } else {
    window.localStorage.setItem(name, JSON.stringify([...storedData, newData]));
  }

  return JSON.parse(localStorage.getItem(name));
}

// update local storage Status
export function updateStatus(id, completed) {
  const storedData = JSON.parse(localStorage.getItem("todos"));
  const index = storedData.findIndex((t) => t.id == id);
  const newTodo = { ...storedData[index], complete: completed };
  storedData[index] = newTodo;
  localStorage.setItem("todos", JSON.stringify(storedData));
}

// Delete local storage todo
export function deleteLocalStorageTodo(id) {
  let storedData = JSON.parse(localStorage.getItem("todos"));
  storedData = storedData.filter((t) => t.id !== id);
  console.log(storedData);
  localStorage.setItem("todos", JSON.stringify(storedData));
}

export function updateTodo(id, data) {
  const storedData = JSON.parse(localStorage.getItem("todos"));
  const index = storedData.findIndex((t) => t.id == id);
  storedData[index] = data;
  localStorage.setItem("todos", JSON.stringify(storedData));
}
