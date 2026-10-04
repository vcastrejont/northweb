export const groups = [
  { name: 'Brand', entries: [['brand-logo', 'Logo', 'La marca auténtica y sus reglas de uso.']] },
  { name: 'Colors', entries: [
    ['brand-colors', 'Brand colors', 'Naranja, verde, carbón y neutrales de Northweb.'],
    ['semantic-colors', 'Semantic colors', 'Superficies, texto, borde y estados en ambos temas.'],
  ] },
  { name: 'Fonts', entries: [['type-scale', 'Type scale', 'Inter para interfaz; Merriweather para acentos editoriales.']] },
  { name: 'Layout', entries: [['layout-system', 'Grid & spacing', 'Retícula adaptable, ritmo de 4px, radios y sombras.']] },
  { name: 'Actions', entries: [['button', 'Buttons', 'Acciones primaria, secundaria y de texto.']] },
  { name: 'Visual elements', entries: [
    ['icon', 'Icons', 'Iconografía outline coherente y accesible.'],
    ['card', 'Cards', 'Superficies limpias para contenido agrupado.'],
  ] },
  { name: 'Navigation', entries: [['primary-navigation', 'Primary navigation', 'Enlaces claros, CTA y menú móvil accesible.']] },
  { name: 'Content', entries: [['content-voice', 'Voice & tone', 'Lenguaje directo, humano y experto.']] },
  { name: 'Motion', entries: [['motion-guidelines', 'Guidelines', 'Movimiento sutil con soporte de reducción.']] },
  { name: 'Document', entries: [['brand-guide', 'Guía completa', 'Especificación de marca original de Northweb Studio.']] },
] as const;

export const entries = [
  { id: 'overview', name: 'Overview', description: 'Identidad, fundamentos y componentes del sistema Northweb.', group: '' },
  ...groups.flatMap(group => group.entries.map(([id, name, description]) => ({ id, name, description, group: group.name }))),
];