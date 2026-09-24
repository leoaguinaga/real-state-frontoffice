import { useState } from 'react';

const NAV_LINKS = [
	{ label: 'Inicio', href: '/' },
	{ label: 'Proyectos', href: '/proyectos' },
	{ label: 'Para Desarrolladores', href: '/para-desarrolladores' },
	{ label: 'Nosotros', href: '/nosotros' },
];

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-all duration-300">
			<div className="container-page flex h-24 items-center justify-between gap-6">
				<a href="/" className="flex items-center gap-2">
					<span className="font-display text-title-lg font-bold text-white">Montara</span>
				</a>

				<nav className="hidden lg:flex items-center gap-8">
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="font-label-md text-label-md text-white/90 transition-colors hover:text-white"
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<a
						href="https://wa.me/"
						target="_blank"
						rel="noopener noreferrer"
						className="hidden sm:inline-flex items-center gap-2 rounded-input bg-accent px-4 py-2 font-label-md text-label-md font-semibold text-white shadow-level-1 transition-all hover:bg-accent-hover"
					>
						Hablar con un asesor
					</a>
					<button
						type="button"
						aria-label="Abrir menú"
						className="inline-flex h-10 w-10 items-center justify-center rounded-input text-white lg:hidden"
						onClick={() => setOpen((v) => !v)}
					>
						<span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
					</button>
				</div>
			</div>

			{open && (
				<nav className="lg:hidden bg-primary/95 backdrop-blur-md">
					<div className="container-page flex flex-col gap-1 py-4">
						{NAV_LINKS.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="rounded-input px-3 py-2.5 font-label-md text-label-md text-white/90 transition-colors hover:bg-white/10 hover:text-white"
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
