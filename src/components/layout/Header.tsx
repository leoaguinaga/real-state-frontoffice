import { useState, useEffect } from 'react';

const NAV_LINKS = [
	{ label: 'Inicio', href: '/' },
	{ label: 'Proyectos', href: '/proyectos' },
	{ label: 'Para Desarrolladores', href: '/para-desarrolladores' },
	{ label: 'Nosotros', href: '/nosotros' },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 30) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-surface/90 backdrop-blur-md shadow-level-1 border-b border-outline py-3.5'
					: 'bg-gradient-to-b from-black/75 via-black/30 to-transparent py-5'
			}`}
		>
			<div className="container-page flex items-center justify-between gap-6 transition-all duration-300">
				<a href="/" className="flex items-center gap-2">
					<span
						className={`font-display text-title-lg font-bold transition-colors ${
							scrolled ? 'text-primary' : 'text-white'
						}`}
					>
						Montara
					</span>
				</a>

				<nav className="hidden lg:flex items-center gap-8">
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className={`font-label-md text-label-md font-medium transition-colors ${
								scrolled
									? 'text-text hover:text-accent'
									: 'text-white/90 hover:text-white'
							}`}
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
						className={`inline-flex h-10 w-10 items-center justify-center rounded-input lg:hidden ${
							scrolled ? 'text-text' : 'text-white'
						}`}
						onClick={() => setOpen((v) => !v)}
					>
						<span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
					</button>
				</div>
			</div>

			{open && (
				<nav
					className={`lg:hidden transition-colors ${
						scrolled ? 'bg-surface border-b border-outline' : 'bg-primary/95 backdrop-blur-md'
					}`}
				>
					<div className="container-page flex flex-col gap-1 py-4">
						{NAV_LINKS.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className={`rounded-input px-3 py-2.5 font-label-md text-label-md font-medium transition-colors ${
									scrolled
										? 'text-text hover:bg-surface-tinted'
										: 'text-white/90 hover:bg-white/10 hover:text-white'
								}`}
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
