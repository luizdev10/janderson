import { Clock, MapPin, MessageCircle } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { Link } from "react-router-dom";
import Reveal from "./reveal.jsx";
import fotoContato from "../assets/img/fotosobre.webp";

const NUMERO_WHATS = "5588998070744";
const LINK_WHATS_GERAL = `https://wa.me/${NUMERO_WHATS}?text=${encodeURIComponent("Olá! Quero fazer uma tatuagem")}`;
const ENDERECO = "Av. João Alves Rocha 763, Seminário, Crato, CE, 63113080";
const LINK_MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ENDERECO)}`;
const horarios = [
  { dias: "Seg, ter, qua e sex", horas: "10:30–17:00" },
  { dias: "Sábado", horas: "11:00–15:00" },
  { dias: "Quinta e domingo", horas: "Fechado" },
];
const paginas = [
  { href: "#inicio", label: "Início" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#orcamento", label: "Orçamento" },
  { href: "#contato", label: "Contato" },
];

export default function Contato() {
  return (
    <section id="contato" className="textura-grao scroll-mt-16 w-full bg-tinta px-4 pt-20 sm:px-6 md:pt-28">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[6fr_5fr] md:gap-20 md:items-center">
        <div>
          <Reveal>
            <h2 className="font-gotica text-6xl lowercase leading-[0.9] text-papel md:text-8xl">
              vamos criar
              <br />
              sua arte
            </h2>
          </Reveal>
          <p className="mt-6 max-w-sm leading-relaxed text-cinza">
            Conte sua ideia pelo WhatsApp do Janderson. O orçamento final é combinado na conversa.
          </p>

          <div className="mt-10 flex flex-col gap-5 text-papel/85">
            <a
              href="https://www.instagram.com/jandersontattooink/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-3 transition-colors hover:text-papel"
            >
              <SiInstagram className="h-5 w-5 shrink-0 opacity-70" />
              @jandersontattooink
            </a>
            <a
              href={LINK_MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex max-w-xs items-start gap-3 leading-relaxed transition-colors hover:text-papel"
            >
              <MapPin className="mt-1 h-5 w-5 shrink-0 opacity-70" strokeWidth={1.5} />
              {ENDERECO}
            </a>
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 opacity-70" strokeWidth={1.5} />
              <ul className="leading-relaxed">
                {horarios.map((h) => (
                  <li key={h.dias}>
                    {h.dias}: {h.horas}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={LINK_WHATS_GERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex w-fit items-center justify-center gap-2.5 rounded-full bg-acento px-7 py-4 font-medium text-tinta shadow-[0_8px_30px_-8px_var(--color-acento)] transition-all duration-500 ease-in-out hover:scale-[1.04] hover:bg-acento-luz active:scale-95"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
            Pedir orçamento no WhatsApp
          </a>
          <p className="mt-4 max-w-sm text-xs text-cinza">
            Orçamentos apenas pelo WhatsApp — não trabalhamos com reembolso.
          </p>
        </div>

        <figure className="relative mx-auto hidden w-full md:block md:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm border-1 border-solid border-stencil"
          />
          <img
            src={fotoContato}
            alt="Janderson, tatuador especialista em realismo"
            className="relative aspect-[3/4] w-full rounded-sm object-cover object-[center_22%]"
          />
        </figure>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl border-t border-white/10 py-14 text-sm text-cinza">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <p className="font-gotica text-2xl lowercase text-papel">janderson tattoo</p>

            <div className="mt-6 flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-70" strokeWidth={1.5} />
              <p className="leading-relaxed">{ENDERECO}</p>
            </div>

            <div className="mt-3 flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 opacity-70" strokeWidth={1.5} />
              <ul className="leading-relaxed">
                {horarios.map((h) => (
                  <li key={h.dias}>
                    {h.dias}: {h.horas}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={LINK_WHATS_GERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-3 transition-colors hover:text-papel"
            >
              <MessageCircle className="h-4 w-4 shrink-0 opacity-70" strokeWidth={1.5} />
              (88) 998070744
            </a>

            <a
              href="https://www.instagram.com/jandersontattooink/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Janderson Tattoo"
              className="mt-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-papel hover:text-papel"
            >
              <SiInstagram className="h-4 w-4" />
            </a>
          </div>

          <div>
            <p className="text-papel">Páginas</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {paginas.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="transition-colors hover:text-papel">
                    {p.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/politicas-de-privacidade" className="transition-colors hover:text-papel">
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-cinza/70">
          © {new Date().getFullYear()} Janderson Tattoo
        </p>
      </footer>
    </section>
  );
}
