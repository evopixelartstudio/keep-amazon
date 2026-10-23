"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { TaNaMao } from "@/components/sections/TaNaMao";
import { Solutions } from "@/components/sections/Solutions";
import { CallToAction } from "@/components/sections/CallToAction";
import { InterestModal } from "@/components/sections/InterestModal";

export default function HomePage() {
  const [interestModalOpen, setInterestModalOpen] = useState(false);

  const openInterestModal = () => setInterestModalOpen(true);
  const closeInterestModal = () => setInterestModalOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 01. Header Fixo com Transição no Scroll */}
      <Header onOpenInterestModal={openInterestModal} />

      {/* 02. Hero Cinematográfico com Imagem da Floresta e Selo Editorial */}
      <Hero
        onExploreClick={() => {
          const sobreElem = document.getElementById("sobre");
          if (sobreElem) sobreElem.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 03. Marquee Ticker com Fundo Lime */}
      <Marquee />

      {/* 04. Sobre a Keep Amazon (Mais que produtos, um movimento) */}
      <About onLearnMoreClick={openInterestModal} />

      {/* 05. Projeto Tá na Mão (Estante viva e produtos regionais) */}
      <TaNaMao onLearnMoreClick={openInterestModal} />

      {/* 06. Nossas Iniciativas (6 Cards de Soluções) */}
      <Solutions onExploreOptionsClick={openInterestModal} />

      {/* 07. Chamada para Adesão (Faça Parte) */}
      <CallToAction onJoinClick={openInterestModal} />

      {/* 08. Modal Interativo de Adesão e Interesse */}
      <InterestModal
        isOpen={interestModalOpen}
        onClose={closeInterestModal}
      />

      {/* 09. Footer com Marca, Menu, Redes e Tagline */}
      <Footer onOpenInterestModal={openInterestModal} />
    </main>
  );
}
