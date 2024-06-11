"use client";
import React, { useEffect, useState } from "react";
import notes from "@/assets/images/notes.png";
import tick from "@/assets/images/double-tick.png";
import plus from "@/assets/images/plus.png";
import Image from "next/image";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { addTodo, editTodo } from "@/lib/features/todo/todoSlice";
import { getSingleTodo } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

function Header() {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const getParam = searchParams.get("edit");
  const router = useRouter();

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    complete: "",
    description: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = setStoredData("todos", formData);

    if (!getParam) {
      dispatch(addTodo(formData));
    } else {
      dispatch(editTodo({ id: Number(getParam), data: formData }));
      router.push("/");
    }
    e.target.reset();
  };

  useEffect(() => {
    if (getParam) {
      const editTodo = getSingleTodo("todos", Number(getParam));
      setFormData(editTodo);
    }
  }, [getParam]);

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-3 bg-gray-100 px-4 py-4 rounded-md"
      >
        <div className="flex items-center  gap-x-4">
          <Image
            src={notes}
            className="w-6 h-6"
            alt="Add todo"
            width={80}
            height={80}
          />
          <input
            type="text"
            name="title"
            placeholder="Type your Task Title"
            className="w-full text-base px-4 py-1 border-none outline-none bg-gray-50 text-gray-500 rounded"
            onChange={handleChange}
            value={formData?.title}
            required
          />
        </div>
        <textarea
          name="description"
          placeholder="Task Description"
          onChange={handleChange}
          value={formData?.description}
          className="w-full text-base px-4 py-1 border-none outline-none bg-gray-50 text-gray-500 rounded"
          rows={3}
          required
        ></textarea>

        <button
          type="submit"
          className="appearance-none w-fit bg-no-repeat bg-contain flex items-center gap-x-1 justify-end  ml-auto bg-sky-400 px-3 py-0.5 rounded-md"
        >
          <span>Add Task</span>
          <Image
            src={plus}
            className="w-4 h-4"
            alt="Add todo"
            width={100}
            height={100}
          />
        </button>
      </form>
      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          //   onClick={() => dispatch(updateCompleteAll())}
          className="flex space-x-1 cursor-pointer"
        >
          <Image
            className="w-4 h-4"
            src={tick}
            alt="Complete"
            width={100}
            height={100}
          />
          <span>Complete All Tasks</span>
        </li>
        <li
          //   onClick={() => dispatch(updateClearComplete())}
          className="cursor-pointer"
        >
          Clear completed
        </li>
      </ul>
    </section>
  );
}

export default Header;
