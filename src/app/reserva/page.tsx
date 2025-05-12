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
    telefone: "",
    data_viagem: "",
    qnt_pessoas: 1,
    observacoes: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/circuitos/${id}`)
      .then((res) => res.json())
      .then((data) => setCircuito(data))
      .catch((err) => console.error(err));
  }, [id]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const payload = {
      ...form,
      circuito_nome: circuito?.nome || "Não informado",
    };

    try {
      const res = await fetch("http://localhost:5000/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("✅ Reserva enviada com sucesso! Em breve entraremos em contato.");
        setForm({
          nome: "",
          email: "",
          telefone: "",
          data_viagem: "",
          qnt_pessoas: 1,
          observacoes: "",
        });
      } else {
        const erro = await res.json();
        console.error("Erro ao enviar reserva:", erro.error);
        alert("❌ Erro ao enviar reserva: " + erro.error);
      }
    } catch (err) {
      console.error("Erro de conexão:", err);
      alert("❌ Erro ao conectar com o servidor.");
    }
  }

  if (!circuito) return <Container>Carregando informações do circuito...</Container>;

  return (
    <>
      <Container>
        <Title>Faça sua reserva:</Title>
        <ContentWrapper>
          <FormSection>
            <form onSubmit={handleSubmit}>
              <label>Nome completo
                <input name="nome" type="text" value={form.nome} onChange={handleChange} required />
              </label>
              <label>Email
                <input name="email" type="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>Telefone / WhatsApp
                <input name="telefone" type="tel" value={form.telefone} onChange={handleChange} required />
              </label>
              <label>Observações
                <textarea name="observacoes" value={form.observacoes} onChange={handleChange} />
              </label>
              <SubmitButton type="submit">Enviar Reserva</SubmitButton>
            </form>
          </FormSection>

          <DateSection>
            <Imagem src={circuito.imagem} alt={circuito.nome} />
            <label>Data desejada
              <input name="data_viagem" type="date" value={form.data_viagem} onChange={handleChange} required />
            </label>
            <label>Quantidade de pessoas
              <input name="qnt_pessoas" type="number" min={1} value={form.qnt_pessoas} onChange={handleChange} required />
            </label>
          </DateSection>
        </ContentWrapper>
      </Container>

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

// Estilos
const Container = styled.div`
  max-width: 1000px;
  margin: 300px auto 40px;
  padding: 20px;
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
