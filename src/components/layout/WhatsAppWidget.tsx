import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger, PopoverClose } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { X, MessageCircle, Send } from 'lucide-react';

interface WhatsAppWidgetProps {
	phone?: string;
	defaultMessage?: string;
}

export default function WhatsAppWidget({
	phone = '51999999999',
	defaultMessage = 'Hola Montara, quisiera información sobre sus proyectos inmobiliarios.',
}: WhatsAppWidgetProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [name, setName] = useState('');
	const [mobile, setMobile] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name.trim() || !mobile.trim()) {
			setError('Por favor completa todos los campos para continuar.');
			return;
		}

		setError('');
		const customMessage = `Hola Montara, mi nombre es ${name.trim()} (Celular: ${mobile.trim()}). ${defaultMessage}`;
		const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(customMessage)}`;

		window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
		setIsOpen(false);
		setName('');
		setMobile('');
	};

	return (
		<aside className="fixed bottom-6 right-6 z-50">
			<Popover open={isOpen} onOpenChange={setIsOpen}>
				<PopoverTrigger asChild>
					<button
						type="button"
						aria-label="Abrir chat de WhatsApp"
						className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-level-3 transition-all duration-300 hover:scale-110 hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
					>
						<MessageCircle className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12" />
						<span className="absolute top-0 right-0 flex h-4 w-4">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
							<span className="relative inline-flex h-4 w-4 rounded-full border-2 border-surface bg-accent"></span>
						</span>
					</button>
				</PopoverTrigger>

				<PopoverContent
					align="end"
					side="top"
					sideOffset={16}
					className="w-[340px] sm:w-[380px] rounded-card border border-outline bg-surface p-6 shadow-level-3"
				>
					{/* Popover Header */}
					<div className="flex items-start justify-between border-b border-outline pb-4">
						<div>
							<h3 className="font-display text-title-lg font-bold uppercase tracking-tight text-primary">
								Hablemos por WhatsApp
							</h3>
							<p className="mt-1 font-body-sm text-body-sm text-text-muted">
								Déjanos tus datos y te atenderemos de inmediato.
							</p>
						</div>
						<PopoverClose asChild>
							<button
								type="button"
								aria-label="Cerrar ventana"
								className="rounded-input p-1 text-text-muted transition-colors hover:bg-surface-tinted hover:text-text focus:outline-none"
							>
								<X className="h-5 w-5" />
							</button>
						</PopoverClose>
					</div>

					{/* Popover Form */}
					<form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
						{error && (
							<div className="rounded-input border border-error-container bg-error-container/20 px-3 py-2 text-caption text-error font-medium">
								{error}
							</div>
						)}

						<div className="flex flex-col gap-1.5">
							<label htmlFor="wsp-name" className="font-caption text-caption font-bold uppercase tracking-wider text-text">
								Nombre
							</label>
							<Input
								id="wsp-name"
								type="text"
								placeholder="Tu nombre completo"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
									if (error) setError('');
								}}
								required
							/>
						</div>

						<div className="flex flex-col gap-1.5">
							<label htmlFor="wsp-mobile" className="font-caption text-caption font-bold uppercase tracking-wider text-text">
								Número de Celular
							</label>
							<Input
								id="wsp-mobile"
								type="tel"
								placeholder="Ej. 987 654 321"
								value={mobile}
								onChange={(e) => {
									setMobile(e.target.value);
									if (error) setError('');
								}}
								required
							/>
						</div>

						<Button
							type="submit"
							variant="default"
							className="mt-2 h-12 w-full uppercase font-title-md tracking-wider shadow-md gap-2"
						>
							<Send className="h-4 w-4" />
							<span>Continuar a WhatsApp</span>
						</Button>
					</form>
				</PopoverContent>
			</Popover>
		</aside>
	);
}
