"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Circuito {
  id: number;
  nome: string;
  imagem: string;
  datas_disponiveis: string;
  preco: number;
}

export default function PaginaReserva() {
  const { id } = useParams();
  const [circuito, setCircuito] = useState<Circuito | null>(null);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    pessoas: 1,
    data: "",
    observacoes: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/circuitos/${id}`)
      .then((res) => res.json())
      .then((data) => setCircuito(data))
      .catch((err) => console.error(err));
  }, [id]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // ainda não valida a data, apenas prossegue
    alert("Dados recebidos! Em breve você será direcionado para o pagamento.");
  }

  if (!circuito) return <Container>Carregando...</Container>;

  return (
    <>
      <Container>
        <Title>Faça sua reserva:</Title>
        <ContentWrapper>
          <FormSection>
            <form onSubmit={handleSubmit}>
              <label style={{color:"black"}}>Nome completo
                <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
              </label>
              <label style={{color:"black"}}>Email
                <input  type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
              <label style={{color:"black"}}>WhatsApp
                <input type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange} required />
              </label>
              <label style={{color:"black"}}>Observações
                <textarea name="observacoes" value={form.observacoes} onChange={handleChange} />
              </label>
              <SubmitButton type="submit">Avançar</SubmitButton>
            </form>
          </FormSection>

          <DateSection>
            <Imagem src={circuito.imagem} alt={circuito.nome} />
            <label>Selecione a data:
              <input type="date" name="data" value={form.data} onChange={handleChange} required />
            </label>
            <label>Quantidade de pessoas:
              <input type="number" name="pessoas" min={1} value={form.pessoas} onChange={handleChange} required />
            </label>
          </DateSection>
        </ContentWrapper>
      </Container>
      <section className="bannerMad">
            <div className="divBlue">
              <p className="textoBanner">Uma seleção especial com o melhor do turismo.</p>
            </div>
            <div className="divPink"></div>

            {/* Imagem do MAD sobrepondo as divs */}
            <img
              className="madImage"
              src="https://soylocoportiamerica.com.br/wp-content/uploads/2025/02/1024-1024-avatar-mad.webp"
              alt="Consultor MAD"
            />
        </section>
    </>
  );
}

const Container = styled.div`
  max-width: 1000px;
  margin: 300px auto 40px;
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  color: #003b95;
  margin-bottom: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

const FormSection = styled.div`
  flex: 1;
  min-width: 300px;

  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      font-size: 0.95rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      input, textarea {
        padding: 10px;
        border-radius: 6px;
        border: 1px solid #ccc;
      }
    }
  }
`;

const DateSection = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.95rem;
    color: #444;

    input {
      margin-top: 0.5rem;
      padding: 10px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }
  }
`;

const Imagem = styled.img`
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 12px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.1);
  }
`;
