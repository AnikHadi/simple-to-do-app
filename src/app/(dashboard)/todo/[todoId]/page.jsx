"use client";
import { getSingleTodo } from "@/lib/utils";
import { ArrowLeft, BeakerIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function SingleTodo({ params }) {
  const { todoId } = params;

  const current = getSingleTodo("todos", Number(todoId));
  console.log(current);
  const { id, title, description, complete } = current || {};
  return (
    <div>
      <Link href={"/"} className="flex gap-x-1">
        <ArrowLeft /> Back
      </Link>

      <div className="flex flex-col gap-y-4 mt-4 shadow-lg px-3 py-4 rounded-md bg-slate-100">
        <h1 className="text-center text-xl font-bold t-2">Our Task </h1>
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">{title}</h1>
          <span
            className={`px-2 py-0.5 rounded font-bold ${
              complete
                ? "bg-gray-300 text-green-500"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            {complete ? "Completed" : "UnCompleted"}
          </span>
        </div>

        <p className="text-slate-500 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default SingleTodo;
