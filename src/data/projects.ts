export interface ProjectSpec {
	label: string;
	value: string;
	sub?: string;
	highlight?: boolean;
}

export interface ProjectAmenity {
	icon: string;
	label: string;
}

export interface Project {
	id: string;
	title: string;
	type: 'lotes' | 'dptos' | 'casas';
	typeLabel: string;
	status: 'comercializacion' | 'preventa' | 'comercializado';
	statusLabel: string;
	statusVariant: 'available' | 'upcoming' | 'sold';
	developer: 'montara' | 'aliado';
	developerLabel: string;
	location: 'chiclayo' | 'trujillo' | 'lima' | 'piura';
	locationDetail: string;
	budget: 'under50' | '50to100' | 'above100';
	price: string;
	priceLabel: string;
	priceBadge?: string;
	badgeExtra?: string;
	description: string;
	specs: ProjectSpec[];
	amenities: ProjectAmenity[];
	image: string;
	imageAlt: string;
	featured?: boolean;
	soldOut?: boolean;
	ctaText: string;
	ctaLink: string;
}

export const PROJECTS: Project[] = [
	{
		id: 'finca-sevilla',
		title: 'Finca Sevilla',
		type: 'lotes',
		typeLabel: 'Lotes Campestres',
		status: 'comercializacion',
		statusLabel: 'En comercialización',
		statusVariant: 'available',
		developer: 'montara',
		developerLabel: 'Comercializado por Montara',
		location: 'chiclayo',
		locationDetail: 'A 25 min de Real Plaza Chiclayo',
		budget: 'under50',
		price: '$38,000 USD',
		priceLabel: 'Precio base',
		priceBadge: 'Financiamiento directo disponible',
		badgeExtra: 'Etapa I: 68% reservado',
		description:
			'Exclusivos terrenos campestres desde 500 m² diseñados con armonía paisajística para vivir en calma, rodeado de naturaleza, o consolidar una inversión con sólida plusvalía en el norte peruano.',
		specs: [
			{ label: 'Metrajes', value: 'Desde 500 m²' },
			{ label: 'Precio base', value: '$38,000 USD', highlight: true },
		],
		amenities: [
			{ icon: 'park', label: 'Áreas verdes' },
			{ icon: 'door_front', label: 'Pórtico de ingreso' },
			{ icon: 'alt_route', label: 'Vías afirmadas' },
			{ icon: 'water_drop', label: 'Agua de riego' },
		],
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuCLYYT2RKUTzkBc3tGnOmo110AqEWJqcRr6OtJjD9vWX1SfhzYHgCujFno5n2ZWKIDBVj4joHbATAZK3qlpJwm2WU_phaTo-CeLuL2_h0921bBuvvvlJK_qLgzEdaVmGVGP7VRke_7cY6qxK8_sU6p0JvmEo9Ej4snbNeHqRW7Nk6Ijcb9quwLCfWL1P8LYYS8rsZVG84w4CcjEBGpLeNJfj_cSlCBJFV8CM0sFnBRXixNG78VFev-OnA',
		imageAlt: 'Condominio campestre Finca Sevilla en Chiclayo',
		featured: true,
		ctaText: 'Ver Showroom Digital',
		ctaLink: '/proyectos/finca-sevilla',
	},
	{
		id: 'los-alamos',
		title: 'Residencial Los Álamos',
		type: 'dptos',
		typeLabel: 'Departamentos Urbanos',
		status: 'comercializacion',
		statusLabel: 'En comercialización',
		statusVariant: 'available',
		developer: 'aliado',
		developerLabel: 'Desarrollo Aliado',
		location: 'chiclayo',
		locationDetail: 'Chiclayo Moderno',
		budget: '50to100',
		price: '$78,500 USD',
		priceLabel: 'Inversión desde',
		priceBadge: 'Bono MiVivienda',
		description:
			'Edificio multifamiliar de baja densidad con terrazas privadas, lobby de doble altura y certificación eco-eficiente.',
		specs: [
			{ label: 'Tipología', value: '2 y 3 dorm.', sub: '(72 a 98 m²)' },
			{ label: 'Inversión desde', value: '$78,500 USD', highlight: true, sub: 'Bono MiVivienda' },
		],
		amenities: [
			{ icon: 'elevator', label: 'Ascensor' },
			{ icon: 'deck', label: 'Rooftop' },
			{ icon: 'local_parking', label: 'Cocheras' },
		],
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuDj-rOvcSJnfwhUJaezruaEjV_Ia8dwCzDkGNgtK97KA2_a6L2MdQ7YqxF1h1RRCMS7qCFDKcDdLTxMgiAW_Ek_69aTIPYcK5eWipCEO1Uu7yFg0pzYbPW_d3iMXDZJACa1Gm34Rp-yDwfl5hgP74jFpl409xg9vRRNTYx-S188ml7auxRZduELF4vghW-KaY-14bzqD6tyG3a_el9s6waR8Zt6z1iduBK0O9xPZeH5zJ4rGlccrd8ptg',
		imageAlt: 'Edificio Residencial Los Álamos en Chiclayo',
		ctaText: 'Ver Showroom Digital',
		ctaLink: '/proyectos/los-alamos',
	},
	{
		id: 'el-roble',
		title: 'Condominio Campestre El Roble',
		type: 'lotes',
		typeLabel: 'Lotes Campestres',
		status: 'preventa',
		statusLabel: 'Próxima preventa',
		statusVariant: 'upcoming',
		developer: 'montara',
		developerLabel: 'Proyecto Montara',
		location: 'chiclayo',
		locationDetail: 'Monsefú - Chiclayo',
		budget: 'under50',
		price: '$42,000 USD',
		priceLabel: 'Precio Preventa',
		priceBadge: 'Lista Cero',
		description:
			'Lotes residenciales con clima campestre privilegiado todo el año, ciclovías internas y cerco vivo perimetral.',
		specs: [
			{ label: 'Área de Lote', value: 'Desde 600 m²', sub: 'Independizados' },
			{ label: 'Precio Preventa', value: '$42,000 USD', highlight: true, sub: 'Lista Cero' },
		],
		amenities: [
			{ icon: 'pool', label: 'Laguna' },
			{ icon: 'sports_tennis', label: 'Cancha Pádel' },
			{ icon: 'security', label: 'Garita 24/7' },
		],
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuDOyb2LacFiTKU9ECGsAu-4jmDScP-yWOcSvG3szenWu5LUABugfIdbY8RbxsJqY92HWngnhugO2XFqV-VuZg6btCzJ7o72rKc4d8l8TOuHayMX6pKWcjbIFXlxKGqWs-9dGcKX3XkE5N01Jm5k76IvccN0d0cwnQNxqR2IoHEh5hOC5tC9RmttHRnoAndWpB1aSalGi_hGtf8LJg5KjIOkMBYMIXTGf6pP7HIEomcm2wPldjPgqkrvRw',
		imageAlt: 'Condominio Campestre El Roble en Monsefú',
		ctaText: 'Ver Showroom Digital',
		ctaLink: '/proyectos/el-roble',
	},
	{
		id: 'mirador-costa',
		title: 'Mirador de la Costa',
		type: 'casas',
		typeLabel: 'Playa & Balneario',
		status: 'comercializacion',
		statusLabel: 'En comercialización',
		statusVariant: 'available',
		developer: 'aliado',
		developerLabel: 'Playa & Balneario',
		location: 'chiclayo',
		locationDetail: 'Pimentel, Chiclayo',
		budget: '50to100',
		price: '$95,000 USD',
		priceLabel: 'Desde',
		priceBadge: 'Entrega 2025',
		description:
			'Casas de playa y condominios panorámicos con vista directa al mar y club house náutico exclusivo.',
		specs: [
			{ label: 'Tipología', value: 'Casas & Dptos', sub: '120 a 190 m²' },
			{ label: 'Desde', value: '$95,000 USD', highlight: true, sub: 'Entrega 2025' },
		],
		amenities: [
			{ icon: 'waves', label: 'Vista al mar' },
			{ icon: 'outdoor_grill', label: 'Zona BBQ' },
			{ icon: 'local_cafe', label: 'Lounge' },
		],
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuBCncwBkp19FpKbs6buCjbgwecUulgbSxzZufye8O5Q0ZZsBJA47-uA75IEHftfMCty2cRiqLJ4upXycivj9OJWAdg-qcjajlJzTSYNJp54o1IP6h1YZxFM5Uu8Wm-O4aGAPQb5-bIDOgSsNye4gmFSvHnVO9wZQ6QROr_Orpt37HNfV1lKqU1RCkO1lE-lNVzz18aAtCZSyl0ZdcqOQTyy1UxrgiZFRco-0Z5MRQ4ZuaVrNIyCUUMLHw',
		imageAlt: 'Mirador de la Costa en Pimentel',
		ctaText: 'Ver Showroom Digital',
		ctaLink: '/proyectos/mirador-costa',
	},
	{
		id: 'villas-del-valle',
		title: 'Villas del Valle',
		type: 'lotes',
		typeLabel: 'Lotes Campestres',
		status: 'comercializado',
		statusLabel: 'Comercializado con éxito',
		statusVariant: 'sold',
		developer: 'montara',
		developerLabel: 'Proyecto Montara',
		location: 'chiclayo',
		locationDetail: 'La Victoria - Lambayeque',
		budget: 'under50',
		price: '100% Vendido',
		priceLabel: 'Colocación',
		priceBadge: 'Proyecto Entregado',
		description:
			'120 lotes campestres comercializados y entregados con servicios básicos habilitados y títulos independizados.',
		specs: [
			{ label: 'Colocación', value: '100% de lotes' },
			{ label: 'Estado Legal', value: 'Proyecto Entregado', highlight: true },
		],
		amenities: [
			{ icon: 'history_edu', label: 'Títulos en Sunarp' },
			{ icon: 'energy_savings_leaf', label: 'Luz y Agua' },
		],
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuC_sVLNHGsD0pMTMeMkWfdXPbp6l_zJLtLB9EpguM9ReJZTDd1Ftxg6VyZY5qEuknhDsuBAzAqwjhHHYB-5rCaRxh0DcQmSZw81b4WC-t21eYGi2iy3kcoaHueIsRhmeMp52wUDIWgqw8aFeDF13yHvC5WESZHZnLtvxJTxSGHbVDqZOlpSPmywR7b7gQBN-RNff1iZPDs9jjflGlF99lt9JhSIeGflLLoG2ep4KLW3_C6fcI02wuobog',
		imageAlt: 'Proyecto entregado Villas del Valle',
		soldOut: true,
		ctaText: 'Ver caso de éxito',
		ctaLink: '/proyectos/villas-del-valle',
	},
	{
		id: 'altos-del-huerto',
		title: 'Altos del Huerto',
		type: 'lotes',
		typeLabel: 'Lotes Campestres',
		status: 'comercializacion',
		statusLabel: 'En comercialización',
		statusVariant: 'available',
		developer: 'montara',
		developerLabel: 'Proyecto Montara',
		location: 'chiclayo',
		locationDetail: 'Reque - Chiclayo',
		budget: 'under50',
		price: '$34,000 USD',
		priceLabel: 'Inversión',
		priceBadge: 'Cuotas sin intereses',
		description:
			'Espacios ecológicos rodeados de naturaleza y huertos frutales, ideales para primera o segunda vivienda campestre de descanso.',
		specs: [
			{ label: 'Metrajes', value: 'Desde 450 m²', sub: 'Topografía plana' },
			{ label: 'Inversión', value: '$34,000 USD', highlight: true, sub: 'Cuotas sin intereses' },
		],
		amenities: [
			{ icon: 'yard', label: 'Bio-huertos' },
			{ icon: 'hiking', label: 'Senderos' },
			{ icon: 'fence', label: 'Cerco perimétrico' },
		],
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuDk6MfucV2j-YVaDvYhT98D-bIH5JOoYV7c6TvNP3kKoYcHMrt0rjM625jBTg0zTzwZ0zKhQOPstmyVTYcqJ0iKfDODiHNKfKLkEJd_a1Lusxc6_c5PHNZ9BbdUsQAf1K1GiHZujRDI6j1OM3PY1bifPMlByrqx22lj4TheMOFkYCPlwH-8NIWSKHTGLbJsrf4nRqMJQnijZd0KQcmIxG9DeDSphFK01zdv2kqviu_BD_iIHodce0f3dA',
		imageAlt: 'Altos del Huerto en Reque',
		ctaText: 'Ver Showroom Digital',
		ctaLink: '/proyectos/altos-del-huerto',
	},
];
