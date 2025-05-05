"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Banner from "@/app/components/PersistentBanner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "react-modal";
import styled from "styled-components";
import {
  Clock,
  BusFront,
  Hotel,
  Info,
  Calendar,
  FileText,
  User,
  Leaf,
  PawPrint,
  HelpCircle,
  Link,
} from "lucide-react";

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

const imagensExtras = [
  "https://visiteomundo.com/wp-content/uploads/2022/12/fernando-de-noronha.jpg",
  "https://media.istockphoto.com/id/479900992/pt/foto/lama-e-machu-picchu.jpg?s=612x612&w=0&k=20&c=1yfwNFEcI-58himK45igL6sdkcQbdlwVhOJiXh9mEzA=",
  "https://blog.solo.ind.br/wp-content/uploads/2017/08/Quais-Sao-os-Melhores-Paises-da-America-Latina-Para-Viajar.jpg",
];

export default function DetalhesCircuito() {
  const { id } = useParams();
  const [circuito, setCircuito] = useState<Circuito | null>(null);
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/circuitos/${id}`)
      .then((res) => res.json())
      .then((data) => setCircuito(data))
      .catch((err) => console.error("Erro ao buscar circuito:", err));
  }, [id]);

  if (!circuito) return null;

  return (
    <>
      <Banner />
      <MainContainer>
        <Title>{circuito.nome}</Title><Badge>Recomendado</Badge>
        

        <CarouselContainer>
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              const style = {
                marginLeft: 8,
                cursor: "pointer",
                fontSize: 16,
                color: isSelected ? "#003b95" : "#ccc",
              };
              return (
                <span
                  style={style}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                >●</span>
              );
            }}
          >
            {imagensExtras.map((url, index) => (
              <div key={index}>
                <img
                  src={url}
                  alt={`Imagem ${index + 1}`}
                  className="object-cover h-[360px] w-full cursor-pointer"
                  onClick={() => setImagemSelecionada(url)}
                />
              </div>
            ))}
          </Carousel>
        </CarouselContainer>

        <Modal
          isOpen={!!imagemSelecionada}
          onRequestClose={() => setImagemSelecionada(null)}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
          overlayClassName=""
        >
          <img src={imagemSelecionada ?? ""} alt="Imagem Ampliada" className="max-h-[90%] max-w-[90%]" />
        </Modal>

        <Section>
          <SubTitle>Detalhes do Circuito</SubTitle>
          <Grid>
            <Item><Clock size={18} color="#ff4550"/> <strong>Duração:</strong> {circuito.duracao} dias</Item>
            <Item><BusFront size={18} color="#ff4550"/> <strong>Transporte:</strong> {circuito.transporte}</Item>
            <Item><Hotel size={18} color="#ff4550"/> <strong>Hotel:</strong> {circuito.hotel}</Item>
            <Item><Calendar size={18} color="#ff4550"/> <strong>Datas disponíveis:</strong> {circuito.datas_disponiveis}</Item>
            <Item><Info size={18} color="#ff4550"/> <strong>Incluso:</strong> {circuito.inclusoes}</Item>
            <Item><FileText size={18} color="#ff4550"/> <strong>Não incluso:</strong> {circuito.nao_incluso}</Item>
            <Item><User size={18} color="#ff4550"/> <strong>Guia:</strong> Português (BR)</Item>
            <Item><Leaf size={18} color="#ff4550"/> <strong>Sustentabilidade:</strong> Alinhado a práticas responsáveis</Item>
            <Item><PawPrint size={18} color="#ff4550"/> <strong>Pets:</strong> Não permitidos</Item>
          </Grid>
        </Section>

        <Description>
          <h2>Sobre o Circuito</h2>
          <p>{circuito.descricao}</p>
        </Description>
        
            
          <ButtonWrapper>
            
              <ButtonReserva>Fazer Reserva</ButtonReserva>
        
           

          </ButtonWrapper>

        <MapWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.603742109244!2d-70.6506!3d-33.4372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c59d7b2a67c5%3A0xb8ff28b5dbd77313!2sSantiago%2C%20Chile!5e0!3m2!1spt-BR!2sbr!4v1711385930403!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </MapWrapper>
      </MainContainer>

      <section className="bannerMad">
        <div className="divBlue">
          <p className="textoBanner">Uma seleção especial com o melhor do turismo.</p>
        </div>
        <div className="divPink"></div>
        <img
          className="madImage"
          src="https://soylocoportiamerica.com.br/wp-content/uploads/2025/02/1024-1024-avatar-mad.webp"
          alt="Consultor MAD"
        />
      </section>
    </>
  );
}

const MainContainer = styled.main`
  margin-top: 380px;
  padding: 0 1rem 3rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const CarouselContainer = styled.div`
  margin: 0 auto 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
`;

const Badge = styled.span`
    display: table;
    margin: 0 0 1rem auto;
    padding: 6px 14px;
    border-radius: 20px;
    background: linear-gradient(to right, #155dfc, #003b95);
    color: #fff;
    font-weight: 600;
    font-size: 0.875rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #003b95;
  margin-bottom: 2rem;
`;

const SubTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: #222;
`;

const Section = styled.section`
  padding: 1rem 0;
  border-top: 1px solid #ddd;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  list-style: none;
  color: #333;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
`;

const Description = styled.section`
  margin-top: 3rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #222;
  }
  p {
    line-height: 1.6;
    color: #444;
    font-size: 1.05rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

const ButtonReserva = styled.button`
  border-radius: 20px;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: #fff;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

const MapWrapper = styled.div`
  margin-top: 3rem;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
`;
