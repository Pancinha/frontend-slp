"use client";

import React from "react";
import styled from "styled-components";

export default function FiltrosLateral() {
  return (
    <Sidebar>
      <Section>
        <Title>💰 Preço</Title>
        <PriceRange>
          <span>Mínimo</span>
          <input type="range" min="0" max="10000" />
          <span>R$ 10.000+</span>
        </PriceRange>
      </Section>

      <Section>
        <Title>📅 Data</Title>
        <Input type="month" />
      </Section>

      <Section>
        <Title>🌎 Regiões</Title>
        <Checkbox label="Cordilheira dos Andes" />
        <Checkbox label="Patagônia" />
        <Checkbox label="Cataratas do Iguaçu/Iguazú" />
        <Checkbox label="Noroeste da Argentina" />
      </Section>

      <Section>
        <Title>🏙️ Cidade inicial e final</Title>
        <Label>Cidade inicial</Label>
        <Input type="text" placeholder="Ex: Buenos Aires" />
        <Label>Cidade final</Label>
        <Input type="text" placeholder="Ex: Lima" />
      </Section>

      <Section>
        <Title>🧭 Estilos de aventura</Title>
        <Checkbox label="Festival e Eventos" />
        <Checkbox label="Explorador" />
        <Checkbox label="Cultura aprofundada" />
        <Checkbox label="Caminhadas e Trekking" />
        <Checkbox label="Polar" />
        <Checkbox label="Comida e Culinária" />
        <Checkbox label="Bicicleta" />
      </Section>
    </Sidebar>
  );
}

const Checkbox = ({ label }: { label: string }) => (
  <CheckboxWrapper>
    <input type="checkbox" id={label} />
    <label htmlFor={label}>{label}</label>
  </CheckboxWrapper>
);

// ESTILOS

const Sidebar = styled.aside`
  width: 280px;
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 0 10px rgba(0,0,0,0.06);
  font-family: 'Montserrat', sans-serif;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-size: 14px;
  color: #374151;
  margin-bottom: 4px;
  display: block;
  font-weight: 500;
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  input {
    accent-color: #003893;
    margin-right: 8px;
    transform: scale(1.1);
  }

  label {
    font-size: 14px;
    color: #333;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  color: #333;
  background-color: #f9f9f9;
  margin-bottom: 12px;

  &::placeholder {
    color: #aaa;
  }
`;

const PriceRange = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    font-size: 14px;
    color: #374151;
  }

  input[type="range"] {
    width: 100%;
    accent-color: #003893;
    height: 4px;
  }
`;
