import Header from "@/components/Header";
import TodoList from "@/components/TodoList";

export default function Home({ searchParams }) {
  return (
    <main className="w-full min-h-screen mt-6">
      <Header />
      <TodoList searchParams={searchParams} />
    </main>
  );
}
