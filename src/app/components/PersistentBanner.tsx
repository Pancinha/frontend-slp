"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PersistentBanner() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Esconde se rolar mais de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="banner"
      className={`fixed top-0 w-full z-50 bg-blue-900 transition-transform duration-275 ease-in-out ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="w-full h-[100px] flex items-center justify-between px-6">
        {/* Logo à esquerda */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              id="imagemLogo"
              src="/Soy-Loco-Por-Ti-America-logo-para-site-1.webp"
              alt="Logo Soy Loco Por Ti América"
              className="w-full h-[225px] mt-[5%] ml-[20%] object-contain"
            />
          </Link>
        </div>

        {/* Botões centralizados */}
        <div
          id="menubuttons"
          className="absolute left-1/2 transform -translate-x-1/2 flex gap-4"
        >
          <Link href="/circuitos">
            <button
              className={`w-[106px] h-[40px] rounded-full font-width-400 transition-all duration-300 ${
                pathname === "/circuitos"
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                  : "bg-blue-600 text-white"
              }`}
            >
              Circuitos
            </button>
          </Link>

          <Link href="/tour/1">
            <button
              className={`w-[106px] h-[40px] rounded-full font-width-400 transition-all duration-300 ${
                pathname.startsWith("/tour")
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                  : "bg-blue-600 text-white"
              }`}
            >
              Tours
            </button>
          </Link>

          <Link href="/grupos">
            <button
              className={`w-[106px] h-[40px] rounded-full font-width-400 transition-all duration-300 ${
                pathname === "/grupos"
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                  : "bg-blue-600 text-white"
              }`}
            >
              Grupos
            </button>
          </Link>
              
        </div>
      </div>
    </header>
  );
}

