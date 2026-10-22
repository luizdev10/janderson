import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const NUMERO_WHATS = "5588998070744";

function WhatsappFloat() {
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisivel(window.scrollY > 500);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const texto = "Olá! Quero fazer uma tatuagem";
    const link = `https://wa.me/${NUMERO_WHATS}?text=${encodeURIComponent(texto)}`;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className={`fixed bottom-5 left-5 z-40 rounded-full shadow-lg shadow-black/40 transition-all duration-300 ${
                visivel ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
            }`}
        >
            <span className="flutua flex items-center gap-2 rounded-full bg-acento px-4 py-3.5 font-medium text-tinta transition-all duration-300 hover:scale-105 hover:bg-acento-luz active:scale-95">
                <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
                <span className="hidden text-sm sm:inline">WhatsApp</span>
            </span>
        </a>
    );
}

export default WhatsappFloat;
