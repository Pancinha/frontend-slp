"use client";

import { useState } from "react";
import styled from "styled-components";
import TourCard from "./TourCard";
import SideBarFilters from "@/app/components/SideBarFilters";
import { ChevronDown } from "lucide-react";

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

interface ToursListProps {
  tours: Tour[];
}

export default function ToursList({ tours }: ToursListProps) {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  const filteredTours = tours.filter((tour) =>
    tour.nome.toLowerCase().includes(search.toLowerCase())
  );

  const visibleTours = filteredTours.slice(0, visibleCount);

  return (
    <PageContainer>
      {/* Filtros laterais */}
      <SideBarContainer>
        <SideBarFilters />
      </SideBarContainer>

      {/* Conteúdo principal */}
      <MainContent>
        {/* Campo de busca */}
        <SearchInput
          type="text"
          placeholder="Buscar tours..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setVisibleCount(10);
          }}
        />

        {/* Lista de cards */}
        <CardList>
          {visibleTours.length > 0 ? (
            visibleTours.map((tour) => <TourCard key={tour.id} tour={tour} />)
          ) : (
            <p className="text-gray-500 text-center">Nenhum tour encontrado.</p>
          )}
        </CardList>

        {/* Botão "Ver mais" */}
        {visibleCount < filteredTours.length && (
          <CenterButton>
            <LoadMoreButton onClick={() => setVisibleCount((prev) => prev + 10)}>
              Ver mais <ChevronDown size={16} />
            </LoadMoreButton>
          </CenterButton>
        )}
      </MainContent>
    </PageContainer>
  );
}

// Estilos com Styled Components

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
