// routes/reservas.js
const express = require("express");
const router = express.Router();
const { enviarEmail } = require("../services/emailService");

router.post("/", async (req, res) => {
  const { nome, email, whatsapp, pessoas, data, observacoes, circuito } = req.body;

  // Montar conteúdo do e-mail
  const mensagem = `
Reserva solicitada no site:

Nome: ${nome}
Email: ${email}
WhatsApp: ${whatsapp}
Data desejada: ${data}
Quantidade de pessoas: ${pessoas}
Observações: ${observacoes}
Circuito: ${circuito}
  `;

  try {
    // Enviar para cliente
    await enviarEmail({
      para: email,
      assunto: "Sua reserva está em análise",
      texto: `Olá ${nome}, recebemos sua solicitação de reserva. Nosso time comercial entrará em contato em breve.\n\nResumo:\n${mensagem}`,
    });

    // Enviar para time comercial
    await enviarEmail({
      para: "reservas.slp@gmail.com",
      assunto: "Nova solicitação de reserva",
      texto: mensagem,
    });

    // Enviar cópia para você
    await enviarEmail({
      para: "pancinha60@gmail.com",
      assunto: "Cópia de nova reserva",
      texto: mensagem,
    });

    res.status(200).json({ message: "Reservas enviadas com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar e-mails" });
  }
});

module.exports = router;
