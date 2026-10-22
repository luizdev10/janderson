import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import logo from "../assets/img/logo1.webp";

const itens = [
    { id: "inicio", label: "Início" },
    { id: "trabalhos", label: "Trabalhos" },
    { id: "sobre", label: "Sobre" },
    { id: "orcamento", label: "Orçamento" },
    { id: "contato", label: "Contato" },
];

const NUMERO_WHATS = "5588998070744";
const LINK_WHATS = `https://wa.me/${NUMERO_WHATS}?text=${encodeURIComponent("Olá! Quero fazer uma tatuagem")}`;

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [ativo, setAtivo] = useState("inicio");
    const [rolado, setRolado] = useState(false);

    useEffect(() => {
        const onScroll = () => setRolado(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entradas) => entradas.forEach((e) => e.isIntersecting && setAtivo(e.target.id)),
            { rootMargin: "-45% 0px -50% 0px" }
        );
        itens.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const clique = (e, id) => {
        e.preventDefault();
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const link = (item, extra = "") => (
        <a
            href={`#${item.id}`}
            onClick={(e) => clique(e, item.id)}
            aria-current={ativo === item.id ? "true" : undefined}
            className={`relative block transition-colors ${extra} ${
                ativo === item.id ? "text-papel" : "text-cinza hover:text-papel"
            }`}
        >
            {item.label}
            <span
                aria-hidden="true"
                className={`border-b absolute inset-x-0 -bottom-2 origin-left text-acento-luz transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    ativo === item.id ? "scale-x-100" : "scale-x-0"
                }`}
            />
        </a>
    );

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
                rolado ? "border-white/15 bg-tinta/90 backdrop-blur-md" : "border-white/10 bg-tinta"
            }`}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
                <a
                    href="#inicio"
                    onClick={(e) => clique(e, "inicio")}
                    aria-label="Janderson Tattoo, voltar ao início"
                    className="flex h-12 items-center gap-2.5"
                >
                    <img src={logo} alt="" aria-hidden="true" className="h-10 w-10 rounded-full bg-papel object-contain p-1" />
                    <span className="font-gotica text-xl leading-[0.95] lowercase text-papel">janderson tattoo</span>
                </a>

                <div className="hidden items-center gap-7 lg:flex">
                    <ul className="flex items-center gap-7 font-texto text-[15px] font-medium">
                        {itens.map((item) => (
                            <li key={item.id}>{link(item)}</li>
                        ))}
                    </ul>
                    <a
                        href="https://www.instagram.com/jandersontattooink/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram do Janderson Tattoo"
                        className="text-cinza transition-colors hover:text-acento-luz"
                    >
                        <SiInstagram className="h-5 w-5" />
                    </a>
                    <a
                        href={LINK_WHATS}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-acento px-5 py-2 text-sm font-medium text-tinta transition-all duration-300 hover:scale-105 hover:bg-acento-luz active:scale-95"
                    >
                        <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                        Pedir orçamento
                    </a>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    className="p-2 text-papel lg:hidden"
                >
                    {menuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
                </button>
            </div>

            {menuOpen && (
                <ul className="flex flex-col gap-1 border-t border-white/10 px-6 pb-6 pt-3 sm:px-8 font-texto text-lg lg:hidden">
                    {itens.map((item) => (
                        <li key={item.id}>{link(item, "w-fit py-2")}</li>
                    ))}
                    <li className="flex items-center gap-5 pt-3">
                        <a
                            href={LINK_WHATS}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-fit items-center gap-2 rounded-full bg-acento px-5 py-2.5 text-base font-medium text-tinta transition-all duration-300 hover:scale-105 hover:bg-acento-luz active:scale-95"
                        >
                            <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                            Pedir orçamento
                        </a>
                        <a
                            href="https://www.instagram.com/jandersontattooink/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram do Janderson Tattoo"
                            className="text-cinza transition-colors hover:text-acento-luz"
                        >
                            <SiInstagram className="h-5 w-5" />
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default NavBar;
