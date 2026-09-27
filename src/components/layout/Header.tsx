import { useState } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Para Desarrolladores", href: "/para-desarrolladores" },
  { label: "Nosotros", href: "/nosotros" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-page flex items-center justify-between gap-6 transition-all duration-300">
        <a href="/" className="flex items-center gap-2">
          <span className="site-header__foreground font-display text-title-lg font-bold">
            Montara
          </span>
        </a>

        <div className="flex items-center gap-3">
          <nav className="hidden lg:flex items-center gap-8 mr-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="site-header__foreground font-label-md text-label-md font-medium hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-input bg-primary text-white px-4 py-2 font-label-md text-label-md font-semibold shadow-level-1 transition-all hover:bg-primary/80"
          >
            Explorar proyectos
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            className="site-header__foreground inline-flex h-10 w-10 items-center justify-center rounded-input lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="bg-surface lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-input px-3 py-2.5 font-label-md text-label-md font-medium text-text transition-colors hover:bg-surface-tinted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-input bg-accent px-4 py-2.5 font-label-md text-label-md font-semibold text-white"
            >
              Hablar con un asesor
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
