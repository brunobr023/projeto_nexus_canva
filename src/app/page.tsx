// src/app/page.tsx
"use client"; // Torna o componente um Client Component

import { Box, Button, Text, Title } from "@canva/app-ui-kit";
import dynamic from "next/dynamic";
import React from "react";

// Importa dinamicamente o ClientScript para que ele seja renderizado apenas no cliente
const ClientScript = dynamic(() => import('../../components/ClienteComponent'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      {/* Coloque o ClientScript aqui para garantir que seu código dependente de 'document' seja executado no cliente */}
      <ClientScript />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="full"
        paddingX="4u"
        background="neutral"
      >
        <Title tagName="h1" size="large">
          Bem-vindo ao NICS Nexus
        </Title>
        <Box>
          <Text>
            Esta é a página inicial do sistema de integração de chamadas.
          </Text>
        </Box>
        <Button variant="primary" onClick={() => alert("Ação!")}>
          Clique aqui
        </Button>
      </Box>
    </>
  );
}