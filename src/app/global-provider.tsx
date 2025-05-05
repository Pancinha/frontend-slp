"use client";

import GlobalStyles from "./styles/GlobalStyles"; // Se for styled-components aqui, está OK nesse ponto

export default function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}