"use client";

import { useEffect, useState } from "react";
import CircuitosList from "@/app/components/CircuitosList";
import Head from "next/head";
import Banner from "@/app/components/PersistentBanner";


// Interface baseada na tabela circuitos do banco de dados
interface Circuito {
  id: number;
  nome: string;
  destinos: string;
  duracao: number;
  preco: number;
  descricao: string;
  imagem: string;
  datas_disponiveis: string;
  hotel: string;
  transporte: string;
  inclusoes: string;
  nao_incluso: string;
}

export default function CircuitosPage() {
  const [circuitos, setCircuitos] = useState<Circuito[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/circuitos")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        if (Array.isArray(data)) {
          setCircuitos(data);
        } else {
          setCircuitos([]);
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar circuitos:", error);
        setCircuitos([]);
      });
  }, []);

  return (
    <>

      <Banner />
    

      <main>
        <CircuitosList circuitos={circuitos} />
      </main>
    </>
  );
}
