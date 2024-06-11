"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import React from "react";
import Todo from "./todo";

function TodoList({ startIndex, endIndex, page }) {
  const todos = useAppSelector((state) => state.todos);
  const filter = useAppSelector((state) => state.filters);
  const { status, searchText } = filter;

  // console.log(todos?.todo, status, searchText);

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchTodo);
  // }, [dispatch]);

  const filterByStatus = (todo) => {
    switch (status) {
      case "complete":
        return todo.complete;
      case "incomplete":
        return !todo.complete;
      default:
        return true;
    }
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos?.todo
        ?.filter(filterByStatus)
        .slice(startIndex, endIndex)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
}

export default TodoList;
