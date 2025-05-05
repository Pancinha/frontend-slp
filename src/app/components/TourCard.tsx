import styled from "styled-components";
import Link from "next/link";
import { Clock, BusFront, Hotel, Star } from "lucide-react";

interface Tour {
  id: number;
  nome: string;
  destino: string;
  duracao: number;
  preco: number;
  imagem: string;
}

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Card>
      <Imagem src={tour.imagem} alt={tour.nome} />

      <Conteudo>
        <TopoCard>
          <TagRecomendado>Recomendado</TagRecomendado>
        </TopoCard>

        <div>
          <Titulo>{tour.nome}</Titulo>
          <Destino>{tour.destino}</Destino>

          <Estrelas>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="#facc15" stroke="#facc15" />
            ))}
          </Estrelas>

          <IconRow>
            <Icone>
              <Clock size={16} />
              <span>{tour.duracao} horas</span>
            </Icone>
            <Icone>
              <BusFront size={16} />
              <span>Transporte incluso</span>
            </Icone>
            <Icone>
              <Hotel size={16} />
              <span>Hospedagem</span>
            </Icone>
          </IconRow>
        </div>

        <BottomInfo>
          <Preco>R$ {tour.preco}</Preco>
          <Link href={`/tour/${tour.id}`} passHref>
            <Botao>Ver detalhes</Botao>
          </Link>
        </BottomInfo>
      </Conteudo>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: 0.3s;
  width: 100%;
  font-family: Montserrat;
  position: relative;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`;

const Imagem = styled.img`
  width: 280px;
  height: auto;
  object-fit: cover;
`;

const Conteudo = styled.div`
  flex: 1;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopoCard = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TagRecomendado = styled.span`
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: white;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 20px;
  margin-bottom: 12px;
`;

const Titulo = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #003b95;
  margin-bottom: 6px;
`;

const Destino = styled.p`
  font-style: italic;
  font-weight: 500;
  color: #1c1a1a;
  margin-bottom: 8px;
`;

const Estrelas = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 14px;
`;

const IconRow = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
`;

const Icone = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #555;
`;

const BottomInfo = styled.div`
  text-align: right;
  gap: 16px;
`;

const Preco = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #003b95;
  margin-bottom: 12px;
`;

const Botao = styled.a`
  background-color: #0066cc;
  color: white;
  padding: 8px 16px;
  border-radius: 24px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    background-color: #004aad;
  }


  3,0
  `;
