"use client";
import { FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { deleteTodo, updateTodoStatus } from "@/lib/features/todo/todoSlice";
import { useAppDispatch } from "@/lib/hooks/hooks";

function Todo({ todo }) {
  const { id, title, complete, description } = todo;
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          complete && "border-green-500 focus-within:border-green-500"
        }
          `}
      >
        <input
          type="checkbox"
          className="opacity-0 absolute rounded-full"
          onClick={(e) =>
            dispatch(updateTodoStatus({ id: id, status: e.target.checked }))
          }
        />
        <svg
          className={`${
            !complete && "hidden"
          } fill-current w-3 h-3 text-green-500 pointer-events-none`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div className={`select-none flex-1 ${complete && "line-through"}`}>
        <Link href={`todo/${id}`}>{title}</Link>
      </div>

      <Link href={`?edit=${id}`}>
        <FilePenLine className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer text-yellow-400" />
      </Link>
      <Trash2
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer text-red-500"
        onClick={() => dispatch(deleteTodo(id))}
      />
    </div>
  );
}

export default Todo;
