import Header from "@/components/Header";
import StoreProvider from "./StoreProvider";
import NavBar from "@/components/NavBar";

export default function DashboardLayout({ children }) {
  return (
    <StoreProvider>
      <section className="max-w-[600px] mx-auto mt-20">
        <NavBar />
        {children}
      </section>
    </StoreProvider>
  );
}
