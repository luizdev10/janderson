import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "", delay = 0 }) {
    const ref = useRef(null);
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entrada]) => {
                if (entrada.isIntersecting) {
                    setVisivel(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -15% 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: visivel ? `${delay}ms` : "0ms" }}
            className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:blur-none ${
                visivel ? "opacity-100 translate-y-0 scale-100 blur-none" : "opacity-0 translate-y-10 scale-[0.96] blur-sm"
            } ${className}`}
        >
            {children}
        </div>
    );
}

export default Reveal;
