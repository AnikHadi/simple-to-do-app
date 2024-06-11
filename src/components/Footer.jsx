"use client";
import { addStatus } from "@/lib/features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import React from "react";

function Footer() {
  const todos = useAppSelector((state) => state.todos);
  const filter = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const task = todos?.todo.filter((todo) => !todo.complete);
  const taskLeft = (arr) => {
    if (arr.length === 0) {
      return "0 task left";
    } else if (arr.length === 1) {
      return "1 task left";
    } else {
      return `${arr.length} tasks left`;
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{taskLeft(task) + " --- | --- Total tasks " + todos?.todo.length}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${filter.status === "all" && "font-bold"}`}
          onClick={() => dispatch(addStatus("all"))}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filter.status === "incomplete" && "font-bold"
          }`}
          onClick={() => dispatch(addStatus("incomplete"))}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filter.status === "complete" && "font-bold"
          }`}
          onClick={() => dispatch(addStatus("complete"))}
        >
          Complete
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Footer;
