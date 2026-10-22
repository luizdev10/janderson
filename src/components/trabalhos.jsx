import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import Reveal from "./reveal.jsx";

import trabalho1 from "../assets/img/foto1.webp";
import trabalho2 from "../assets/img/foto2.webp";
import trabalho3 from "../assets/img/foto3.webp";
import trabalho4 from "../assets/img/foto4.webp";
import trabalho5 from "../assets/img/foto5.webp";
import trabalho6 from "../assets/img/foto6.webp";
import trabalho7 from "../assets/img/foto7.webp";
import trabalho8 from "../assets/img/foto8.webp";
import trabalho9 from "../assets/img/foto9.webp";
import trabalho10 from "../assets/img/foto10.webp";
import trabalho11 from "../assets/img/foto11.webp";
import trabalho12 from "../assets/img/foto12.webp";

const photosWork = [
  { id: 1, url: trabalho1, tag: "Realismo", alt: "Tatuagem realista de mulher com máscara e óculos de aviador na coxa", desc: "Retrato realista em preto e cinza, com máscara estilo motociclista, na coxa." },
  { id: 2, url: trabalho2, tag: "Blackwork", alt: "Tatuagem blackwork de cobra enrolada em galho seco no antebraço", desc: "Cobra entrelaçada em um galho seco com teia de aranha, traço blackwork detalhado no antebraço." },
  { id: 3, url: trabalho3, tag: "Realismo", alt: "Tatuagem realista do Capitão América na panturrilha", desc: "Retrato realista do personagem com escudo e capacete, na panturrilha." },
  { id: 4, url: trabalho4, tag: "Realismo", alt: "Tatuagem realista de São Miguel Arcanjo com medalha no braço", desc: "São Miguel Arcanjo empunhando espada sobre serpente, com medalha e inscrição, fechamento de braço." },
  { id: 5, url: trabalho5, tag: "Realismo", alt: "Tatuagem realista de ancião com corvo na panturrilha", desc: "Rosto de ancião com barba longa e corvo ao fundo, em realismo na panturrilha." },
  { id: 6, url: trabalho6, tag: "Realismo", alt: "Tatuagem realista de anjo guerreiro com espada no braço", desc: "Anjo guerreiro alado empunhando espada, em realismo no braço." },
  { id: 7, url: trabalho7, tag: "Realismo", alt: "Tatuagem realista de família com avó, bebê e terço no antebraço", desc: "Composição realista de família com legenda manuscrita e terço, no antebraço." },
  { id: 8, url: trabalho8, tag: "Fine Line", alt: "Tatuagem de leão com elementos geométricos fine line no antebraço", desc: "Cabeça de leão rugindo combinada a formas geométricas em fine line, no antebraço." },
  { id: 9, url: trabalho9, tag: "Blackwork", alt: "Tatuagem blackwork de elmo espartano com frase no antebraço", desc: "Elmo espartano com flecha e frase motivacional, traço blackwork no antebraço." },
  { id: 10, url: trabalho10, tag: "Realismo", alt: "Tatuagem realista de cachorro de estimação no antebraço", desc: "Retrato realista de cão de estimação com nome e pegada, no antebraço." },
  { id: 11, url: trabalho11, tag: "Realismo", alt: "Tatuagem realista inspirada em Michael Jackson no antebraço", desc: "Cena realista inspirada no álbum Bad, com detalhe colorido, no antebraço." },
  { id: 12, url: trabalho12, tag: "Realismo", alt: "Tatuagem realista de cavaleiro templário com medalha no braço", desc: "Cavaleiro templário com medalha de São Bento ao fundo, em realismo no braço." },
];

function Trabalhos() {
  const [openIndex, setOpenIndex] = useState(null);

  const lista = photosWork;
  const total = lista.length;
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => setOpenIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setOpenIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, prev, next]);

  const current = isOpen ? lista[openIndex] : null;

  return (
    <>
    <section id="trabalhos" className="textura-grao scroll-mt-16 w-full bg-grafite px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-6xl font-bold lowercase leading-none text-papel md:text-8xl">
            trabalhos
          </h2>
          <p className="mt-5 max-w-md text-cinza">
            Uma seleção de peças recentes. Toque numa foto para ver em tamanho maior.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 [grid-auto-flow:dense] auto-rows-[160px] gap-[10px] md:grid-cols-4 md:auto-rows-[200px]">
          {lista.map((item, index) => {
            const destaque = index === 0;
            const largo = index === 3;
            return (
              <Reveal
                key={item.id}
                delay={Math.min(index, 7) * 80}
                className={`m-0 ${destaque ? "col-span-2 row-span-2" : largo ? "col-span-2" : ""}`}
              >
                <figure className="m-0 h-full w-full">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    aria-label={`Ampliar: ${item.alt}`}
                    className="group relative block h-full w-full cursor-zoom-in overflow-hidden rounded-sm"
                  >
                    <img
                      src={item.url}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-tinta/90 via-tinta/0 to-tinta/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 px-3 py-2.5 text-xs text-papel opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 group-active:opacity-100"
                    >
                      {item.tag}
                    </span>
                  </button>
                </figure>
              </Reveal>
            );
          })}
        </div>

        <a
          href="https://www.instagram.com/jandersontattooink/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-sm border border-white/20 px-5 py-3 text-papel transition-colors hover:border-papel"
        >
          <SiInstagram className="h-4 w-4" />
          Ver mais no Instagram
        </a>
      </div>
    </section>

    {current && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-tinta/95 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            autoFocus
            aria-label="Fechar"
            className="absolute right-4 top-4 rounded-full p-2 text-papel transition-colors hover:bg-white/10"
          >
            <X className="h-7 w-7" strokeWidth={1.5} />
          </button>

          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-papel transition-colors hover:bg-white/10 md:left-6"
            >
              <ChevronLeft className="h-9 w-9" strokeWidth={1.5} />
            </button>
          )}

          <figure onClick={(e) => e.stopPropagation()} className="aparece-escala flex max-h-full max-w-3xl flex-col items-center">
            <img src={current.url} alt={current.alt} className="max-h-[72vh] w-auto rounded-sm object-contain" />
            <figcaption className="mt-5 max-w-xl text-center text-sm leading-relaxed text-papel/85">
              {current.desc}
              <span className="mt-2 block text-xs text-cinza">
                {openIndex + 1} de {total}
              </span>
            </figcaption>
          </figure>

          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Próxima foto"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-papel transition-colors hover:bg-white/10 md:right-6"
            >
              <ChevronRight className="h-9 w-9" strokeWidth={1.5} />
            </button>
          )}
        </div>,
        document.body
      )}
    </>
  );
}

export default Trabalhos;
