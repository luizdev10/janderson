import fotoOrcamento from "../assets/img/foto2.webp";
import Reveal from "./reveal.jsx";

function Orcamento() {
    return (
        <section id="orcamento" className="textura-grao scroll-mt-16 w-full bg-grafite px-4 py-20 sm:px-6 md:py-28">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <h2 className="font-display text-5xl font-bold lowercase leading-[1.05] text-acento-luz md:text-7xl">
                        orçamento
                    </h2>
                </Reveal>

                <div className="mt-14 grid gap-14 md:grid-cols-[5fr_6fr] md:gap-20">
                    <figure className="relative mx-auto w-full max-w-sm md:max-w-none">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm border-1 border-solid border-stencil"
                        />
                        <img
                            src={fotoOrcamento}
                            alt="Detalhe de tatuagem blackwork, mostrando o nível de precisão do traço"
                            className="relative aspect-[3/4] w-full rounded-sm object-cover"
                        />
                    </figure>

                    <div className="flex max-w-xl flex-col gap-6 text-lg leading-relaxed text-papel/75">
                        <p>
                            O valor de cada tatuagem é calculado depois de entender sua ideia — ele varia de acordo
                            com o tamanho, a complexidade do desenho e o local do corpo.
                        </p>
                        <p className="border-l-2 border-solid border-acento py-1 pl-5 text-2xl font-semibold leading-snug text-papel">
                            Realismo, fine line e blackwork pedem tempo e precisão, por isso prefiro combinar o
                            orçamento numa conversa a arriscar um número que não valorize o seu desenho.
                        </p>

                        <a
                            href="#contato"
                            className="mt-4 w-fit rounded-full bg-acento px-7 py-3.5 font-medium text-tinta shadow-[0_8px_30px_-8px_var(--color-acento)] transition-all duration-500 ease-in-out hover:scale-[1.04] hover:bg-acento-luz active:scale-95"
                        >
                            Pedir orçamento
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Orcamento;
