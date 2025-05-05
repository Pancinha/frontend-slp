"use client";

import { useState } from "react";
import styled from "styled-components";
import CircuitosCard from "./CircuitosCard";
import SideBarFilters from "@/app/components/SideBarFilters";
import { ChevronDown } from "lucide-react"; 

// Interface com base na tabela circuitos
interface Circuito {
  id: number;
  nome: string;
  destinos: string;
  duracao: number;
  preco: number;
  imagem: string;
}

interface CircuitosListProps {
  circuitos: Circuito[];
}

export default function CircuitosList({ circuitos }: CircuitosListProps) {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(10); // Exibir 10 por vez

  // Filtrando por busca
  const filteredCircuitos = circuitos.filter((circuito) =>
    circuito.nome.toLowerCase().includes(search.toLowerCase())
  );

  // Pegando os visíveis por vez
  const visibleCircuitos = filteredCircuitos.slice(0, visibleCount);

  return (
    <PageContainer>
      {/* Barra lateral de filtros */}
      <SideBarContainer>
        <SideBarFilters />
      </SideBarContainer>

      {/* Conteúdo principal */}
      <MainContent>
        {/* Campo de pesquisa */}
        <SearchInput
          type="text"
          placeholder="Buscar circuitos..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setVisibleCount(10); // Reinicia paginação ao pesquisar
          }}
        />

        {/* Lista de cards */}
        <CardList>
          {visibleCircuitos.length > 0 ? (
            visibleCircuitos.map((circuito) => (
              <CircuitosCard key={circuito.id} circuito={circuito} />
            ))
          ) : (
            <p className="text-gray-500 text-center">
              Nenhum circuito encontrado.
            </p>
          )}
        </CardList>

        {/* Botão "Ver mais" */}
        {visibleCount < filteredCircuitos.length && (
          <CenterButton>
            <LoadMoreButton onClick={() => setVisibleCount((prev) => prev + 10)}>
              Ver mais
            </LoadMoreButton>
          </CenterButton>
        )}
      </MainContent>
    </PageContainer>
  );
}

// Estilização com Styled Components

const PageContainer = styled.div`
  display: flex;
  margin-top: 390px;
  padding: 0 20px;
  gap: 32px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;

const SideBarContainer = styled.aside`
  width: 260px;
  flex-shrink: 0;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 28px;
  color: black;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 20px;
`;

const LoadMoreButton = styled.button`
 display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background-color: #f1f1f1;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e6e6e6;
  }

  &:active {
    background-color: #dcdcdc;  
  }
`;
