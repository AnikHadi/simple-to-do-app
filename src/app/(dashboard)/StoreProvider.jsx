"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";
import { addInitialState } from "@/lib/features/todo/todoSlice";
import { getStoredData } from "@/lib/utils";

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  const storedData = getStoredData("todos");
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    if (storedData) {
      storeRef.current.dispatch(addInitialState(storedData));
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
