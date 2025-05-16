// components/ClienteComponent.js
"use client"; // (no Next.js 13 com app directory, para indicar que este componente é Client Component)
import React, { useEffect } from 'react';

export default function ClienteComponent() {
  useEffect(() => {
    // Código que acessa o document em ambiente de cliente
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://exemplo.com/script.js';
    document.head.appendChild(script);
    script.onload = () => {
      console.log('Script carregado');
    };
  }, []);

  return <div>Este é um componente que usa o document.</div>;
}