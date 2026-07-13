export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Custom Furniture' | 'Space Planning' | 'Turnkey Projects' | 'Renovation';
  year: string;
  location: string;
  area: string;
  image: string;
  description: string;
  details: string[];
}

export const portfolioProjects: Project[] = [
  {
    id: 'cliffside-oak-villa',
    title: 'CLIFFSIDE OAK VILLA',
    category: 'Residential',
    year: '2025',
    location: 'Alibaug, Maharashtra',
    area: '450 m²',
    image: '/images/hero-tv-wall.png',
    description: 'A study in warm modernism and seamless indoor-outdoor living. Built around custom open-pore timber paneling, floating console units, and light stone slabs that catch natural daylight.',
    details: [
      'Custom floor-to-ceiling oak TV wall system',
      'Integrated linear ambient lighting tracks',
      'Travertine stone texture details',
      'Floating timber console joinery'
    ]
  },
  {
    id: 'worli-walnut-penthouse',
    title: 'WORLI WALNUT PENTHOUSE',
    category: 'Residential',
    year: '2026',
    location: 'Mumbai, India',
    area: '320 m²',
    image: '/images/projects-sofa.png',
    description: 'An architectural high-rise residence featuring structured timber partitions, low-slung luxury modular seating, and a customized walnut center table framing views of the Sea Link.',
    details: [
      'Bespoke walnut wood paneling and cabinetry',
      'Low-slung modular sofa design',
      'Curated texture scheme with linen and wood',
      'Concealed storage and shadow gap borders'
    ]
  },
  {
    id: 'editorial-design-studio',
    title: 'THE EDITORIAL STUDIO',
    category: 'Commercial',
    year: '2025',
    location: 'Bengaluru, India',
    area: '680 m²',
    image: '/images/materials-wood-panel.png',
    description: 'An architectural workspace and material library designed for creative collaboration. Highlighting geometric curved plaster partitions, textured panels, and linear vertical oak slats.',
    details: [
      'Curved hand-plastered partition modules',
      'Vertical acoustic oak timber slats',
      'Natural linen textures and stone displays',
      'Smart dimmable architectural light integration'
    ]
  },
  {
    id: 'boucle-chair-study',
    title: 'THE BOUCLÉ CHAIRS',
    category: 'Custom Furniture',
    year: '2026',
    location: 'Custom Production',
    area: 'Bespoke Objects',
    image: '/images/furniture-chairs.png',
    description: 'Minimalist dining chairs sculpted from solid dark-stained oak and organic cream bouclé textures. Designed to offer architectural form with exceptional tactile comfort.',
    details: [
      'Solid open-pore dark-lacquered European Oak',
      'Tactile premium bouclé seating cushion',
      'Geometric vertical pillar support frame',
      'Traditional mortise and tenon joinery'
    ]
  },
  {
    id: 'teak-portal-residence',
    title: 'THE TEAK PORTAL RESIDENCE',
    category: 'Turnkey Projects',
    year: '2025',
    location: 'New Delhi, India',
    area: '580 m²',
    image: '/images/craftsmanship-door.png',
    description: 'A luxurious turnkey residential redesign combining heritage wood craftsmanship with modern architectural styling. Marked by a monumental solid teak double entrance door.',
    details: [
      'Hand-carved solid teak wood entrance doors',
      'Turnkey project management & staging',
      'Bespoke floor-to-ceiling brass-lined joinery',
      'Imported Italian marble flooring restoration'
    ]
  }
];
