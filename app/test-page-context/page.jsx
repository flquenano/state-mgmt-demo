"use client";

import { Provider } from "jotai";
import TestPageState from "./TestPageState";
import TestPageAction from "./TestPageAction";

export default function Home() {
  return (
    <Provider>
      <TestPageState />
      <TestPageAction />
    </Provider>
  );
}
