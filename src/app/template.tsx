"use client";

import GlobalProvider from "./global-provider";

export default function Template({ children }: { children: React.ReactNode }) {
  return <GlobalProvider>{children}</GlobalProvider>;
}