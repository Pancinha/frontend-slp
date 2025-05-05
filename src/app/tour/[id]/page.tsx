"use client";

import { useEffect, useState } from "react";
import ToursList from "@/app/components/ToursList";
import Head from "next/head";

// Interface correta para Tours baseada no banco de dados
interface Tour {
  id: number;
  nome: string;
  destino: string;
  duracao: number;
  preco: number;
  descricao: string;
  imagem: string;
  data: string;
  guia?: string;
  idioma: string;
  inclusoes: string;
  nao_incluso: string;
}

export default function ToursPage() {
  const [tours, setTours] = useState<Tour[]>([]);

  // Busca os dados da API ao carregar a página
  useEffect(() => {
    fetch("http://localhost:5000/tours")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // 👀 Verifique o retorno da API
        if (Array.isArray(data)) {
          setTours(data); // ✅ Apenas define se for um array
        } else {
          setTours([]); // 🔄 Evita erros caso a resposta não seja um array
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar tours:", error);
        setTours([]); // 🔄 Em caso de erro, mantém a variável segura
      });
  }, []);
  
  return (
    <>
      <Head>
        <title>Lista de Tours</title>
      </Head>

      <main>
        <ToursList tours={tours} />
      </main>
      </>
  );
}