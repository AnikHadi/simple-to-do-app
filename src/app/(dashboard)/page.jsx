"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";
import { useState } from "react";

export default function Home({ searchParams }) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  return (
    <main className="w-full min-h-screen mt-6">
      <Header />
      <TodoList
        startIndex={startIndex}
        endIndex={endIndex}
        searchParams={searchParams}
      />
      <Footer
        startIndex={startIndex}
        endIndex={endIndex}
        setEndIndex={setEndIndex}
        setStartIndex={setStartIndex}
      />
    </main>
  );
}
