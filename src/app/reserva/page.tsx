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
    try {
      const res = await fetch("/api/reserva", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, circuito_id: id }),
      });

      if (res.ok) {
        alert("Reserva enviada com sucesso!");
        setForm({ nome: "", email: "", whatsapp: "", pessoas: 1, data: "", observacoes: "" });
      } else {
        alert("Erro ao enviar reserva.");
      }
    } catch (err) {
      console.error(err);
      alert("Erro no servidor.");
    }
  }

  if (!circuito) return <Container>Carregando...</Container>;

  return (
    <Container>
      <h1>Reserva para: {circuito.nome}</h1>
      <Image src={circuito.imagem} alt={circuito.nome} />
      <Resumo>
        <p><strong>Preço:</strong> R$ {circuito.preco}</p>
        <p><strong>Datas disponíveis:</strong> {circuito.datas_disponiveis}</p>
      </Resumo>
      <form onSubmit={handleSubmit}>
        <label>Nome completo
          <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
        </label>
        <label>Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>WhatsApp
          <input type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange} required />
        </label>
        <label>Quantidade de pessoas
          <input type="number" name="pessoas" min={1} value={form.pessoas} onChange={handleChange} required />
        </label>
        <label>Data desejada
          <input type="date" name="data" value={form.data} onChange={handleChange} required />
        </label>
        <label>Observações
          <textarea name="observacoes" value={form.observacoes} onChange={handleChange} />
        </label>
        <button type="submit">Confirmar Reserva</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  max-width: 600px;
  margin: 120px auto 40px;
  padding: 20px;
  font-family: sans-serif;
`;

const Image = styled.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  border-radius: 10px;
  margin: 20px 0;
`;

const Resumo = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 24px;

  p {
    margin: 0.5rem 0;
  }
`;
