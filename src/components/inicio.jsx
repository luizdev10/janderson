import fotoHero from "../assets/img/fotoini.webp";

const NUMERO_WHATS = "5588998070744";

const estatisticas = [
    { numero: "Premiado", legenda: "Expo Tattoo Cariri 2025" },
    { numero: "Autorais", legenda: "projetos exclusivos" },
    { numero: "3 estilos", legenda: "realismo, fine line e blackwork" },
];

function Inicio() {
    const texto = "Olá! Quero fazer uma tatuagem";
    const mensagem = `https://wa.me/${NUMERO_WHATS}?text=${encodeURIComponent(texto)}`;

    return (
        <section id="inicio" className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-tinta pt-16">
            <img
                src={fotoHero}
                alt="Janderson, tatuador especialista em realismo"
                className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-tinta via-tinta/65 to-tinta/20" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-tinta via-transparent to-tinta/50" />
            <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-acento/25 blur-[110px]" />

            <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-4 py-24 sm:px-6 md:grid-cols-[6fr_3fr] md:items-center md:gap-10">
                <div className="text-center md:text-left">
                    <h1 className="leading-none text-papel">
                        <span className="revela block font-display text-[clamp(2.75rem,9vw,5.5rem)] font-extrabold tracking-tight">
                            janderson
                        </span>
                        <span className="surge block px-2 py-2 font-assinatura text-acento-luz text-[clamp(3.5rem,13vw,8rem)] leading-[1.15] [text-shadow:0_0_40px_var(--color-acento)]">
                            tattoo
                        </span>
                    </h1>

                    <p className="surge surge-1 mx-auto mt-8 max-w-md text-lg leading-relaxed text-papel/80 md:mx-0">
                        Realismo, fine line e blackwork em projetos autorais exclusivos, em Crato - Região do Cariri.
                        Premiado na Expo Tattoo Cariri 2025.
                    </p>

                    <div className="surge surge-2 mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:justify-start">
                        <a
                            href={mensagem}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-acento px-7 py-3.5 font-medium text-tinta shadow-[0_8px_30px_-8px_var(--color-acento)] transition-all duration-500 ease-in-out hover:scale-[1.04] hover:bg-acento-luz active:scale-95"
                        >
                            Pedir orçamento no WhatsApp
                        </a>
                        <a
                            href="#trabalhos"
                            className="rounded-full border border-papel/30 px-6 py-3.5 font-medium text-papel transition-all duration-500 ease-in-out hover:scale-[1.04] hover:border-acento-luz hover:text-acento-luz active:scale-95"
                        >
                            Ver trabalhos
                        </a>
                    </div>
                </div>

                <div className="surge surge-3 flex flex-col items-center gap-6 text-center md:items-start md:text-left">
                    {estatisticas.map((item) => (
                        <div key={item.legenda} className="w-full">
                            <p className="font-display text-4xl font-bold text-papel md:text-5xl">{item.numero}</p>
                            <p className="mt-1 text-sm leading-snug text-papel/70">{item.legenda}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Inicio;
